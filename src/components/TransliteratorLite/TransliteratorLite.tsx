import { useState } from "react";

import "./TransliteratorLite.css";
import TransliterateButton from "../Buttons/TransliterateButton.tsx";
import processBaybayinText from "../Utils/BaybayinTextProcessor.ts";
import ExcelSaveButton from "../Buttons/ExcelSaveButton.tsx";
import WordSaveButton from "../Buttons/WordSaveButton.tsx";
import TextSaveButton from "../Buttons/TextSaveButton.tsx";
import CopyTextButton from "../Buttons/CopyTextButton.tsx";

interface TransliteratorProps {
  title: string;
}

type Dictionary = { [word: string]: string };

export default function TransliteratorLite({ title }: TransliteratorProps) {
  const [text, setText] = useState<string>("");
  const [transliteratedText, setTransliteratedText] = useState<string>("");
  const [wordsDictionary, setWordsDictionary] = useState<Dictionary>({});
  const isBaybayin = title === "Baybayin";
  const isAurebesh = title === "Aurebesh";
  const isDeseret = title === "Deseret";
  const textareaHasText = text.length > 0;

  const handleTransliterateButtonClick = (): void => {
    const words = text.trim().split(/\s+/);
    const newDict: Dictionary = {};
    const processedWords: string[] = [];

    for (const word of words) {
      const processed = processBaybayinText(word);
      newDict[word] = processed;
      processedWords.push(processed);
    }

    setWordsDictionary(newDict);
    setTransliteratedText(processedWords.join(" "));
  };

  return (
    <div>
      <h2>Transliterator Lite</h2>
      <div className="transliteration-container">
        <div className="textarea-wrapper">
          <textarea
            className="transliteration-textarea"
            placeholder="Enter text to be transliterated here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          {text.length > 0 && (
            <button
              className="clear-input-button"
              onClick={() => {
                setText("");
              }}
              aria-label="Clear input"
            >
              ×
            </button>
          )}
        </div>
        <div className="textarea-wrapper">
          <div
            className={`transliteration-output ${
              textareaHasText
                ? isBaybayin
                  ? "baybayin-font"
                  : isAurebesh
                  ? "aurebesh-font"
                  : isDeseret
                  ? "deseret-font"
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
                setTransliteratedText("");
              }}
            >
              ×
            </button>
          )}
        </div>
      </div>
      <div className="action-buttons">
        <div>
          <TransliterateButton
            isActive={textareaHasText}
            onClick={handleTransliterateButtonClick}
            isDisabled={!textareaHasText}
          />
        </div>
        <p> Save as... </p>
        <ExcelSaveButton
          transliteratedText={transliteratedText}
          wordsDictionary={wordsDictionary}
        />
        <WordSaveButton transliteratedText={transliteratedText} />
        <TextSaveButton transliteratedText={transliteratedText} />
        <CopyTextButton transliteratedText={transliteratedText} />
      </div>
    </div>
  );
}
