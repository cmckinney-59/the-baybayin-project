import { useState, useEffect } from "react";
import type { RefObject } from "react";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";

interface TransliteratorContainerProps {
  text: string;
  transliteratedText: string;
  title: string;
  textareaRef: RefObject<HTMLTextAreaElement | HTMLDivElement | null>;
  outputRef: RefObject<HTMLDivElement | null>;
  onTextChange: (value: string) => void;
  onClear: () => void;
  useRichTextInput?: boolean;
}

export default function TransliteratorContainer({
  text,
  transliteratedText,
  title,
  textareaRef,
  outputRef,
  onTextChange,
  onClear,
  useRichTextInput = false,
}: TransliteratorContainerProps) {
  const [isBold, setIsBold] = useState(false);
  const { showExperimentalFeatures } = useExperimentalFeatures();
  const textareaHasText = text.length > 0;

  // When using rich text, clear the contenteditable when parent clears
  useEffect(() => {
    if (useRichTextInput && text === "" && textareaRef.current && "innerHTML" in textareaRef.current) {
      textareaRef.current.innerHTML = "";
    }
  }, [text, useRichTextInput, textareaRef]);

  // Sync initial text into rich text area when parent has value (e.g. on load)
  useEffect(() => {
    if (
      useRichTextInput &&
      text.length > 0 &&
      textareaRef.current &&
      "innerText" in textareaRef.current &&
      textareaRef.current.innerText === ""
    ) {
      textareaRef.current.innerText = text;
    }
  }, [useRichTextInput, textareaRef, text]);

  const getFontClass = () => {
    if (!textareaHasText) return "";
    switch (title) {
      case "Baybayin":
        return "baybayin-font";
      case "Aurebesh":
        return "aurebesh-font";
      case "Deseret":
        return "deseret-font";
      case "Tengwar":
        return "tengwar-font";
      default:
        return "";
    }
  };

  return (
    <div className="transliteration-container">
      <div className="textarea-wrapper">
        {useRichTextInput ? (
          <div
            ref={textareaRef as RefObject<HTMLDivElement | null>}
            className={`transliteration-textarea transliteration-rich-textarea ${
              isBold ? "transliteration-bold" : ""
            }`}
            contentEditable
            suppressContentEditableWarning
            data-placeholder="Enter text to be transliterated here..."
            onInput={(e) => {
              const plainText = (e.currentTarget as HTMLDivElement).innerText ?? "";
              onTextChange(plainText);
            }}
            onPaste={(e) => {
              e.preventDefault();
              const plainText = e.clipboardData.getData("text/plain");
              document.execCommand("insertText", false, plainText);
              onTextChange((e.currentTarget as HTMLDivElement).innerText ?? "");
            }}
          />
        ) : (
          <textarea
            ref={textareaRef as RefObject<HTMLTextAreaElement | null>}
            className={`transliteration-textarea ${
              isBold ? "transliteration-bold" : ""
            }`}
            placeholder="Enter text to be transliterated here..."
            value={text}
            onChange={(e) => {
              const currentValue = e.target.value;
              onTextChange(currentValue);
            }}
          />
        )}
        
        {showExperimentalFeatures && (
          <button
            type="button"
            className={`format-toggle-button ${isBold ? "active" : ""}`}
            onClick={() => setIsBold((prev) => !prev)}
            aria-pressed={isBold}
            aria-label="Toggle bold"
          >
            B
          </button>
        )}
        {text.length > 0 && (
          <button
            className="clear-input-button"
            onClick={onClear}
            aria-label="Clear input"
          >
            ×
          </button>
        )}
      </div>
      <div className="textarea-wrapper">
        <div
          ref={outputRef}
          className={`transliteration-output ${getFontClass()} ${
            isBold ? "transliteration-bold" : ""
          }`}
        >
          {transliteratedText}
        </div>
        {transliteratedText.length > 0 && (
          <button
            className="clear-output-button"
            onClick={onClear}
            aria-label="Clear output"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}
