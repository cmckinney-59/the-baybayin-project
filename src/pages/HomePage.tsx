import { useNavigate } from "react-router-dom";
import { AiOutlineTranslation, AiOutlineInfoCircle } from "react-icons/ai";

import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  const handleTransliteratorClick = () => {
    navigate("/transliterator");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <div className="homepage">
      <h1>Welcome to The Baybayin Project</h1>
      <p>Choose an option to get started:</p>

      <div className="cards-container">
        <div className="nav-card" onClick={handleTransliteratorClick}>
          <AiOutlineTranslation
            style={{
              marginRight: "5px",
              width: "30px",
              height: "30px",
              color: "#007bff",
            }}
          />
          <h2>Transliterator</h2>
          <p>Convert text to Baybayin.</p>
        </div>

        <div className="nav-card" onClick={handleAboutClick}>
          <AiOutlineInfoCircle
            style={{
              marginRight: "5px",
              width: "30px",
              height: "30px",
              color: "#007bff",
            }}
          />
          <h2>About</h2>
          <p>Learn more about The Baybayin Project and our mission.</p>
        </div>
      </div>
    </div>
  );
}
