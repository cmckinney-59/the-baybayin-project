import { useState, useEffect, useRef } from "react";

import SaveButtonContainter from "../Buttons/SaveButtons/SaveButtonsContainer.tsx";
import TransliteratorContainer from "../TransliteratorContainer/TransliteratorContainer.tsx";
import WordReviewDialog from "../Dialog/WordReviewDialog.tsx";
import { useWordsDictionary } from "../../contexts/WordsDictionaryContext.tsx";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import { ALPHABETS_DATA } from "../../data/ALPHABETS_DATA";
import { processPlqadTextKlinzhai } from "../../utils/TextProcessors/PlqadTextProcessor";
import CheckBoxContainer from "../CheckBoxContainer/CheckBoxContainer.tsx";
import processBaybayinText from "../../utils/TextProcessors/BaybayinTextProcessor.ts";
import processDeseretText from "../../utils/TextProcessors/DeseretTextProcessor.ts";
import {
  DEFAULT_BAYBAYIN_FONT_ID,
  type BaybayinFontId,
} from "../../data/BaybayinData/BAYBAYIN_FONTS_DATA";

const processors: Record<string, (word: string) => string | Promise<string>> =
  Object.fromEntries(ALPHABETS_DATA.map((a) => [a.name, a.processor]));

const DESERET_DEBOUNCE_MS = 350;

interface TransliteratorProps {
  currentAlphabet: string;
}

