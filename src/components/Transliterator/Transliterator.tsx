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
import {
  DEFAULT_BAYBAYIN_FONT_ID,
  getBaybayinFontClass,
  type BaybayinFontId,
} from "../../data/BaybayinData/BAYBAYIN_FONTS_DATA";
import { phoneticFromDeseretText } from "../../data/DeseretData/deseretPhoneticMap";
import {
  mergeBaybayinKudlit,
  phoneticFromBaybayinText,
} from "../../data/BaybayinData/baybayinPhoneticMap";

import Keyboard from "../Keyboard/Keyboard.tsx";
import { DESERET_KEYBOARD_LAYOUT } from "../../data/DeseretData/deseretKeyboardLayout";
import { getBaybayinKeyboardLayout } from "../../data/BaybayinData/baybayinKeyboardLayout";

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
  const [selectedBaybayinFont, setSelectedBaybayinFont] =
    useState<BaybayinFontId>(DEFAULT_BAYBAYIN_FONT_ID);
  const [useXVowelKiller, setUseXVowelKiller] = useState<boolean>(false);
  const [useHollowKudlits, setUseHollowKudlits] = useState<boolean>(true);
  const [useUnicode, setUseUnicode] = useState<boolean>(false);
  const [useSingleLineInput, setUseSingleLineInput] = useState<boolean>(true);
  const [outputOnlyMode, setOutputOnlyMode] = useState<boolean>(false);
  const [activeField, setActiveField] = useState<"input" | "output">("input");
  const [inputCursor, setInputCursor] = useState(0);
  const [outputCursor, setOutputCursor] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const outputRef = useRef<HTMLTextAreaElement | null>(null);
  const isBaybayin = currentAlphabet === "Baybayin";
  const isPlqad = currentAlphabet === "Plqad";
  const isDeseret = currentAlphabet === "Deseret";
  const showOnScreenKeyboard =
    showExperimentalFeatures && (isDeseret || isBaybayin);

  useEffect(() => {
    if (!showOnScreenKeyboard && outputOnlyMode) {
      setOutputOnlyMode(false);
    }
  }, [showOnScreenKeyboard, outputOnlyMode]);

  useEffect(() => {
    if (outputOnlyMode) {
      setActiveField("output");
    }
  }, [outputOnlyMode]);

  useEffect(() => {
    if (textareaRef.current && outputRef.current) {
      const isMobile = window.matchMedia("(max-width: 720px)").matches;
      if (outputOnlyMode) {
        textareaRef.current.style.height = "";
        outputRef.current.style.height = "";
        return;
      }
      if (isMobile && useSingleLineInput) {
        textareaRef.current.style.height = "";
        outputRef.current.style.height = "";
        return;
      }

      textareaRef.current.style.height = "auto";
      outputRef.current.style.height = "auto";

      const textareaHeight = textareaRef.current.scrollHeight;
      const outputHeight = outputRef.current.scrollHeight;
      const maxHeight = Math.max(textareaHeight, outputHeight, 175);

      textareaRef.current.style.height = maxHeight + "px";
      outputRef.current.style.height = maxHeight + "px";
    }
  }, [text, transliteratedText, useSingleLineInput, outputOnlyMode]);

  const reverseOutputToInput = (output: string): string | null => {
    if (isDeseret) return phoneticFromDeseretText(output);
    if (isBaybayin) return phoneticFromBaybayinText(output);
    return null;
  };

  const handleChange = async (currentText: string): Promise<void> => {
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
      const nextOutput = processedWords.join(" ");
      setTransliteratedText(nextOutput);
      setOutputCursor(nextOutput.length);
    } else {
      setWordsDictionary({});
      setTransliteratedText("");
      setOutputCursor(0);
    }
  };

  const syncInputFromOutput = (output: string) => {
    setTransliteratedText(output);
    const reversed = reverseOutputToInput(output);
    if (reversed !== null) {
      setText(reversed);
      setInputCursor(reversed.length);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useKlinzhai]);

  // Re-process Baybayin when font or kudlit/vowel-killer options change.
  useEffect(() => {
    if (!isBaybayin) return;
    void handleChange(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useXVowelKiller, useHollowKudlits, selectedBaybayinFont, useUnicode]);

  // Keep Baybayin dictionary-driven output in sync when reviewing borrowed words.
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

  const handleClearInput = () => {
    setText("");
    setTransliteratedText("");
    setInputCursor(0);
    setOutputCursor(0);
    clearWordsDictionary();
  };

  const applyInputAtCursor = (nextText: string, nextCursor: number) => {
    setText(nextText);
    setInputCursor(nextCursor);
    void handleChange(nextText);
    requestAnimationFrame(() => {
      const el = textareaRef.current;
      if (!el) return;
      el.setSelectionRange(nextCursor, nextCursor);
      if (outputOnlyMode) {
        el.blur();
        return;
      }
      el.focus();
    });
  };

  const applyOutputAtCursor = (nextText: string, nextCursor: number) => {
    syncInputFromOutput(nextText);
    setOutputCursor(nextCursor);
    requestAnimationFrame(() => {
      const el = outputRef.current;
      if (!el) return;
      el.setSelectionRange(nextCursor, nextCursor);
      if (outputOnlyMode) {
        el.blur();
        return;
      }
      el.focus();
    });
  };

  const getFieldSelection = (
    field: "input" | "output",
  ): { start: number; end: number } => {
    const el = field === "input" ? textareaRef.current : outputRef.current;
    const fallback = field === "input" ? inputCursor : outputCursor;
    if (el && document.activeElement === el) {
      return {
        start: el.selectionStart ?? fallback,
        end: el.selectionEnd ?? fallback,
      };
    }
    return { start: fallback, end: fallback };
  };

  const targetField: "input" | "output" = outputOnlyMode
    ? "output"
    : activeField;

  const handleKeyboardInsert = (payload: {
    inputValue: string;
    outputValue: string;
  }) => {
    if (payload.inputValue === "\n") {
      if (targetField === "output") {
        const { start, end } = getFieldSelection("output");
        const nextText =
          transliteratedText.slice(0, start) +
          "\n" +
          transliteratedText.slice(end);
        applyOutputAtCursor(nextText, start + 1);
      } else {
        applyInputAtCursor(text.slice(0, inputCursor) + "\n" + text.slice(inputCursor), inputCursor + 1);
      }
      return;
    }

    if (isBaybayin && payload.inputValue !== "\n") {
      const insert =
        useXVowelKiller && payload.inputValue === "+"
          ? "x"
          : payload.inputValue;
      const sel = outputOnlyMode
        ? { start: inputCursor, end: inputCursor }
        : getFieldSelection("input");
      const before = text.slice(0, sel.start);
      const after = text.slice(sel.end);
      const merged = mergeBaybayinKudlit(before, insert);
      const inserted = merged ?? before + insert;
      const nextText = inserted + after;
      applyInputAtCursor(nextText, inserted.length);
      return;
    }

    if (targetField === "output") {
      const { start, end } = getFieldSelection("output");
      // Key labels are already font/kudlit-aware (incl. hollow vs solid).
      const value = payload.outputValue;
      const nextText =
        transliteratedText.slice(0, start) +
        value +
        transliteratedText.slice(end);
      applyOutputAtCursor(nextText, start + value.length);
      return;
    }

    const { start, end } = getFieldSelection("input");
    const value =
      isBaybayin && useXVowelKiller && payload.inputValue === "+"
        ? "x"
        : payload.inputValue;
    const nextText = text.slice(0, start) + value + text.slice(end);
    applyInputAtCursor(nextText, start + value.length);
  };

  const handleKeyboardBackspace = () => {
    if (targetField === "output") {
      const { start, end } = getFieldSelection("output");
      if (start !== end) {
        const nextText =
          transliteratedText.slice(0, start) + transliteratedText.slice(end);
        applyOutputAtCursor(nextText, start);
        return;
      }
      if (start === 0) return;
      const before = transliteratedText.slice(0, start);
      const chars = [...before];
      chars.pop();
      const nextBefore = chars.join("");
      const nextText = nextBefore + transliteratedText.slice(start);
      applyOutputAtCursor(nextText, nextBefore.length);
      return;
    }

    const { start, end } = getFieldSelection("input");
    if (start !== end) {
      const nextText = text.slice(0, start) + text.slice(end);
      applyInputAtCursor(nextText, start);
      return;
    }
    if (start === 0) return;

    const before = text.slice(0, start);
    // Deseret slash-phonemes delete as one unit.
    const phonemeMatch = before.match(/\/[^/\n]+\/$/u);
    if (phonemeMatch) {
      const deleteCount = phonemeMatch[0].length;
      const nextText = text.slice(0, start - deleteCount) + text.slice(start);
      applyInputAtCursor(nextText, start - deleteCount);
      return;
    }
    // Baybayin inherent-a syllable from keyboard (ba, ka, nga, …).
    if (isBaybayin && /nga$/i.test(before)) {
      const nextText = text.slice(0, start - 3) + text.slice(start);
      applyInputAtCursor(nextText, start - 3);
      return;
    }
    if (isBaybayin && /[bcdfghjklmnpqrstwxy]a$/i.test(before)) {
      const nextText = text.slice(0, start - 2) + text.slice(start);
      applyInputAtCursor(nextText, start - 2);
      return;
    }
    // Baybayin kudlit / virama syllable (be, bi, b+, nge, ng+, …).
    if (isBaybayin && /ng[eioux+]$/i.test(before)) {
      const nextText = text.slice(0, start - 3) + text.slice(start);
      applyInputAtCursor(nextText, start - 3);
      return;
    }
    if (isBaybayin && /[bcdfghjklmnpqrstwxy][eioux+]$/i.test(before)) {
      const nextText = text.slice(0, start - 2) + text.slice(start);
      applyInputAtCursor(nextText, start - 2);
      return;
    }

    const nextText = text.slice(0, start - 1) + text.slice(start);
    applyInputAtCursor(nextText, start - 1);
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
          setInputCursor(currentValue.length);
          void handleChange(currentValue);
        }}
        onOutputChange={(currentValue) => {
          syncInputFromOutput(currentValue);
          setOutputCursor(currentValue.length);
        }}
        onClear={handleClearInput}
        aurebeshTechNumbers={useTechNumbers}
        useCombinedCharacters={useCombinedCharacters}
        selectedBaybayinFont={selectedBaybayinFont}
        useUnicode={useUnicode}
        useKlinzhai={useKlinzhai}
        useSingleLineInput={useSingleLineInput}
        outputOnlyMode={outputOnlyMode}
        suppressSoftKeyboard={outputOnlyMode}
        onInputFocus={() => setActiveField("input")}
        onOutputFocus={() => setActiveField("output")}
        onInputCursorChange={setInputCursor}
        onOutputCursorChange={setOutputCursor}
      />
      {isDeseret && showOnScreenKeyboard && (
        <Keyboard
          layout={DESERET_KEYBOARD_LAYOUT}
          onInsert={handleKeyboardInsert}
          onBackspace={handleKeyboardBackspace}
          onEnter={() =>
            handleKeyboardInsert({ inputValue: "\n", outputValue: "\n" })
          }
          fontClass="deseret-font"
        />
      )}
      {isBaybayin && showOnScreenKeyboard && (
        <Keyboard
          layout={getBaybayinKeyboardLayout({
            fontId: selectedBaybayinFont,
            useUnicode,
            useHollowKudlits,
            useXVowelKiller,
          })}
          onInsert={handleKeyboardInsert}
          onBackspace={handleKeyboardBackspace}
          onEnter={() =>
            handleKeyboardInsert({ inputValue: "\n", outputValue: "\n" })
          }
          fontClass={
            useUnicode || selectedBaybayinFont === "noto-sans"
              ? getBaybayinFontClass("noto-sans")
              : getBaybayinFontClass(selectedBaybayinFont)
          }
        />
      )}
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
        useSingleLineInput={useSingleLineInput}
        textContainsBorrowedWords={textContainsBorrowedWords}
        setUseCombinedCharacters={setUseCombinedCharacters}
        setUseTechNumbers={setUseTechNumbers}
        setUseKlinzhai={setUseKlinzhai}
        setSelectedBaybayinFont={setSelectedBaybayinFont}
        setUseXVowelKiller={setUseXVowelKiller}
        setUseHollowKudlits={setUseHollowKudlits}
        setUseUnicode={setUseUnicode}
        setUseSingleLineInput={setUseSingleLineInput}
        setTextContainsBorrowedWords={setTextContainsBorrowedWords}
        showOutputOnlyOption={showOnScreenKeyboard}
        outputOnlyMode={outputOnlyMode}
        setOutputOnlyMode={setOutputOnlyMode}
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
