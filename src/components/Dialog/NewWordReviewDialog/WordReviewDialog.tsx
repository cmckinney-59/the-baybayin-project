import CloseDialogButton from "../../Buttons/DialogButtons/CloseDialogButton";

interface WordReviewDialogProps {
  onClose?: () => void;
  wordsWithC?: string[];
  wordContainsBorrowedSound?: boolean;
}

export default function WordReviewDialog({
  onClose = () => {},
  wordsWithC = [],
  wordContainsBorrowedSound = false,
}: WordReviewDialogProps) {
  let paragraphContent: React.ReactNode | null = null;

  if (wordsWithC.length === 0) {
    paragraphContent = <p>All words have been reviewed.</p>;
  } else {
    paragraphContent = (
      <>
        <p>
          This word contains a borrowed sound. Please spell it out as it sounds.
        </p>
        {wordContainsBorrowedSound && (
          <p>
            Note: The following word contains a borrowed sound:{" "}
            <strong>{wordsWithC.join(", ")}</strong>
          </p>
        )}
        <input />
        <button>Submit</button>
      </>
    );
  }

  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <div className="dialog-header">
          <div className="dialog-header-top-row">
            <h3>Word Review Dialog</h3>
          </div>
        </div>
        <div className="dialog-content">
          {paragraphContent}
          <CloseDialogButton onClose={onClose} />
        </div>
      </div>
    </dialog>
  );
}
