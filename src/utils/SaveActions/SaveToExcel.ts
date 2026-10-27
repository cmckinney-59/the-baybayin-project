import * as XLSX from "xlsx-js-style";
import { saveAs } from "file-saver";

/**
 * Strip punctuation attached before/after a token, while keeping punctuation
 * that commonly forms part of a word (apostrophes, hyphens).
 */
export function stripOuterPunctuation(token: string): string {
  return token
    .replace(/^[^\p{L}\p{N}'’ʼ\-]+/u, "")
    .replace(/[^\p{L}\p{N}'’ʼ\-]+$/u, "");
}

function toSortedRows(data: { [key: string]: string }) {
  return Object.entries(data)
    .sort(([keyA], [keyB]) =>
      keyA.toLowerCase().localeCompare(keyB.toLowerCase()),
    )
    .map(([original, transliterated]) => ({
      Original: original,
      Transliterated: transliterated,
    }));
}

/** Unique words with outer punctuation removed; first occurrence wins. */
function buildWordsWithoutOuterPunctuation(data: {
  [key: string]: string;
}): { [key: string]: string } {
  const cleaned: { [key: string]: string } = {};
  const sortedEntries = Object.entries(data).sort(([keyA], [keyB]) =>
    keyA.toLowerCase().localeCompare(keyB.toLowerCase()),
  );

  for (const [original, transliterated] of sortedEntries) {
    const cleanOriginal = stripOuterPunctuation(original);
    if (!cleanOriginal || cleanOriginal in cleaned) continue;
    cleaned[cleanOriginal] = stripOuterPunctuation(transliterated);
  }

  return cleaned;
}

function uniqueSortedCharacters(texts: Iterable<string>): string[] {
  const chars = new Set<string>();
  for (const text of texts) {
    for (const char of text) {
      if (char.trim() === "") continue;
      chars.add(char);
    }
  }
  return [...chars].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "variant" }));
}

/** Side-by-side inventories of unique characters in original vs transliterated text. */
function buildUniqueCharacterRows(data: { [key: string]: string }) {
  const originalChars = uniqueSortedCharacters(Object.keys(data));
  const transliteratedChars = uniqueSortedCharacters(Object.values(data));
  const rowCount = Math.max(originalChars.length, transliteratedChars.length);

  const rows: { Original: string; Transliterated: string }[] = [];
  for (let i = 0; i < rowCount; i++) {
    rows.push({
      Original: originalChars[i] ?? "",
      Transliterated: transliteratedChars[i] ?? "",
    });
  }
  return rows;
}

function applyTransliteratedFont(
  worksheet: XLSX.WorkSheet,
  fontName: string,
) {
  const range = XLSX.utils.decode_range(worksheet["!ref"] || "");
  for (let row = range.s.r + 1; row <= range.e.r; ++row) {
    const cellRef = XLSX.utils.encode_cell({ c: 1, r: row });
    const cell = worksheet[cellRef];
    if (cell && cell.v !== "") {
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
}

function createWordWorksheet(
  data: { [key: string]: string },
  fontName: string,
): XLSX.WorkSheet {
  const worksheet = XLSX.utils.json_to_sheet(toSortedRows(data));
  applyTransliteratedFont(worksheet, fontName);
  return worksheet;
}

function createCharacterWorksheet(
  data: { [key: string]: string },
  fontName: string,
): XLSX.WorkSheet {
  const rows = buildUniqueCharacterRows(data);
  const worksheet = XLSX.utils.json_to_sheet(
    rows.length > 0 ? rows : [{ Original: "", Transliterated: "" }],
  );
  applyTransliteratedFont(worksheet, fontName);
  return worksheet;
}

export default function downloadAsExcel(
  data: { [key: string]: string },
  fontName: string,
) {
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    createWordWorksheet(data, fontName),
    "Words With Punctuation",
  );

  XLSX.utils.book_append_sheet(
    workbook,
    createWordWorksheet(buildWordsWithoutOuterPunctuation(data), fontName),
    "Words No Punctuation",
  );

  XLSX.utils.book_append_sheet(
    workbook,
    createCharacterWorksheet(data, fontName),
    "Unique Characters",
  );

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  saveAs(blob, "Transliteration.xlsx");
}
