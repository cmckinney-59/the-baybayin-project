import downloadFont from "../../utils/DownloadFont";
import { useAlphabet } from "../../contexts/AlphabetContext";

export default function DownloadFontButton() {
  const { currentAlphabet } = useAlphabet();

  const getFontFileName = (alphabet: string): string => {
    const fontMap: { [key: string]: string } = {
      Atlantean: "atlantean-regular_xMmTX.zip",
      Aurebesh: "aurebesh-font.zip",
      Baybayin: "tagalog-stylized-font.zip",
      Deseret: "deseret_.ttf",
      Gallifreyan: "ws_simple_gallifreyan.zip",
      MarasEye: "maras-eye-font.zip",
      Matoran: "matoran.zip",
      Plqad: "klingon.zip",
      Steel: "steel alphabet font - aligned.zip",
      Tengwar: "tengwar_quenya.zip",
      Unown: "unown.zip",
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
