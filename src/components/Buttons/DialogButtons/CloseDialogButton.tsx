import { AiOutlineClose } from "react-icons/ai";

interface CloseDialogButtonProps {
  onClose: () => void;
}

export default function CloseDialogButton({ onClose }: CloseDialogButtonProps) {
  return (
    <button
      type="button"
      className="close-button"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      aria-label="Close"
    >
      <AiOutlineClose />
    </button>
  );
}
