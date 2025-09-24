import "./BaybayinHowToUse.css";
import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";
import downloadFont from "../../../../utils/DownloadFont";

export default function BaybayinHowToUse() {
  const handleFontDownload = () => {
    downloadFont("TagDoc93.ttf");
  };

  return (
    <CollapsibleSection title="How To Use" defaultExpanded={false}>
      <p>Start typing your text to see the transliteration in real-time.</p>
      <p>
        Click a button below transliterator to save to Excel, Word, Text, or
        copy to clipboard.
      </p>
      <p>
        Download and install the Baybayin font to see the script in its full
        glory.
      </p>
      <button onClick={handleFontDownload} className="font-download-button">
        Download Baybayin Font
      </button>
    </CollapsibleSection>
  );
}
