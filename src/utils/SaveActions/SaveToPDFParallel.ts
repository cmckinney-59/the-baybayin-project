import jsPDF from "jspdf";

export default function downloadAsPDFParallel(
  originalText: string,
  transliteratedText: string
) {
  const original = originalText.trim();
  const transliterated = transliteratedText.trim();

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const colGap = 10;
  const usableWidth = pageWidth - 2 * margin - colGap;
  const colWidth = usableWidth / 2;
  const fontSize = 11;
  const lineHeight = 7;

  doc.setFontSize(fontSize);
  doc.setFont("helvetica", "normal");

  // Split each column's text into wrapped lines (preserves paragraphs via \n)
  const originalLines = doc.splitTextToSize(original, colWidth);
  const transliteratedLines = doc.splitTextToSize(transliterated, colWidth);
  const maxLines = Math.max(originalLines.length, transliteratedLines.length);

  let yPosition = margin + 10;

  for (let i = 0; i < maxLines; i++) {
    // New page when needed
    if (yPosition + lineHeight > pageHeight - margin) {
      doc.addPage();
      yPosition = margin + 10;
    }

    const leftText = originalLines[i] ?? "";
    const rightText = transliteratedLines[i] ?? "";

    doc.text(leftText, margin, yPosition, { maxWidth: colWidth });
    doc.text(rightText, margin + colWidth + colGap, yPosition, {
      maxWidth: colWidth,
    });

    yPosition += lineHeight;
  }

  doc.save("transliteration-parallel.pdf");
}
