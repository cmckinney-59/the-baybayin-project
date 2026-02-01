import jsPDF from "jspdf";

export default function downloadAsPDFParallel(
  originalText: string,
  transliteratedText: string
) {
  // Split both texts into words/lines for parallel display
  const originalWords = originalText.trim().split(/\s+/);
  const transliteratedWords = transliteratedText.trim().split(/\s+/);

  // Create PDF
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const usableWidth = pageWidth - 2 * margin;
  const colWidth = usableWidth / 2;
  let yPosition = margin + 10;
  const lineHeight = 10;
  const fontSize = 12;
  const cellPadding = 3;

  doc.setFontSize(fontSize);

  // Process each word pair
  originalWords.forEach((originalWord, index) => {
    const transliteratedWord =
      index < transliteratedWords.length ? transliteratedWords[index] : "";

    // Check if we need a new page
    if (yPosition + lineHeight > pageHeight - margin) {
      doc.addPage();
      yPosition = margin + 10;
    }

    const rowHeight = lineHeight;

    // Draw borders for cells
    // Left cell border
    doc.setDrawColor(0, 0, 0);
    doc.rect(margin, yPosition - lineHeight + cellPadding, colWidth, rowHeight);

    // Right cell border
    doc.rect(
      margin + colWidth,
      yPosition - lineHeight + cellPadding,
      colWidth,
      rowHeight
    );

    // Left cell (original text) - using Arial/Helvetica
    doc.setFont("helvetica", "normal");
    doc.text(originalWord, margin + cellPadding, yPosition);

    // Right cell (transliterated text)
    // Note: jsPDF has limited font support for custom fonts
    // The text will be saved but may display in a default font
    // For proper font rendering, the fonts would need to be embedded
    doc.setFont("helvetica", "normal");
    doc.text(transliteratedWord, margin + colWidth + cellPadding, yPosition);

    yPosition += rowHeight + 2;
  });

  // Save the PDF
  doc.save("transliteration-parallel.pdf");
}
