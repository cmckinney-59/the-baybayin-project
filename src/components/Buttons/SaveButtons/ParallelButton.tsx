import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

interface ParallelButtonProps {
  originalText: string;
  transliteratedText: string;
  onShowDialog: (action: () => void) => void;
}

export default function ParallelButton({
  originalText,
  transliteratedText,
}: ParallelButtonProps) {
  const navigate = useNavigate();

  const handleViewClick = () => {
    const params = new URLSearchParams({
      original: originalText,
      transliterated: transliteratedText,
    });
    navigate(`/parallel-view?${params.toString()}`);
  };

  return (
    <>
      <button
        className={transliteratedText ? "active" : undefined}
        onClick={handleViewClick}
        disabled={transliteratedText.trim().length === 0}
        title="View text side-by-side in a new page"
      >
        <AiFillEye />
        Parallel View
      </button>
    </>
  );
}
