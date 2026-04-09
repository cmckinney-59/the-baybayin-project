import downloadFont from "../../utils/DownloadFont";
import { useAlphabet } from "../../contexts/AlphabetContext";
import { ALPHABETS_DATA } from "../../data/ALPHABETS_DATA";

export default function DownloadFontButton() {
  const { currentAlphabet } = useAlphabet();

  const getFontDownload = (
    alphabet: string,
  ): { url: string; downloadName: string } | null => {
    const alphabetData = ALPHABETS_DATA.find((a) => a.name === alphabet);
    if (!alphabetData) return null;
    return {
      url: new URL(
        `../../assets/fonts/${alphabetData.name.toLowerCase()}/${alphabetData.downloadName}`,
        import.meta.url,
      ).href,
      downloadName: alphabetData.downloadName,
    };
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
