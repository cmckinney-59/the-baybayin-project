import { AiFillFileWord } from "react-icons/ai";
import downloadAsWord from "../../../utils/SaveActions/SaveToWord";
import { useAlphabet } from "../../../contexts/AlphabetContext";

interface WordSaveButtonProps {
  transliteratedText: string;
  onShowDialog: (action: () => void) => void;
}

export default function WordSaveButton({
  transliteratedText,
  onShowDialog,
}: WordSaveButtonProps) {
  const { currentAlphabet } = useAlphabet();

  const handleClick = () => {
    onShowDialog(() => downloadAsWord(transliteratedText, currentAlphabet));
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
