import { AiOutlineClose } from "react-icons/ai";

interface CloseDialogButtonProps {
  onClose: () => void;
}

export default function CloseDialogButton({ onClose }: CloseDialogButtonProps) {
  return (
    <button className="close-button" onClick={onClose} aria-label="Close">
      <AiOutlineClose />
    </button>
  );
}
