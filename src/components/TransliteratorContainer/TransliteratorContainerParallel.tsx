import type { RefObject } from "react";

interface TransliteratorContainerParallelProps {
  text: string;
  transliteratedText: string;
  title: string;
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  outputRef: RefObject<HTMLDivElement | null>;
  onTextChange: (value: string) => void;
  onClear: () => void;
}

export default function TransliteratorContainerParallel({
  text,
  transliteratedText,
  title,
  textareaRef,
  outputRef,
  onTextChange,
  onClear,
}: TransliteratorContainerParallelProps) {
  const textareaHasText = text.length > 0;

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
    <div className="transliteration-container-parallel">
      <div className="textarea-wrapper-parallel">
        <textarea
          ref={textareaRef}
          className="transliteration-textarea-parallel"
          placeholder="Enter text to be transliterated here..."
          value={text}
          onChange={(e) => {
            const currentValue = e.target.value;
            onTextChange(currentValue);
          }}
        ></textarea>
        {text.length > 0 && (
          <button
            className="clear-input-button-parallel"
            onClick={onClear}
            aria-label="Clear input"
          >
            ×
          </button>
        )}
      </div>
      <div className="textarea-wrapper-parallel">
        <div
          ref={outputRef}
          className={`transliteration-output-parallel ${getFontClass()}`}
        >
          {transliteratedText}
        </div>
        {transliteratedText.length > 0 && (
          <button
            className="clear-output-button-parallel"
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
