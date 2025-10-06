import { AiFillFileWord } from "react-icons/ai";
import downloadAsWord from "../../../utils/SaveToWord";

interface WordSaveButtonProps {
  transliteratedText: string;
  onShowDialog: (action: () => void) => void;
}

export default function WordSaveButton({
  transliteratedText,
  onShowDialog,
}: WordSaveButtonProps) {
  const handleClick = () => {
    onShowDialog(() => downloadAsWord(transliteratedText));
  };

  return (
    <button
      className={transliteratedText ? "active" : undefined}
      onClick={handleClick}
      disabled={transliteratedText.trim().length === 0}
    >
      <AiFillFileWord />
      Word
    </button>
  );
}
