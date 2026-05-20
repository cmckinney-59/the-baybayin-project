import { useState, useEffect, useRef } from "react";

import SaveButtonContainter from "../Buttons/SaveButtons/SaveButtonsContainer.tsx";
import TransliteratorContainer from "../TransliteratorContainer/TransliteratorContainer.tsx";
import WordReviewDialog from "../Dialog/WordReviewDialog.tsx";
import { useWordsDictionary } from "../../contexts/WordsDictionaryContext.tsx";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import { ALPHABETS_DATA } from "../../data/ALPHABETS_DATA";
import { processPlqadTextKlinzhai } from "../../utils/TextProcessors/PlqadTextProcessor";
import CheckBoxContainer from "../CheckBoxContainer/CheckBoxContainer.tsx";

const processors: Record<string, (word: string) => string | Promise<string>> =
  Object.fromEntries(ALPHABETS_DATA.map((a) => [a.name, a.processor]));

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
  const [useBagwisFont, setUseBagwisFont] = useState<boolean>(false);
  const [useXVowelKiller, setUseXVowelKiller] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);
  const isBaybayin = currentAlphabet === "Baybayin";
  const isPlqad = currentAlphabet === "Plqad";

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
      const baybayinProcessor = processors.Baybayin;
      const processedWords = words.map((word) => {
        return wordsDictionary[word] || baybayinProcessor(word);
      });
      setTransliteratedText(processedWords.join(" "));
    }
  }, [isBaybayin, wordsDictionary, text]);

  const handleChange = async (currentText: string): Promise<void> => {
    const words = currentText.trim().split(/\s+/);
    const newDict: { [word: string]: string } = {};
    let processWord: ((word: string) => string | Promise<string>) | undefined;

    processWord = processors[currentAlphabet];
    if (isPlqad && useKlinzhai) {
      processWord = processPlqadTextKlinzhai;
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

  const handleClearInput = () => {
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
        useBagwisFont={useBagwisFont}
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
        checked={useKlinzhai}
        onChange={(checked) => setUseKlinzhai(checked)}
        label="Input language is English."
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
