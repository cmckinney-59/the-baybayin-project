interface CloseDialogButtonProps {
  onClose: () => void;
}

export default function CloseDialogButton({ onClose }: CloseDialogButtonProps) {
  return (
    <button className="close-button" onClick={onClose}>
      Close
    </button>
  );
}
