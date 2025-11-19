import { useState, useEffect, useRef } from "react";

import processTengwarText from "../../utils/TextProcessors/TengwarTextProcessor.ts";
import SaveButtonContainter from "../Buttons/SaveButtons/SaveButtonsContainer.tsx";

interface TransliteratorProps {
  title: string;
}

type Dictionary = { [word: string]: string };

export default function TransliteratorLiteTengwar({
  title,
}: TransliteratorProps) {
  const [text, setText] = useState<string>("");
  const [transliteratedText, setTransliteratedText] = useState<string>("");
  const [wordsDictionary, setWordsDictionary] = useState<Dictionary>({});
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

  const handleChange = (currentText: string): void => {
    const words = currentText.trim().split(/\s+/);
    const newDict: Dictionary = {};
    const processedWords: string[] = [];

    for (const word of words) {
      const processed = processTengwarText(word);
      newDict[word] = processed;
      processedWords.push(processed);
    }

    setWordsDictionary(newDict);
    setTransliteratedText(processedWords.join(" "));
  };

  const handleClearInput = () => {
    setText("");
    setTransliteratedText("");
    setWordsDictionary({});
  };

  return (
    <div>
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
                ? title === "Tengwar"
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
      <div className="action-buttons">
        <SaveButtonContainter
          transliteratedText={transliteratedText}
          wordsDictionary={wordsDictionary}
        />
      </div>
    </div>
  );
}

