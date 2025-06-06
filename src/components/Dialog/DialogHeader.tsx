interface DialogHeaderProps {
  onClose: () => void;
  numberOfWordsToReview: number;
  currentWordIndex?: number;
  isStart?: boolean;
}

export default function DialogHeader({
  onClose,
  numberOfWordsToReview,
  currentWordIndex = 0,
  isStart = false,
}: DialogHeaderProps) {
  return (
    <div className="dialog-header">
      <div className="dialog-header-top-row">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h3>Word Review</h3>
      </div>
      {isStart ? (
        <p>You have {numberOfWordsToReview} words to review</p>
      ) : (
        <p>
          Reviewing word {currentWordIndex + 1} of {numberOfWordsToReview}
        </p>
      )}
    </div>
  );
}
