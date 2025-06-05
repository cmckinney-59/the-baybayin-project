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
      <h3>Word Review</h3>
      <button onClick={onClose}>X</button>
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
