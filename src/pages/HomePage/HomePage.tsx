import { useNavigate } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineSetting,
  AiOutlineShopping,
} from "react-icons/ai";
import { PiTranslate } from "react-icons/pi";

import "./HomePage.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import NavCard from "../../components/NavCard/NavCard";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="homepage-hero">
        <PageTitle title="ScriptWorks" />
        <p className="homepage-tagline">
          Transliterate Latin text into historical and fictional writing
          systems — then explore fonts, documents, and transcriptions.
        </p>
      </header>

      <div className="cards-container">
        <NavCard
          featured
          title="Transliterator"
          description="Type in English or Latin letters and see Baybayin, Aurebesh, Deseret, and more."
          icon={<PiTranslate />}
          onClick={() => navigate("/transliterator/baybayin")}
        />

        <NavCard
          title="Projects"
          description="Browse completed and in-progress transcriptions and downloads."
          icon={<AiOutlineProject />}
          onClick={() => navigate("/projects")}
        />

        <NavCard
          title="Shop"
          description="Pre-order proclamation prints in Baybayin, Deseret, and more."
          icon={<AiOutlineShopping />}
          onClick={() => navigate("/shop")}
        />

        <NavCard
          title="About"
          description="The story behind the project and where to follow along."
          icon={<AiOutlineInfoCircle />}
          onClick={() => navigate("/about")}
        />

        <NavCard
          title="Settings"
          description="Theme, experimental features, and preferences."
          icon={<AiOutlineSetting />}
          onClick={() => navigate("/settings")}
        />

        <NavCard
          title="Donate"
          description="Help keep the tools free and the transcriptions moving."
          icon={<AiOutlineHeart />}
          onClick={() => navigate("/donate")}
        />
      </div>
    </div>
  );
}
