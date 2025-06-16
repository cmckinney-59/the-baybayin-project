import DialogHeader from "../Dialog/DialogHeader.tsx";
import StartReviewDialog2 from "./SubDialogs/StartReviewDialog2.tsx";
import CapitalLetterDialog2 from "./SubDialogs/CapitalLetterDialog2.tsx";
import CloseDialogButton from "../Buttons/DialogButtons/CloseDialogButton.tsx";

interface AllInOneDialogProps {
  onClickStart: () => void;
  onClose: () => void;
  onSkip: () => void;
  onEnter: (replacement: string) => void;
  numberOfWordsToReview: number;
  currentWordIndex: number;
  originalText: string;
}

export default function AllInOneDialog({
  onClickStart,
  onClose,
  onEnter,
  onSkip,
  numberOfWordsToReview,
  currentWordIndex,
  originalText,
}: AllInOneDialogProps) {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <DialogHeader
          onClose={onClose}
          numberOfWordsToReview={numberOfWordsToReview}
          currentWordIndex={currentWordIndex}
          isStart={true}
        />
        <StartReviewDialog2 onClickStart={onClickStart} />
        <CapitalLetterDialog2
          originalText={originalText}
          onEnter={onEnter}
          onSkip={onSkip}
        />
        <CloseDialogButton onClose={onClose} />
      </div>
    </dialog>
  );
}
