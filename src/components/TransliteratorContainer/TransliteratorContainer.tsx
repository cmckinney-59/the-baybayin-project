import { useState, useEffect } from "react";
import type { RefObject } from "react";

interface TransliteratorContainerProps {
  text: string;
  transliteratedText: string;
  currentAlphabet: string;
  textareaRef: RefObject<HTMLTextAreaElement | HTMLDivElement | null>;
  outputRef: RefObject<HTMLDivElement | null>;
  onTextChange: (value: string) => void;
  onClear: () => void;
  useRichTextInput?: boolean;
  aurebeshTechNumbers?: boolean;
}

export default function TransliteratorContainer({
  text,
  transliteratedText,
  currentAlphabet,
  textareaRef,
  outputRef,
  onTextChange,
  onClear,
  useRichTextInput = false,
  aurebeshTechNumbers = false,
}: TransliteratorContainerProps) {
  const [isBold] = useState(false);
  const textareaHasText = text.length > 0;

  useEffect(() => {
    if (
      useRichTextInput &&
      text === "" &&
      textareaRef.current &&
      "innerHTML" in textareaRef.current
    ) {
      textareaRef.current.innerHTML = "";
    }
  }, [text, useRichTextInput, textareaRef]);

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
    switch (currentAlphabet) {
      case "Baybayin":
        return "baybayin-font";
      case "Aurebesh":
        return aurebeshTechNumbers
          ? "aurebesh-font-tech-numbers"
          : "aurebesh-font";
      case "Deseret":
        return "deseret-font";
      case "Tengwar":
        return "tengwar-font";
      case "Plqad":
        return "plqad-font";
      case "MarasEye":
        return "maras-eye-font";
      case "Matoran":
        return "matoran-font";
      case "Unown":
        return "unown-font";
      case "Gallifreyan":
        return "gallifreyan-font";
      case "Atlantean":
        return "atlantean-font";
      case "Steel":
        return "steel-font";
      default:
        return "";
    }
  };

  const applyFormat = (command: string) => {
    document.execCommand(command, false);
    const el = textareaRef.current;
    if (el && "innerText" in el) {
      onTextChange((el as HTMLDivElement).innerText ?? "");
    }
  };

  return (
    <div className="transliteration-container">
      <div className="textarea-wrapper">
        {useRichTextInput ? (
          <>
            <div
              className="rich-text-toolbar"
              role="toolbar"
              aria-label="Text formatting"
            >
              <button
                type="button"
                className="rich-text-toolbar-button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  applyFormat("bold");
                }}
                aria-label="Bold"
                title="Bold"
              >
                B
              </button>
              <button
                type="button"
                className="rich-text-toolbar-button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  applyFormat("italic");
                }}
                aria-label="Italic"
                title="Italic"
              >
                I
              </button>
              <button
                type="button"
                className="rich-text-toolbar-button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  applyFormat("underline");
                }}
                aria-label="Underline"
                title="Underline"
              >
                U
              </button>
            </div>
            <div
              ref={textareaRef as RefObject<HTMLDivElement | null>}
              className="transliteration-textarea transliteration-rich-textarea"
              contentEditable
              suppressContentEditableWarning
              data-placeholder="rich text input"
              onInput={(e) => {
                const plainText =
                  (e.currentTarget as HTMLDivElement).innerText ?? "";
                onTextChange(plainText);
              }}
              onPaste={(e) => {
                e.preventDefault();
                const plainText = e.clipboardData.getData("text/plain");
                document.execCommand("insertText", false, plainText);
                onTextChange(
                  (e.currentTarget as HTMLDivElement).innerText ?? "",
                );
              }}
            />
          </>
        ) : (
          <textarea
            ref={textareaRef as RefObject<HTMLTextAreaElement | null>}
            className={`transliteration-textarea ${
              isBold ? "transliteration-bold" : ""
            }`}
            placeholder="Enter text here..."
            value={text}
            onChange={(e) => {
              const currentValue = e.target.value;
              onTextChange(currentValue);
            }}
          />
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
