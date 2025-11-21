import CloseDialogButton from "../../Buttons/DialogButtons/CloseDialogButton";

interface WordReviewDialogProps {
  onClose?: () => void;
}

export default function WordReviewDialog({
  onClose = () => {},
}: WordReviewDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <div className="dialog-header">
          <div className="dialog-header-top-row">
            <h3>Word Review Dialog</h3>
          </div>
        </div>
        <div className="dialog-content">
          <p>
            This word contains a borrowed sound. Please spell it out as it
            sounds.
          </p>
          <CloseDialogButton onClose={onClose} />
        </div>
      </div>
    </dialog>
  );
}
