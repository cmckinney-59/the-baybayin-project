import downloadFont from "../../utils/DownloadFont";
import { useAlphabet } from "../../contexts/AlphabetContext";

export default function DownloadFontButton() {
  const { currentAlphabet } = useAlphabet();

  const getFontDownload = (
    alphabet: string,
  ): { url: string; downloadName: string } | null => {
    switch (alphabet) {
      case "Atlantean":
        return {
          url: new URL(
            "../../assets/fonts/atlantean/atlantean-regular_xMmTX.zip",
            import.meta.url,
          ).href,
          downloadName: "atlantean-regular_xMmTX.zip",
        };
      case "Aurebesh":
        return {
          url: new URL(
            "../../assets/fonts/aurebesh/aurebesh-font.zip",
            import.meta.url,
          ).href,
          downloadName: "aurebesh-font.zip",
        };
      case "Baybayin":
        return {
          url: new URL(
            "../../assets/fonts/baybayin/tagalog-stylized-font.zip",
            import.meta.url,
          ).href,
          downloadName: "tagalog-stylized-font.zip",
        };
      case "Deseret":
        return {
          url: new URL(
            "../../assets/fonts/deseret/deseret_.ttf",
            import.meta.url,
          ).href,
          downloadName: "deseret_.ttf",
        };
      case "Gallifreyan":
        return {
          url: new URL(
            "../../assets/fonts/gallifreyan/ws_simple_gallifreyan.zip",
            import.meta.url,
          ).href,
          downloadName: "ws_simple_gallifreyan.zip",
        };
      case "MarasEye":
        return {
          url: new URL(
            "../../assets/fonts/maras-eye/maras-eye-font.zip",
            import.meta.url,
          ).href,
          downloadName: "maras-eye-font.zip",
        };
      case "Matoran":
        return {
          url: new URL(
            "../../assets/fonts/matoran/matoran.zip",
            import.meta.url,
          ).href,
          downloadName: "matoran.zip",
        };
      case "Plqad":
        return {
          url: new URL(
            "../../assets/fonts/klingon/klingon.zip",
            import.meta.url,
          ).href,
          downloadName: "klingon.zip",
        };
      case "Steel":
        return {
          url: new URL(
            "../../assets/fonts/steel/steel alphabet font - aligned.zip",
            import.meta.url,
          ).href,
          downloadName: "steel alphabet font - aligned.zip",
        };
      case "Tengwar":
        return {
          url: new URL(
            "../../assets/fonts/tengwar/tengwar_quenya.zip",
            import.meta.url,
          ).href,
          downloadName: "tengwar_quenya.zip",
        };
      case "Unown":
        return {
          url: new URL("../../assets/fonts/unown/unown.zip", import.meta.url)
            .href,
          downloadName: "unown.zip",
        };
      default:
        return null;
    }
  };

  const handleFontDownload = () => {
    const asset = getFontDownload(currentAlphabet);
    if (!asset) {
      window.alert(
        `No downloadable font package is available for "${currentAlphabet}".`,
      );
      return;
    }
    downloadFont(asset.url, asset.downloadName);
  };

  return (
    <button
      onClick={handleFontDownload}
      className="font-download-button"
      disabled={!getFontDownload(currentAlphabet)}
      title={
        getFontDownload(currentAlphabet)
          ? "Download font package"
          : "No downloadable font package available"
      }
    >
      Download Font
    </button>
  );
}
