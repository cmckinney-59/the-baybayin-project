import { AiOutlinePrinter } from "react-icons/ai";

export default function PrintToPDFButton() {
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
