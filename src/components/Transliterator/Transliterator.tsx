import { useState, useEffect, useRef } from "react";

import SaveButtonContainter from "../Buttons/SaveButtons/SaveButtonsContainer.tsx";
import TransliteratorContainer from "../TransliteratorContainer/TransliteratorContainer.tsx";
import WordReviewDialog from "../Dialog/WordReviewDialog.tsx";
import { useWordsDictionary } from "../../contexts/WordsDictionaryContext.tsx";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import processAurebeshText from "../../utils/TextProcessors/AurebeshTextProcessor.ts";
import processBaybayinText from "../../utils/TextProcessors/BaybayinTextProcessor.ts";
import processDeseretText from "../../utils/TextProcessors/DeseretTextProcessor.ts";
import processTengwarText from "../../utils/TextProcessors/TengwarTextProcessor.ts";
import processPlqadText from "../../utils/TextProcessors/PlqadTextProcessor.ts";
import processMatoranText from "../../utils/TextProcessors/MatoranTextProcessor.ts";
import processUnownText from "../../utils/TextProcessors/UnownTextProcessor.ts";
import processGallifreyanText from "../../utils/TextProcessors/GallifreyanTextProcessor.ts";
import processAtlanteanText from "../../utils/TextProcessors/AtlanteanTextProcessor.ts";

const processors: Record<string, (word: string) => string> = {
  Aurebesh: processAurebeshText,
  Baybayin: processBaybayinText,
  Deseret: processDeseretText,
  Tengwar: processTengwarText,
  Plqad: processPlqadText,
  Matoran: processMatoranText,
  Unown: processUnownText,
  Gallifreyan: processGallifreyanText,
  Atlantean: processAtlanteanText,
};

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
  const [checkboxValue, setCheckboxValue] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);

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
    if (
      currentAlphabet === "Baybayin" &&
      text.trim() &&
      Object.keys(wordsDictionary).length > 0
    ) {
      const words = text.trim().split(/\s+/);
      const processedWords = words.map((word) => {
        return wordsDictionary[word] || processBaybayinText(word);
      });
      setTransliteratedText(processedWords.join(" "));
    }
  }, [currentAlphabet, wordsDictionary, text]);

  const handleChange = (currentText: string): void => {
    const words = currentText.trim().split(/\s+/);
    const newDict: { [word: string]: string } = {};
    const processedWords: string[] = [];

    const processWord = processors[currentAlphabet];
    if (processWord) {
      for (const word of words) {
        const processed = processWord(word);
        newDict[word] = processed;
        processedWords.push(processed);
      }
    }

    setWordsDictionary(newDict);
    setTransliteratedText(processedWords.join(" "));
  };

  const handleClearInput = () => {
    setText("");
    setTransliteratedText("");
    clearWordsDictionary();
  };

  const isBaybayin = currentAlphabet === "Baybayin";

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
          handleChange(currentValue);
        }}
        onClear={handleClearInput}
      />
      {isBaybayin && text.toLowerCase().includes("c") && (
        <p className="note-paragraph">
          * The letter &apos;c&apos; does not show in baybayin font. Replace any
          c&apos;s with k&apos;s or s&apos;s accordingly. See the How To Read
          section for more information.
        </p>
      )}
      {isBaybayin && showExperimentalFeatures && (
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={checkboxValue}
            onChange={(e) => setCheckboxValue(e.target.checked)}
          />
          Text contains borrowed words.
        </label>
      )}
      <div className="action-buttons">
        {isBaybayin && showExperimentalFeatures && checkboxValue && (
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
