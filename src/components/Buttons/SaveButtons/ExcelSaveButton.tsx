import { AiFillFileExcel } from "react-icons/ai";
import downloadAsExcel from "../../../utils/SaveToExcel";
import { useAlphabet } from "../../../contexts/AlphabetContext";

type Dictionary = { [word: string]: string };

interface ExcelSaveButtonProps {
  transliteratedText: string;
  wordsDictionary: Dictionary;
  onShowDialog: (action: () => void) => void;
}

export default function ExcelSaveButton({
  transliteratedText,
  wordsDictionary,
  onShowDialog,
}: ExcelSaveButtonProps) {
  const { currentAlphabet } = useAlphabet();

  const handleClick = () => {
    onShowDialog(() => downloadAsExcel(wordsDictionary, currentAlphabet));
  };

  return (
    <button
      className={transliteratedText ? "active" : undefined}
      onClick={handleClick}
      disabled={transliteratedText.trim().length === 0}
    >
      <AiFillFileExcel />
      Excel
    </button>
  );
}
