import { useLayoutEffect, useRef, useState, type RefObject } from "react";

interface TransliteratorContainerParallelProps {
  text: string;
  transliteratedText: string;
  title: string;
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  outputRef: RefObject<HTMLDivElement | null>;
  onTextChange: (value: string) => void;
  onClear: () => void;
}

function getWordsPerLine(
  measureRef: React.RefObject<HTMLDivElement | null>,
): number[] {
  if (!measureRef.current) return [];
  const spans = measureRef.current.querySelectorAll("span[data-word-index]");
  if (spans.length === 0) return [];

  const lines: number[] = [];
  let lastTop: number | null = null;

  for (let i = 0; i < spans.length; i++) {
    const top = (spans[i] as HTMLElement).getBoundingClientRect().top;
    if (lastTop === null || Math.abs(top - lastTop) > 2) {
      lines.push(1);
      lastTop = top;
    } else {
      lines[lines.length - 1] += 1;
    }
  }
  return lines;
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
  const measureRef = useRef<HTMLDivElement | null>(null);
  const [lineWordCounts, setLineWordCounts] = useState<number[]>([]);

  const inputWords = text.trim().split(/\s+/).filter(Boolean);
  const outputWords = transliteratedText.trim().split(/\s+/).filter(Boolean);

  useLayoutEffect(() => {
    if (inputWords.length === 0) {
      setLineWordCounts([]);
      return;
    }
    const measure = measureRef.current;
    const updateLines = () => setLineWordCounts(getWordsPerLine(measureRef));
    updateLines();
    if (!measure) return;
    const observer = new ResizeObserver(updateLines);
    observer.observe(measure);
    return () => observer.disconnect();
  }, [text]);

  const outputLines: string[][] = [];
  if (lineWordCounts.length > 0 && outputWords.length > 0) {
    let idx = 0;
    for (const count of lineWordCounts) {
      outputLines.push(outputWords.slice(idx, idx + count));
      idx += count;
    }
    if (idx < outputWords.length) {
      outputLines.push(outputWords.slice(idx));
    }
  }

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
        <div
          ref={measureRef}
          className="transliteration-parallel-measure"
          aria-hidden="true"
        >
          {inputWords.map((word, i) => (
            <span key={i} data-word-index={i}>
              {word}{" "}
            </span>
          ))}
        </div>
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
      <div className="transliteration-parallel-divider" aria-hidden="true" />
      <div className="textarea-wrapper-parallel">
        <div
          ref={outputRef}
          className={`transliteration-output-parallel ${getFontClass()}`}
        >
          {outputLines.length > 0
            ? outputLines.map((line, i) => (
                <div key={i} className="transliteration-output-line">
                  {line.join(" ")}
                </div>
              ))
            : transliteratedText}
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
