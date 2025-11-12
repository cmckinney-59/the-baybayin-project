import * as XLSX from "xlsx-js-style";
import { saveAs } from "file-saver";

function getFontName(alphabet: string): string {
  const fontMap: { [key: string]: string } = {
    Baybayin: "Tagalog Doctrina 1593",
    "Baybayin Lite": "Tagalog Doctrina 1593",
    Aurebesh: "Aurebesh",
    Deseret: "Deseret",
  };
  return fontMap[alphabet] || "Tagalog Doctrina 1593";
}

export default function downloadAsExcel(
  data: { [key: string]: string },
  alphabet: string = ""
) {
  const sortedEntries = Object.entries(data).sort(([keyA], [keyB]) =>
    keyA.toLowerCase().localeCompare(keyB.toLowerCase())
  );

  const rows = sortedEntries.map(([original, transliterated]) => ({
    Original: original,
    Transliterated: transliterated,
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);

  const fontName = getFontName(alphabet);

  const range = XLSX.utils.decode_range(worksheet["!ref"] || "");
  for (let row = range.s.r + 1; row <= range.e.r; ++row) {
    const cellRef = XLSX.utils.encode_cell({ c: 1, r: row });
    const cell = worksheet[cellRef];
    if (cell) {
      cell.s = {
        font: {
          name: fontName,
          sz: 14,
          color: { rgb: "000000" },
        },
      };
    }
  }

  worksheet["!cols"] = [{ wch: 20 }, { wch: 30 }];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Transliteration");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  saveAs(blob, "Transliteration.xlsx");
}
