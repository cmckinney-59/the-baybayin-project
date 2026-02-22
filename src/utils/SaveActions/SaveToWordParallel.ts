import { saveAs } from "file-saver";
import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
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
  originalAlphabet: string = "",
  transliteratedAlphabet: string = "",
) {
  const originalFontName = getFontName(originalAlphabet);
  const transliteratedFontName = getFontName(transliteratedAlphabet);

  const table = new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: originalText || " ",
                    font: { name: originalFontName },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: transliteratedText || " ",
                    font: { name: transliteratedFontName },
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [table],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "transliteration-parallel.docx");
  });
}
