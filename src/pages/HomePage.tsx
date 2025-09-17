import { useNavigate } from "react-router-dom";
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
          <div className="card-icon">🔤</div>
          <h2>Transliterator</h2>
          <p>Convert text to Baybayin.</p>
        </div>

        <div className="nav-card" onClick={handleAboutClick}>
          <div className="card-icon">ℹ️</div>
          <h2>About</h2>
          <p>
            Learn more about The Baybayin Project and our mission to preserve
            and share writing systems.
          </p>
        </div>
      </div>
    </div>
  );
}
