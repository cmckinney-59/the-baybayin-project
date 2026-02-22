import { useEffect } from "react";
import { AiOutlinePrinter } from "react-icons/ai";

const PRINT_TITLE = "Parallel View – Original & Transliteration";

export default function PrintToPDFButton() {
  useEffect(() => {
    const previousTitle = document.title;
    const onBeforePrint = () => {
      document.title = PRINT_TITLE;
    };
    const onAfterPrint = () => {
      document.title = previousTitle;
    };
    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);
    return () => {
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
      document.title = previousTitle;
    };
  }, []);

  const handlePrintToPdf = () => {
    window.print();
  };

  return (
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
  );
}
