import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/transliterator/baybayin");
  };

  return (
    <button className="back-button" onClick={handleBackClick}>
      <AiOutlineArrowLeft />
    </button>
  );
}
