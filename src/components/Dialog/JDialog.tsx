import CloseDialogButton from "../Buttons/DialogButtons/CloseDialogButton";
import DialogHeader from "./DialogHeader";

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
        <DialogHeader
          onClose={onClose}
          numberOfWordsToReview={numberOfWordsToReview}
          currentWordIndex={currentWordIndex}
        />
        <p>
          Does the first "j" in <strong>{word}</strong> sound like "h" or "diy"?
        </p>
        <button onClick={() => onJSelection("h")}>h</button>
        <button onClick={() => onJSelection("diy")}>diy</button>
        <CloseDialogButton onClose={onClose} />
      </div>
    </dialog>
  );
}
