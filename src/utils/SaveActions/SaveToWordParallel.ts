import { saveAs } from "file-saver";
import {
  BorderStyle,
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableLayoutType,
  TableRow,
  TextRun,
  WidthType,
} from "docx";

function getFontName(alphabet: string): string {
  const fontMap: { [key: string]: string } = {
    Baybayin: "Tagalog Doctrina 1593",
    Aurebesh: "Aurebesh",
    Deseret: "Deseret",
    Tengwar: "Tengwar",
  };
  return fontMap[alphabet] || "Tagalog Doctrina 1593";
}

export default function downloadAsWordParallel(
  originalText: string,
  transliteratedText: string,
  transliteratedAlphabet: string = "",
) {
  const transliteratedFontName = getFontName(transliteratedAlphabet);

  const table = new Table({
    width: { size: 9638, type: WidthType.DXA },
    layout: TableLayoutType.FIXED,
    borders: {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE },
      insideVertical: { style: BorderStyle.SINGLE },
    },
    /* Cell margins for all cells (in DXA: 1/20 pt; e.g. 144 = ~7pt, 288 = ~14pt) */
    margins: {
      left: 1000,
      right: 1000,
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: originalText || " ",
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
