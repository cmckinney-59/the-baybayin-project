import { AiOutlineLike } from "react-icons/ai";
import CollapsibleSection from "../CollapsibleSection/CollapsibleSection";
import { useNavigate } from "react-router-dom";

export default function OtherAlphabets() {
  const navigate = useNavigate();

  const handleAurebeshClick = () => {
    navigate("/transliterator/aurebesh");
  };

  const handleDeseretClick = () => {
    navigate("/transliterator/deseret");
  };

  const handleTengwarClick = () => {
    navigate("/transliterator/tengwar");
  };

  return (
    <CollapsibleSection title="Other Alphabets" defaultExpanded={false}>
      <div className="nav-card" onClick={handleAurebeshClick}>
        <h1 className="aurebesh-font">a</h1>
        <h2>Aurebesh</h2>
      </div>
      <div className="nav-card" onClick={handleDeseretClick}>
        <h1 className="deseret-font">D</h1>
        <h2>Deseret</h2>
      </div>
      <div className="nav-card" onClick={handleTengwarClick}>
        <h1 className="tengwar-font">T</h1>
        <h2>Tengwar</h2>
      </div>
    </CollapsibleSection>
  );
}
