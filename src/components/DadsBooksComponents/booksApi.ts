import { formatDateRead, type Book } from "./booksData";

const SHEET_URL = import.meta.env.VITE_DADS_BOOKS_SHEET_URL as
  | string
  | undefined;

function getSheetUrl(): string {
  if (!SHEET_URL?.trim()) {
    throw new Error(
      "Missing VITE_DADS_BOOKS_SHEET_URL. Add your Apps Script web app URL to .env.local.",
    );
  }
  return SHEET_URL.trim().replace(/\/$/, "");
}

function normalizeBook(raw: unknown): Book | null {
  if (!raw || typeof raw !== "object") {
    return null;
  }

  const record = raw as Record<string, unknown>;
  const name = String(record.name ?? "").trim();
  const author = String(record.author ?? "").trim();
  if (!name && !author) {
    return null;
  }

  return {
    name,
    author,
    dateRead: formatDateRead(
      (record.dateRead ?? record.date_read ?? "") as string | number,
    ),
  };
}

export async function fetchBooks(): Promise<Book[]> {
  const response = await fetch(getSheetUrl(), {
    method: "GET",
    redirect: "follow",
  });

  if (!response.ok) {
    throw new Error(`Failed to load books (${response.status}).`);
  }

  const payload: unknown = await response.json();
  const rows = Array.isArray(payload)
    ? payload
    : Array.isArray((payload as { books?: unknown }).books)
      ? (payload as { books: unknown[] }).books
      : null;

  if (!rows) {
    throw new Error("Unexpected response from Google Sheet.");
  }

  return rows
    .map(normalizeBook)
    .filter((book): book is Book => book !== null);
}

export async function addBook(book: Book): Promise<void> {
  const url = new URL(getSheetUrl());
  url.searchParams.set("action", "create");
  url.searchParams.set("name", book.name);
  url.searchParams.set("author", book.author);
  url.searchParams.set("dateRead", book.dateRead);

  const response = await fetch(url.toString(), {
    method: "GET",
    redirect: "follow",
  });

  if (!response.ok) {
    throw new Error(`Failed to add book (${response.status}).`);
  }

  const payload: unknown = await response.json();
  if (
    payload &&
    typeof payload === "object" &&
    "ok" in payload &&
    (payload as { ok: unknown }).ok === false
  ) {
    throw new Error("Google Sheet rejected the book entry.");
  }
}

export function hasBooksSheetConfigured(): boolean {
  return Boolean(SHEET_URL?.trim());
}
