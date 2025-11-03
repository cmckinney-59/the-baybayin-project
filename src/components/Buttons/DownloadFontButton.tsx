import downloadFont from "../../utils/DownloadFont";

export default function DownloadFontButton() {
  const handleFontDownload = () => {
    downloadFont("TagDoc93.ttf");
  };

  return (
    <button onClick={handleFontDownload} className="download-font-button">
      Download Font
    </button>
  );
}
