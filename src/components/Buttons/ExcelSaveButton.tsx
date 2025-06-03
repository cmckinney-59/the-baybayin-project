import { AiFillFileExcel } from "react-icons/ai";
import downloadAsExcel from "../Utils/SaveToExcel";

type Dictionary = { [word: string]: string };

interface ExcelSaveButtonProps {
  transliteratedText: string;
  wordsDictionary: Dictionary;
}

export default function ExcelSaveButton({
  transliteratedText,
  wordsDictionary,
}: ExcelSaveButtonProps) {
  return (
    <button
      className={transliteratedText ? "active" : undefined}
      onClick={() => downloadAsExcel(wordsDictionary)}
      disabled={transliteratedText.trim().length === 0}
    >
      <AiFillFileExcel style={{ marginRight: "5px" }} />
      Excel
    </button>
  );
}
