/**
 * Copy this into Google Apps Script for your sheet (Extensions → Apps Script).
 *
 * Sheet setup:
 * 1. Create a tab named "Books"
 * 2. Put headers in row 1: Name | Author | Date Read
 *
 * Deploy:
 * 1. Deploy → New deployment → Web app
 * 2. Execute as: Me
 * 3. Who has access: Anyone
 * 4. Copy the /exec URL into .env.local as VITE_DADS_BOOKS_SHEET_URL
 */

const SHEET_NAME = "Books";

function getSheet() {
  const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
  if (!sheet) {
    throw new Error(`Missing sheet tab named "${SHEET_NAME}".`);
  }
  return sheet;
}

function listBooks() {
  const sheet = getSheet();
  const values = sheet.getDataRange().getDisplayValues();
  if (values.length <= 1) {
    return [];
  }

  return values.slice(1)
    .filter((row) => row.join("").trim() !== "")
    .map(([name, author, dateRead]) => ({
      name: String(name || "").trim(),
      author: String(author || "").trim(),
      dateRead: String(dateRead || "").trim(),
    }));
}

function createBook(params) {
  const name = String(params.name || "").trim();
  const author = String(params.author || "").trim();
  const dateRead = String(params.dateRead || "").trim();

  if (!name || !author) {
    return { ok: false, error: "Name and Author are required." };
  }

  getSheet().appendRow([name, author, dateRead]);
  return { ok: true };
}

function json(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  try {
    const action = e?.parameter?.action || "list";
    if (action === "create") {
      return json(createBook(e.parameter || {}));
    }
    return json(listBooks());
  } catch (error) {
    return json({
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
