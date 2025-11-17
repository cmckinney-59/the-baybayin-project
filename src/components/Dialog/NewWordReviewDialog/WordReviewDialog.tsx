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
            <h3>Dialog</h3>
          </div>
        </div>
        <div className="dialog-content">
          <p>This is a dialog opened from the transliterator component.</p>
          <CloseDialogButton onClose={onClose} />
        </div>
      </div>
    </dialog>
  );
}
