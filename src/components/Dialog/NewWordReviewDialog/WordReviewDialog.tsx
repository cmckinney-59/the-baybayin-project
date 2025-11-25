import CloseDialogButton from "../../Buttons/DialogButtons/CloseDialogButton";

interface WordReviewDialogProps {
  onClose?: () => void;
  wordsWithC?: string[];
}

export default function WordReviewDialog({
  onClose = () => {},
  wordsWithC = [],
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
          {wordsWithC.length > 0 && (
            <p>
              Note: The following word{wordsWithC.length > 1 ? "s" : ""} contain
              {wordsWithC.length === 1 ? "s" : ""} the letter 'c':{" "}
              <strong>{wordsWithC.join(", ")}</strong>
            </p>
          )}
          <input />
          <CloseDialogButton onClose={onClose} />
        </div>
      </div>
    </dialog>
  );
}
