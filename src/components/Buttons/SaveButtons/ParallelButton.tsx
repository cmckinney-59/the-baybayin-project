import { AiFillFileWord } from "react-icons/ai";
import downloadAsWordParallel from "../../../utils/SaveActions/SaveToWordParallel";
import { useAlphabet } from "../../../contexts/AlphabetContext";

interface ParallelButtonProps {
  transliteratedText: string;
  onShowDialog: (action: () => void) => void;
}

export default function ParallelButton({
  transliteratedText,
  onShowDialog,
}: ParallelButtonProps) {
  const { currentAlphabet } = useAlphabet();

  const handleClick = () => {
    onShowDialog(() =>
      downloadAsWordParallel(transliteratedText, currentAlphabet)
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
