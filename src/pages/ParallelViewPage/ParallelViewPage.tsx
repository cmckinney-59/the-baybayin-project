import { useSearchParams } from "react-router-dom";
import { AiOutlinePrinter } from "react-icons/ai";
import { useAlphabet } from "../../contexts/AlphabetContext";
import "./ParallelViewPage.css";
import BackButton from "../../components/Buttons/BackButton";

export default function ParallelViewPage() {
  const [searchParams] = useSearchParams();
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

  const handlePrintToPdf = () => {
    window.print();
  };

  return (
    <div className="parallel-view-container">
      <BackButton />
      <button
        type="button"
        className="print-to-pdf-button"
        onClick={handlePrintToPdf}
        title="Open print dialog to save as PDF"
        aria-label="Print page to PDF"
      >
        <AiOutlinePrinter />
        Print to PDF
      </button>
      <div className="parallel-view-content">
        <div className="parallel-view-panel">
          <div className="parallel-view-text original-text">
            {originalText || <span className="placeholder">No text entered</span>}
          </div>
        </div>
        <div className="parallel-view-divider"></div>
        <div className="parallel-view-panel">
          <div className={`parallel-view-text transliterated-text ${getFontClass()}`}>
            {transliteratedText || <span className="placeholder">No transliteration available</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
