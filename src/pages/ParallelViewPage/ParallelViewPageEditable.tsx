import { useState, useEffect, useRef } from "react";

import processBaybayinText from "../../utils/TextProcessors/BaybayinTextProcessor.ts";
import SaveButtonContainter from "../../components/Buttons/SaveButtons/SaveButtonsContainer.tsx";
import WordReviewDialog from "../../components/Dialog/WordReviewDialog.tsx";
import {
  WordsDictionaryProvider,
  useWordsDictionary,
} from "../../contexts/WordsDictionaryContext.tsx";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import TransliteratorContainer from "../../components/TransliteratorContainer/TransliteratorContainer.tsx";

interface ParallelViewPageEditableProps {
  title: string;
}

function ParallelViewPageEditableContent({
  title,
}: ParallelViewPageEditableProps) {
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

  // Update transliterated text when dictionary changes
  useEffect(() => {
    if (text.trim() && Object.keys(wordsDictionary).length > 0) {
      const words = text.trim().split(/\s+/);
      const processedWords = words.map((word) => {
        return wordsDictionary[word] || processBaybayinText(word);
      });
      setTransliteratedText(processedWords.join(" "));
    }
  }, [wordsDictionary, text]);

  const handleChange = (currentText: string): void => {
    const words = currentText.trim().split(/\s+/);
    const newDict: { [word: string]: string } = {};
    const processedWords: string[] = [];

    for (const word of words) {
      const processed = processBaybayinText(word);
      newDict[word] = processed;
      processedWords.push(processed);
    }

    setWordsDictionary(newDict);
    setTransliteratedText(processedWords.join(" "));
  };

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
        title={title}
        textareaRef={textareaRef}
        outputRef={outputRef}
        onTextChange={(currentValue) => {
          setText(currentValue);
          handleChange(currentValue);
        }}
        onClear={handleClearInput}
      />
      {text.toLowerCase().includes("c") && (
        <p className="note-paragraph">
          * The letter 'c' does not show in baybayin font. Replace any c's with
          k's or s's accordingly. See the How To Read section for more
          information.
        </p>
      )}
      {title === "Baybayin" && showExperimentalFeatures && (
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={checkboxValue}
            onChange={(e) => setCheckboxValue(e.target.checked)}
          />
          Text contains borrowed words. See 'Borrowed Words' section below.
        </label>
      )}
      <div className="action-buttons">
        {showExperimentalFeatures && checkboxValue && (
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
      {isDialogOpen && (
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

export default function ParallelViewPageEditable(props: ParallelViewPageEditableProps) {
  return (
    <WordsDictionaryProvider>
      <ParallelViewPageEditableContent {...props} />
    </WordsDictionaryProvider>
  );
}
