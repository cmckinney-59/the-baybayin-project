interface GDialogProps {
  word: string;
  onGSelection: (choice: "g" | "h" | "diy") => void;
  onClose: () => void;
  numberOfWordsToReview: number;
  currentWordIndex: number;
}

export default function GDialog({
  word,
  onGSelection,
  onClose,
  numberOfWordsToReview,
  currentWordIndex,
}: GDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>
          Reviewing word {currentWordIndex + 1} of {numberOfWordsToReview}
        </p>
        <p>
          Does the first "g" in <strong>{word}</strong> sound like "g", "h"
          "diy"?
        </p>
        <button onClick={() => onGSelection("g")}>g</button>
        <button onClick={() => onGSelection("h")}>h</button>
        <button onClick={() => onGSelection("diy")}>diy</button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </dialog>
  );
}
