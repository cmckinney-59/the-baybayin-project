import CollapsibleSection from "../CollapsibleSection/CollapsibleSection";
import { useNavigate } from "react-router-dom";

export default function OtherAlphabets() {
  const navigate = useNavigate();
  const transliteratorPath = "/transliterator";

  const handleAurebeshClick = () => {
    navigate(`${transliteratorPath}/aurebesh`);
  };

  const handleDeseretClick = () => {
    navigate(`${transliteratorPath}/deseret`);
  };

  const handleTengwarClick = () => {
    navigate(`${transliteratorPath}/tengwar`);
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
        <h1 className="tengwar-font">t</h1>
        <h2>Tengwar</h2>
      </div>
    </CollapsibleSection>
  );
}
