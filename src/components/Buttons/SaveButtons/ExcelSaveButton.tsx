import { AiFillFileExcel } from "react-icons/ai";
import downloadAsExcel from "../../../utils/SaveActions/SaveToExcel";
import { useAlphabet } from "../../../contexts/AlphabetContext";
import { useWordsDictionary } from "../../../contexts/WordsDictionaryContext";

interface ExcelSaveButtonProps {
  transliteratedText: string;
  onShowDialog: (action: () => void) => void;
}

export default function ExcelSaveButton({
  transliteratedText,
  onShowDialog,
}: ExcelSaveButtonProps) {
  const { currentFontName } = useAlphabet();
  const { wordsDictionary } = useWordsDictionary();

  const handleClick = () => {
    onShowDialog(() => downloadAsExcel(wordsDictionary, currentFontName));
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
