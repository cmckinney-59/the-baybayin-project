import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function downloadAsExcel(data: { [key: string]: string }) {
  const rows = Object.entries(data).map(([original, transliterated]) => ({
    Original: original,
    Transliterated: transliterated,
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Transliteration");

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  saveAs(blob, "Transliteration.xlsx");
}
