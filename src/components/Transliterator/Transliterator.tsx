import { useState, useEffect, useRef } from "react";

import SaveButtonContainter from "../Buttons/SaveButtons/SaveButtonsContainer.tsx";
import { useWordsDictionary } from "../../contexts/WordsDictionaryContext.tsx";
import processAurebeshText from "../../utils/TextProcessors/AurebeshTextProcessor.ts";
import processBaybayinText from "../../utils/TextProcessors/BaybayinTextProcessor.ts";
import processDeseretText from "../../utils/TextProcessors/DeseretTextProcessor.ts";
import processTengwarText from "../../utils/TextProcessors/TengwarTextProcessor.ts";
import processPlqadText from "../../utils/TextProcessors/PlqadTextProcessor.ts";

const processors: Record<string, (word: string) => string> = {
  Aurebesh: processAurebeshText,
  Baybayin: processBaybayinText,
  Deseret: processDeseretText,
  Tengwar: processTengwarText,
  Plqad: processPlqadText,
};

interface TransliteratorProps {
  title: string;
}

export default function Transliterator({ title }: TransliteratorProps) {
  const [text, setText] = useState<string>("");
  const [transliteratedText, setTransliteratedText] = useState<string>("");
  const { setWordsDictionary, clearWordsDictionary } = useWordsDictionary();
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
    const newDict: { [word: string]: string } = {};
    const processedWords: string[] = [];

    const processWord = processors[title];
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

  const getFontClass = () => {
    switch (title) {
      case "Aurebesh":
        return "aurebesh-font";
      case "Baybayin":
        return "baybayin-font";
      case "Deseret":
        return "deseret-font";
      case "Tengwar":
        return "tengwar-font";
      case "Plqad":
        return "plqad-font";
      default:
        return "";
    }
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
              textareaHasText ? getFontClass() : ""
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
          originalText={text}
          transliteratedText={transliteratedText}
        />
      </div>
    </div>
  );
}
