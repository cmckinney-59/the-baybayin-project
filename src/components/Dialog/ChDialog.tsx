import CloseDialogButton from "../Buttons/DialogButtons/CloseDialogButton";
import DialogHeader from "./DialogHeader";

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
        <DialogHeader
          onClose={onClose}
          numberOfWordsToReview={numberOfWordsToReview}
          currentWordIndex={currentWordIndex}
        />
        <p>
          Does the first "ch" in <strong>{word}</strong> sound like "k" or
          "tiy"?
        </p>
        <button onClick={() => onChSelection("k")}>k</button>
        <button onClick={() => onChSelection("tiy")}>tiy</button>
        <CloseDialogButton onClose={onClose} />
      </div>
    </dialog>
  );
}
