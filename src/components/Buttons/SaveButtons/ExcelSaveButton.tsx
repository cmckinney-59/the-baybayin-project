import { AiFillFileExcel } from "react-icons/ai";
import downloadAsExcel from "../../../utils/SaveToExcel";

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
  const handleClick = () => {
    onShowDialog(() => downloadAsExcel(wordsDictionary));
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
