import downloadFont from "../../utils/DownloadFont";
import { useAlphabet } from "../../contexts/AlphabetContext";

export default function DownloadFontButton() {
  const { currentAlphabet } = useAlphabet();

  const getFontFileName = (alphabet: string): string => {
    const fontMap: { [key: string]: string } = {
      Baybayin: "TagDoc93.ttf",
      Aurebesh: "AurebeshBold-Rw1l.ttf",
      Deseret: "deseret_.ttf",
      Tengwar: "QUENYA.TTF",
      Plqad: "klingon font.ttf",
      Matoran: "Matoran.ttf",
      Unown: "Unown.ttf",
      Gallifreyan: "ws_simple_gallifreyan.ttf",
      Atlantean: "Atlantean Regular.ttf",
      Steel: "steelAlphabet - Aligned.ttf",
    };
    return fontMap[alphabet] || "TagDoc93.ttf";
  };

  const handleFontDownload = () => {
    const fileName = getFontFileName(currentAlphabet);
    downloadFont(fileName);
  };

  return (
    <button onClick={handleFontDownload} className="font-download-button">
      Download Font
    </button>
  );
}