export default function Transliterator({
  currentAlphabet,
}: TransliteratorProps) {
  const [text, setText] = useState<string>("");
  const [transliteratedText, setTransliteratedText] = useState<string>("");
  const {
    wordsDictionary,
    setWordsDictionary,
    clearWordsDictionary,
    wordContainsBorrowedSound,
  } = useWordsDictionary();
  const { showExperimentalFeatures } = useExperimentalFeatures();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [textContainsBorrowedWords, setTextContainsBorrowedWords] =
    useState<boolean>(false);
  const [useCombinedCharacters, setUseCombinedCharacters] =
    useState<boolean>(false);
  const [useTechNumbers, setUseTechNumbers] = useState<boolean>(false);
  const [useKlinzhai, setUseKlinzhai] = useState<boolean>(false);
  const [selectedBaybayinFont, setSelectedBaybayinFont] =
    useState<BaybayinFontId>(DEFAULT_BAYBAYIN_FONT_ID);
  const [useXVowelKiller, setUseXVowelKiller] = useState<boolean>(false);
  const [useHollowKudlits, setUseHollowKudlits] = useState<boolean>(true);
  const [useUnicode, setUseUnicode] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);
  const deseretDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const deseretRequestIdRef = useRef(0);
  const isBaybayin = currentAlphabet === "Baybayin";
  const isPlqad = currentAlphabet === "Plqad";
  const isDeseret = currentAlphabet === "Deseret";

  useEffect(() => {
    if (textareaRef.current && outputRef.current) {
      textareaRef.current.style.height = "auto";
      outputRef.current.style.height = "auto";

      const textareaHeight = textareaRef.current.scrollHeight;
      const outputHeight = outputRef.current.scrollHeight;
      const maxHeight = Math.max(textareaHeight, outputHeight, 175);

      textareaRef.current.style.height = maxHeight + "px";
      outputRef.current.style.height = maxHeight + "px";
    }
  }, [text, transliteratedText]);

  useEffect(() => {
    if (isBaybayin && text.trim() && Object.keys(wordsDictionary).length > 0) {
      const words = text.trim().split(/\s+/);
      const baybayinProcessor = (word: string) =>
        processBaybayinText(
          word,
          useXVowelKiller,
          selectedBaybayinFont,
          useHollowKudlits,
          useUnicode,
        );
      const processedWords = words.map((word) => {
        return wordsDictionary[word] || baybayinProcessor(word);
      });
      setTransliteratedText(processedWords.join(" "));
    }
  }, [
    isBaybayin,
    wordsDictionary,
    text,
    useXVowelKiller,
    selectedBaybayinFont,
    useHollowKudlits,
    useUnicode,
  ]);

  const handleChange = async (currentText: string): Promise<void> => {
    // Deseret uses a remote API — translate the whole string once (not per word),
    // and debounce while typing.
    if (isDeseret) {
      if (deseretDebounceRef.current) {
        clearTimeout(deseretDebounceRef.current);
      }

      const requestId = ++deseretRequestIdRef.current;
      deseretDebounceRef.current = setTimeout(() => {
        void (async () => {
          const trimmed = currentText.trim();
          if (!trimmed) {
            if (requestId !== deseretRequestIdRef.current) return;
            setWordsDictionary({});
            setTransliteratedText("");
            return;
          }

          try {
            const deseretText = await processDeseretText(trimmed);
            if (requestId !== deseretRequestIdRef.current) return;

            const englishWords = trimmed.split(/\s+/);
            const deseretWords = deseretText.trim().split(/\s+/);
            const newDict: { [word: string]: string } = {};
            englishWords.forEach((word, i) => {
              newDict[word] = deseretWords[i] ?? "";
            });
            setWordsDictionary(newDict);
            setTransliteratedText(deseretText);
          } catch {
            if (requestId !== deseretRequestIdRef.current) return;
            setTransliteratedText("");
          }
        })();
      }, DESERET_DEBOUNCE_MS);
      return;
    }

    const words = currentText.trim().split(/\s+/);
    const newDict: { [word: string]: string } = {};
    let processWord: ((word: string) => string | Promise<string>) | undefined;

    processWord = processors[currentAlphabet];
    if (isPlqad && useKlinzhai) {
      processWord = processPlqadTextKlinzhai;
    }
    if (isBaybayin) {
      processWord = (word: string) =>
        processBaybayinText(
          word,
          useXVowelKiller,
          selectedBaybayinFont,
          useHollowKudlits,
          useUnicode,
        );
    }
    if (processWord) {
      const processedWords = await Promise.all(
        words.map((word) => Promise.resolve(processWord!(word))),
      );
      words.forEach((word, i) => {
        newDict[word] = processedWords[i];
      });
      setWordsDictionary(newDict);
      setTransliteratedText(processedWords.join(" "));
    } else {
      setWordsDictionary({});
      setTransliteratedText("");
    }
  };

  useEffect(() => {
    return () => {
      if (deseretDebounceRef.current) {
        clearTimeout(deseretDebounceRef.current);
      }
    };
  }, []);

  // Re-process when alphabet changes while keeping the same input text.
  useEffect(() => {
    void handleChange(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only when alphabet changes
  }, [currentAlphabet]);

  // Re-process Plqad when English-input mode toggles.
  useEffect(() => {
    if (!isPlqad) return;
    void handleChange(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mirror alphabet effect; handleChange uses latest text from closure
  }, [useKlinzhai]);

  // Re-process Baybayin when font or kudlit/vowel-killer options change.
  useEffect(() => {
    if (!isBaybayin) return;
    void handleChange(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mirror useKlinzhai effect; handleChange uses latest text from closure
  }, [useXVowelKiller, useHollowKudlits, selectedBaybayinFont, useUnicode]);

  const handleClearInput = () => {
    if (deseretDebounceRef.current) {
      clearTimeout(deseretDebounceRef.current);
    }
    deseretRequestIdRef.current += 1;
    setText("");
    setTransliteratedText("");
    clearWordsDictionary();
  };

  return (
    <div>
      <TransliteratorContainer
        text={text}
        transliteratedText={transliteratedText}
        currentAlphabet={currentAlphabet}
        textareaRef={textareaRef}
        outputRef={outputRef}
        onTextChange={(currentValue) => {
          setText(currentValue);
          void handleChange(currentValue);
        }}
        onClear={handleClearInput}
        aurebeshTechNumbers={useTechNumbers}
        useCombinedCharacters={useCombinedCharacters}
        selectedBaybayinFont={selectedBaybayinFont}
        useKlinzhai={useKlinzhai}
      />
      {isBaybayin && text.toLowerCase().includes("c") && (
        <p className="note-paragraph">
          * The letter &apos;c&apos; does not show in baybayin font. Replace any
          c&apos;s with k&apos;s or s&apos;s accordingly. See the How To Read
          section for more information.
        </p>
      )}
      <CheckBoxContainer
        currentAlphabet={currentAlphabet}
        useCombinedCharacters={useCombinedCharacters}
        useTechNumbers={useTechNumbers}
        useKlinzhai={useKlinzhai}
        selectedBaybayinFont={selectedBaybayinFont}
        useXVowelKiller={useXVowelKiller}
        useHollowKudlits={useHollowKudlits}
        useUnicode={useUnicode}
        textContainsBorrowedWords={textContainsBorrowedWords}
        setUseCombinedCharacters={setUseCombinedCharacters}
        setUseTechNumbers={setUseTechNumbers}
        setUseKlinzhai={setUseKlinzhai}
        setSelectedBaybayinFont={setSelectedBaybayinFont}
        setUseXVowelKiller={setUseXVowelKiller}
        setUseHollowKudlits={setUseHollowKudlits}
        setUseUnicode={setUseUnicode}
        setTextContainsBorrowedWords={setTextContainsBorrowedWords}
      />
      <div className="action-buttons">
        {isBaybayin &&
          showExperimentalFeatures &&
          textContainsBorrowedWords && (
            <button
              onClick={() => setIsDialogOpen(true)}
              disabled={transliteratedText.trim().length === 0}
              className={transliteratedText.trim().length > 0 ? "active" : ""}
            >
              Validate
            </button>
          )}
        <SaveButtonContainter
          originalText={text}
          transliteratedText={transliteratedText}
        />
      </div>
      {isBaybayin && isDialogOpen && (
        <WordReviewDialog
          onClose={() => setIsDialogOpen(false)}
          useXVowelKiller={useXVowelKiller}
          wordsWithC={Object.keys(wordsDictionary).filter((word) => {
            const lowerWord = word.toLowerCase();
            return (
              lowerWord.includes("c") ||
              lowerWord.includes("ch") ||
              lowerWord.includes("j") ||
              lowerWord.includes("qu")
            );
          })}
          wordContainsBorrowedSound={wordContainsBorrowedSound}
        />
      )}
    </div>
  );
}
