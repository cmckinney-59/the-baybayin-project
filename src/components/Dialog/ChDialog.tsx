interface ChDialogProps {
  word: string;
  onChSelection: (choice: "k" | "tiy") => void;
  onClose: () => void;
  numberOfWordsToReview: number;
  currentWordIndex: number;
}

export default function ChDialog({
  word,
  onChSelection,
  onClose,
  numberOfWordsToReview,
  currentWordIndex,
}: ChDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>
          Reviewing word {currentWordIndex + 1} of {numberOfWordsToReview}
        </p>
        <p>
          Does the first "ch" in <strong>{word}</strong> sound like "k" or
          "tiy"?
        </p>
        <button onClick={() => onChSelection("k")}>k</button>
        <button onClick={() => onChSelection("tiy")}>tiy</button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </dialog>
  );
}
