import * as XLSX from "xlsx-js-style";
import { saveAs } from "file-saver";

export default function downloadAsExcel(data: { [key: string]: string }) {
  const rows = Object.entries(data).map(([original, transliterated]) => ({
    Original: original,
    Transliterated: transliterated,
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);

  const range = XLSX.utils.decode_range(worksheet["!ref"] || "");
  for (let row = range.s.r + 1; row <= range.e.r; ++row) {
    const cellRef = XLSX.utils.encode_cell({ c: 1, r: row }); // 'Transliterated' column
    const cell = worksheet[cellRef];
    if (cell) {
      cell.s = {
        font: {
          name: "Tagalog Doctrina 1593", // Your desired font
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
