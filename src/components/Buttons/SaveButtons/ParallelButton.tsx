import { useNavigate } from "react-router-dom";
import { AiFillFileWord, AiFillFilePdf } from "react-icons/ai";
import downloadAsWordParallel from "../../../utils/SaveActions/SaveToWordParallel";
import downloadAsPDFParallel from "../../../utils/SaveActions/SaveToPDFParallel";
import { useAlphabet } from "../../../contexts/AlphabetContext";

interface ParallelButtonProps {
  originalText: string;
  transliteratedText: string;
  onShowDialog: (action: () => void) => void;
}

export default function ParallelButton({
  originalText,
  transliteratedText,
  onShowDialog,
}: ParallelButtonProps) {
  const { currentAlphabet } = useAlphabet();
  const navigate = useNavigate();

  const handleViewClick = () => {
    const params = new URLSearchParams({
      original: originalText,
      transliterated: transliteratedText,
    });
    navigate(`/parallel-view?${params.toString()}`);
  };

  const handleWordClick = () => {
    onShowDialog(() =>
      downloadAsWordParallel(originalText, transliteratedText, currentAlphabet)
    );
  };

  const handlePDFClick = () => {
    // PDF doesn't need font dialog since it has limited font support anyway
    downloadAsPDFParallel(originalText, transliteratedText);
  };

  return (
    <>
      <button
        className={transliteratedText ? "active" : undefined}
        onClick={handleViewClick}
        disabled={transliteratedText.trim().length === 0}
        title="View text side-by-side in a new page"
      >
        <AiFillFileWord />
        Parallel View
      </button>
      <button
        className={transliteratedText ? "active" : undefined}
        onClick={handleWordClick}
        disabled={transliteratedText.trim().length === 0}
        title="Save as Word (may have compatibility issues with older Word versions)"
      >
        <AiFillFileWord />
        Parallel Word
      </button>
      <button
        className={transliteratedText ? "active" : undefined}
        onClick={handlePDFClick}
        disabled={transliteratedText.trim().length === 0}
        title="Save as PDF (recommended for compatibility)"
      >
        <AiFillFilePdf />
        Parallel PDF
      </button>
    </>
  );
}
