import { AiFillFileExcel } from "react-icons/ai";
import downloadAsExcel from "../../../utils/SaveToExcel";
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
  const { currentAlphabet } = useAlphabet();
  const { wordsDictionary } = useWordsDictionary();

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
