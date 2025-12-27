import { AiFillCopy } from "react-icons/ai";
import copyToClipboard from "../../../utils/SaveActions/CopyToClipboard.ts";

interface CopyTextButtonProps {
  transliteratedText: string;
  onShowDialog: (action: () => void) => void;
}

export default function CopyTextButton({
  transliteratedText,
  onShowDialog,
}: CopyTextButtonProps) {
  const handleClick = () => {
    onShowDialog(() => copyToClipboard(transliteratedText));
  };

  return (
    <button
      className={transliteratedText ? "active" : undefined}
      onClick={handleClick}
      disabled={transliteratedText.trim().length === 0}
    >
      <AiFillCopy />
      Copy
    </button>
  );
}
