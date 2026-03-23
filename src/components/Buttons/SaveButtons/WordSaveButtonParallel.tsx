import { AiFillFileWord } from "react-icons/ai";
import downloadAsWordParallel from "../../../utils/SaveActions/SaveToWordParallel.ts";
import { useAlphabet } from "../../../contexts/AlphabetContext";

interface WordSaveButtonParallelProps {
  originalText: string;
  transliteratedText: string;
  onShowDialog: (action: () => void) => void;
}

export default function WordSaveButtonParallel({
  originalText,
  transliteratedText,
  onShowDialog,
}: WordSaveButtonParallelProps) {
  const { currentFontName } = useAlphabet();

  const handleClick = () => {
    onShowDialog(() =>
      downloadAsWordParallel(
        originalText,
        transliteratedText,
        currentFontName,
      ),
    );
  };

  return (
    <button
      className={transliteratedText ? "active" : undefined}
      onClick={handleClick}
      disabled={transliteratedText.trim().length === 0}
    >
      <AiFillFileWord />
      Parallel
    </button>
  );
}
