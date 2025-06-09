import CloseDialogButton from "../Buttons/DialogButtons/CloseDialogButton";
import DialogHeader from "./DialogHeader";

interface StartReviewDialogProps {
  onClickStart: () => void;
  onClose: () => void;
  numberOfWordsToReview: number;
}

export default function StartReviewDialog({
  onClickStart,
  onClose,
  numberOfWordsToReview,
}: StartReviewDialogProps) {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <DialogHeader
          onClose={onClose}
          numberOfWordsToReview={numberOfWordsToReview}
          isStart={true}
        />
        <button className="active" onClick={onClickStart}>
          Start
        </button>
        <CloseDialogButton onClose={onClose} />
      </div>
    </dialog>
  );
}
