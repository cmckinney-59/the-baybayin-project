import { AiFillFileWord } from "react-icons/ai";
import downloadAsWord from "../../../utils/SaveToWord";

interface WordSaveButtonProps {
  transliteratedText: string;
}

export default function WordSaveButton({
  transliteratedText,
}: WordSaveButtonProps) {
  return (
    <button
      className={transliteratedText ? "active" : undefined}
      onClick={() => downloadAsWord(transliteratedText)}
      disabled={transliteratedText.trim().length === 0}
    >
      <AiFillFileWord style={{ marginRight: "5px" }} />
      Word
    </button>
  );
}
