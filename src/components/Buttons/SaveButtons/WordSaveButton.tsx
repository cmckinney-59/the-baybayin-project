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
  const { currentFontName } = useAlphabet();

  const handleClick = () => {
    onShowDialog(() => downloadAsWord(transliteratedText, currentFontName));
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
