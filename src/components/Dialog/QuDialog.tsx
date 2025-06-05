import CloseDialogButton from "../Buttons/DialogButtons/CloseDialogButton";
import DialogHeader from "./DialogHeader";

interface QuDialogProps {
  word: string;
  onQuSelection: (choice: "k" | "kuw") => void;
  onClose: () => void;
  numberOfWordsToReview: number;
  currentWordIndex: number;
}

export default function QuDialog({
  word,
  onQuSelection,
  onClose,
  numberOfWordsToReview,
  currentWordIndex,
}: QuDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <DialogHeader
          onClose={onClose}
          numberOfWordsToReview={numberOfWordsToReview}
          currentWordIndex={currentWordIndex}
        />
        <p>
          Does the first "qu" in <strong>{word}</strong> sound like "k" or
          "kuw"?
        </p>
        <button onClick={() => onQuSelection("k")}>k</button>
        <button onClick={() => onQuSelection("kuw")}>kuw</button>
        <CloseDialogButton onClose={onClose} />
      </div>
    </dialog>
  );
}
