interface DialogNavButtonsProps {
  close: () => void;
  onSkip: () => void;
}

export default function DialogNavButtons({
  close,
  onSkip,
}: DialogNavButtonsProps) {
  return (
    <div className="dialog-nav-buttons">
      <button onClick={onSkip}>Skip</button>
      <button className="close-button" onClick={close}>
        Close
      </button>
    </div>
  );
}
