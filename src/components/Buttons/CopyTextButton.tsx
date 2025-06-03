import { AiFillCopy } from "react-icons/ai";
import copyToClipboard from "../Utils/CopyToClipboard.ts";

interface CopyTextButtonProps {
  transliteratedText: string;
}

export default function CopyTextButton({
  transliteratedText,
}: CopyTextButtonProps) {
  return (
    <button
      className={transliteratedText ? "active" : undefined}
      onClick={() => copyToClipboard(transliteratedText)}
      disabled={transliteratedText.trim().length === 0}
    >
      <AiFillCopy style={{ marginRight: "5px" }} />
      Copy
    </button>
  );
}
