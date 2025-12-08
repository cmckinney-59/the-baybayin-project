import { useNavigate } from "react-router-dom";
import {
  AiOutlineTranslation,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineLike,
} from "react-icons/ai";

import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  const handleTransliteratorClick = () => {
    navigate("/transliterator/baybayin");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleProjectsClick = () => {
    navigate("/projects");
  };

  const handleSocialClick = () => {
    navigate("/social");
  };

  return (
    <div className="homepage">
      <h1>Welcome</h1>
      <p>Preserving Filipino heritage through Baybayin transliteration</p>

      <div className="cards-container">
        <div className="nav-card" onClick={handleTransliteratorClick}>
          <AiOutlineTranslation className="nav-card-icon" />
          <h2>Transliterator</h2>
          <p>Convert text to Baybayin.</p>
        </div>

        <div className="nav-card" onClick={handleProjectsClick}>
          <AiOutlineProject className="nav-card-icon" />
          <h2>Projects</h2>
          <p>See our projects.</p>
        </div>

        <div className="nav-card" onClick={handleAboutClick}>
          <AiOutlineInfoCircle className="nav-card-icon" />
          <h2>About</h2>
          <p>Learn more about our mission.</p>
        </div>

        <div className="nav-card" onClick={handleSocialClick}>
          <AiOutlineLike className="nav-card-icon" />
          <h2>Social</h2>
          <p>Connect with us.</p>
        </div>
      </div>
    </div>
  );
}
