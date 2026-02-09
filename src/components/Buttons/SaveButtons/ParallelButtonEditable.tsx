import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

interface ParallelButtonEditableProps {
  originalText: string;
  transliteratedText: string;
  onShowDialog: (action: () => void) => void;
}

export default function ParallelButtonEditable({
  originalText: _originalText,
  transliteratedText,
}: ParallelButtonEditableProps) {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate("/parallel-view-editable");
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
        Editable
      </button>
    </>
  );
}
