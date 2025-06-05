import CloseDialogButton from "../Buttons/DialogButtons/CloseDialogButton";
import DialogHeader from "./DialogHeader";

interface CDialogProps {
  word: string;
  onCSelection: (choice: "k" | "s" | "tiy") => void;
  onClose: () => void;
  numberOfWordsToReview: number;
  currentWordIndex: number;
}

export default function CDialog({
  word,
  onCSelection,
  onClose,
  numberOfWordsToReview,
  currentWordIndex,
}: CDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <DialogHeader
          onClose={onClose}
          numberOfWordsToReview={numberOfWordsToReview}
          currentWordIndex={currentWordIndex}
        />
        <p>
          Does the first "c" in <strong>{word}</strong> sound like "k", "s"
          "tiy"?
        </p>
        <button onClick={() => onCSelection("k")}>k</button>
        <button onClick={() => onCSelection("s")}>s</button>
        <button onClick={() => onCSelection("tiy")}>tiy</button>
        <CloseDialogButton onClose={onClose} />
      </div>
    </dialog>
  );
}
