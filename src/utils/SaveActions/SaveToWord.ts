import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";

export default function downloadAsWord(text: string, fontName: string) {

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text,
                font: {
                  name: fontName,
                },
              }),
            ],
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "transliteration.docx");
  });
}
