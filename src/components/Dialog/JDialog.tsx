interface JDialogProps {
  word: string;
  onJSelection: (choice: "h" | "diy") => void;
  onClose: () => void;
  numberOfWordsToReview: number;
  currentWordIndex: number;
}

export default function JDialog({
  word,
  onJSelection,
  onClose,
  numberOfWordsToReview,
  currentWordIndex,
}: JDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>
          Reviewing word {currentWordIndex + 1} of {numberOfWordsToReview}
        </p>
        <p>
          Does the first "j" in <strong>{word}</strong> sound like "h" or "diy"?
        </p>
        <button onClick={() => onJSelection("h")}>h</button>
        <button onClick={() => onJSelection("diy")}>diy</button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </dialog>
  );
}
