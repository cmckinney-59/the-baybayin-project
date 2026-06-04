import { useNavigate } from "react-router-dom";
import {
  AiOutlineTranslation,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineSetting,
} from "react-icons/ai";

import "./HomePage.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import NavCard from "../../components/NavCard/NavCard";

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

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  return (
    <div className="homepage">
      <PageTitle title="Welcome" />

      <div className="cards-container">
        <NavCard
          title="Transliterator"
          description="Convert text to various alphabets."
          icon={<AiOutlineTranslation />}
          onClick={handleTransliteratorClick}
        />

        <NavCard
          title="Projects"
          description="See our projects."
          icon={<AiOutlineProject />}
          onClick={handleProjectsClick}
        />

        <NavCard
          title="About"
          description="Learn more and connect with us."
          icon={<AiOutlineInfoCircle />}
          onClick={handleAboutClick}
        />

        <NavCard
          title="Settings"
          description="Manage settings."
          icon={<AiOutlineSetting />}
          onClick={handleSettingsClick}
        />
      </div>
    </div>
  );
}
