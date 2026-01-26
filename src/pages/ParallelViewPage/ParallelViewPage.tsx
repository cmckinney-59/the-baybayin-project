import { useSearchParams, useNavigate } from "react-router-dom";
import { useAlphabet } from "../../contexts/AlphabetContext";
import "./ParallelViewPage.css";

export default function ParallelViewPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { currentAlphabet } = useAlphabet();

  const originalText = searchParams.get("original") || "";
  const transliteratedText = searchParams.get("transliterated") || "";

  const getFontClass = () => {
    if (!transliteratedText) return "";
    switch (currentAlphabet) {
      case "Baybayin":
        return "baybayin-font";
      case "Aurebesh":
        return "aurebesh-font";
      case "Deseret":
        return "deseret-font";
      case "Tengwar":
        return "tengwar-font";
      default:
        return "";
    }
  };

  return (
    <div className="parallel-view-container">
      <div className="parallel-view-header">
        <h2>Parallel View</h2>
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>
      </div>
      <div className="parallel-view-content">
        <div className="parallel-view-panel">
          <h3>Original Text</h3>
          <div className="parallel-view-text original-text">
            {originalText || <span className="placeholder">No text entered</span>}
          </div>
        </div>
        <div className="parallel-view-panel">
          <h3>Transliterated Text</h3>
          <div className={`parallel-view-text transliterated-text ${getFontClass()}`}>
            {transliteratedText || <span className="placeholder">No transliteration available</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
