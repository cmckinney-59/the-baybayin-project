import { saveAs } from "file-saver";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";

function getFontName(alphabet: string): string {
  const fontMap: { [key: string]: string } = {
    Baybayin: "Tagalog Doctrina 1593",
    "Baybayin Lite": "Tagalog Doctrina 1593",
    Aurebesh: "Aurebesh",
    Deseret: "Deseret",
    Tengwar: "Tengwar",
  };
  return fontMap[alphabet] || "Tagalog Doctrina 1593";
}

export default function downloadAsWordParallel(
  originalText: string,
  transliteratedText: string,
  alphabet: string = ""
) {
  const fontName = getFontName(alphabet);

  // Split both texts into words/lines for parallel display
  const originalWords = originalText.trim().split(/\s+/);
  const transliteratedWords = transliteratedText.trim().split(/\s+/);

  // Create table rows for each word pair
  const tableRows: TableRow[] = originalWords.map((originalWord, index) => {
    const transliteratedWord =
      index < transliteratedWords.length ? transliteratedWords[index] : "";

    return new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: originalWord,
                  font: {
                    name: "Arial", // Default font for roman script
                  },
                }),
              ],
            }),
          ],
          width: {
            size: 50,
            type: WidthType.PERCENTAGE,
          },
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: transliteratedWord,
                  font: {
                    name: fontName,
                  },
                }),
              ],
            }),
          ],
          width: {
            size: 50,
            type: WidthType.PERCENTAGE,
          },
        }),
      ],
    });
  });

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Table({
            rows: tableRows,
            width: {
              size: 100,
              type: WidthType.PERCENTAGE,
            },
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "transliteration-parallel.docx");
  });
}
