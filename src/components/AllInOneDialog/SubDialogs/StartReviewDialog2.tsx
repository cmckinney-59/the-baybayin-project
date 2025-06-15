interface StartReviewDialog2Props {
  onClickStart: () => void;
}

export default function StartReviewDialog2({
  onClickStart,
}: StartReviewDialog2Props) {
  return (
    <button className="active" onClick={onClickStart}>
      Start
    </button>
  );
}
