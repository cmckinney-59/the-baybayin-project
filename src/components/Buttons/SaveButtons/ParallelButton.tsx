import { AiFillCopy } from "react-icons/ai";
import copyToClipboard from "../../../utils/CopyToClipboard.ts";

interface ParallelButtonProps {
  transliteratedText: string;
  onShowDialog: (action: () => void) => void;
}

export default function ParallelButton({
  transliteratedText,
  onShowDialog,
}: ParallelButtonProps) {
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
      Parallel
    </button>
  );
}
