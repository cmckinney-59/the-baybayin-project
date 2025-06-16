import { useState } from "react";
import "../../index.css";

interface CapitalLetterDialogProps {
  originalText: string;
  onEnter: (replacement: string) => void;
  onSkip: () => void;
}

export default function CapitalLetterDialog2({
  originalText,
  onEnter,
  onSkip,
}: CapitalLetterDialogProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const inputHasText = inputValue.length > 0;
  const handleEnterClick = () => {
    onEnter(inputValue);
  };

  return (
    <>
      <p>
        If <strong>{originalText}</strong> is a proper noun <em>and</em> is not
        spelled the way it sounds,
      </p>
      <p>please provide the phonetic spelling below.</p>
      <p>Otherwise, click "Skip".</p>
      <input
        className="phonetic-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="phonetic-dialog-buttons">
        <button
          className={inputHasText ? "active" : undefined}
          onClick={handleEnterClick}
          disabled={!inputHasText}
        >
          Enter
        </button>
        <button className="active" onClick={onSkip}>
          Skip
        </button>
      </div>
    </>
  );
}
