import { useState, useEffect, useRef } from "react";

import processBaybayinText from "../../utils/TextProcessors/BaybayinTextProcessor.ts";
import SaveButtonContainter from "../Buttons/SaveButtons/SaveButtonsContainer.tsx";
import WordReviewDialog from "../Dialog/WordReviewDialog.tsx";
import { useWordsDictionary } from "../../contexts/WordsDictionaryContext.tsx";

interface TransliteratorWithDialogProps {
  title: string;
}

export default function TransliteratorWithDialog({
  title,
}: TransliteratorWithDialogProps) {
  const [text, setText] = useState<string>("");
  const [transliteratedText, setTransliteratedText] = useState<string>("");
  const {
    wordsDictionary,
    setWordsDictionary,
    clearWordsDictionary,
    wordContainsBorrowedSound,
  } = useWordsDictionary();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [checkboxValue, setCheckboxValue] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const textareaHasText = text.length > 0;

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
        // Use the dictionary value if it exists, otherwise process the word
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
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={checkboxValue}
          onChange={(e) => setCheckboxValue(e.target.checked)}
        />
        Text contains borrowed sounds
      </label>
      <div className="transliteration-container">
        <div className="textarea-wrapper">
          <textarea
            ref={textareaRef}
            className="transliteration-textarea"
            placeholder="Enter text to be transliterated here..."
            value={text}
            onChange={(e) => {
              const currentValue = e.target.value;
              setText(currentValue);
              handleChange(currentValue);
            }}
          ></textarea>
          {text.length > 0 && (
            <button
              className="clear-input-button"
              onClick={() => {
                handleClearInput();
              }}
              aria-label="Clear input"
            >
              ×
            </button>
          )}
        </div>
        <div className="textarea-wrapper">
          <div
            ref={outputRef}
            className={`transliteration-output ${
              textareaHasText
                ? title === "Baybayin"
                  ? "baybayin-font"
                  : title === "Aurebesh"
                  ? "aurebesh-font"
                  : title === "Deseret"
                  ? "deseret-font"
                  : title === "Tengwar"
                  ? "tengwar-font"
                  : ""
                : ""
            }`}
          >
            {transliteratedText}
          </div>
          {transliteratedText.length > 0 && (
            <button
              className="clear-output-button"
              onClick={() => {
                handleClearInput();
              }}
              aria-label="Clear output"
            >
              ×
            </button>
          )}
        </div>
      </div>
      {text.toLowerCase().includes("c") && (
        <p className="note-paragraph">
          * The letter 'c' does not show in baybayin font. Replace any c's with
          k's or s's accordingly. See the How To Read section for more
          information.
        </p>
      )}
      <div className="action-buttons">
        {checkboxValue && (
          <button onClick={() => setIsDialogOpen(true)}>Validate</button>
        )}
        <SaveButtonContainter transliteratedText={transliteratedText} />
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
