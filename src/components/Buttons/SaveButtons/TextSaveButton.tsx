import { AiFillFileText } from "react-icons/ai";
import downloadAsText from "../../../utils/SaveToText";

interface TextSaveButtonProps {
  transliteratedText: string;
}

export default function TextSaveButton({
  transliteratedText,
}: TextSaveButtonProps) {
  return (
    <button
      className={transliteratedText ? "active" : undefined}
      onClick={() => downloadAsText(transliteratedText)}
      disabled={transliteratedText.trim().length === 0}
    >
      <AiFillFileText />
      Text
    </button>
  );
}
