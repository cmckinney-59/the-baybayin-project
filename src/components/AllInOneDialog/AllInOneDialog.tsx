import DialogHeader from "../Dialog/DialogHeader.tsx";
import StartReviewDialog2 from "./SubDialogs/StartReviewDialog2.tsx";

interface AllInOneDialogProps {
  onClickStart: () => void;
  onClose: () => void;
  numberOfWordsToReview: number;
}

export default function AllInOneDialog({
  onClickStart,
  onClose,
  numberOfWordsToReview,
}: AllInOneDialogProps) {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <DialogHeader
          onClose={onClose}
          numberOfWordsToReview={numberOfWordsToReview}
          isStart={true}
        />
        <StartReviewDialog2></StartReviewDialog2>
      </div>
    </dialog>
  );
}
