export type Book = {
  name: string;
  author: string;
  dateRead: string;
};

export function isBookRead(book: Book): boolean {
  return book.dateRead.trim().length > 0;
}

export function formatDateRead(value: string | number | Date): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === "number") {
    // Google Sheets may serialize dates as serial numbers or timestamps.
    const asDate = new Date(value);
    if (!Number.isNaN(asDate.getTime()) && value > 10_000) {
      return asDate.toISOString().slice(0, 10);
    }
    return String(value);
  }
  return String(value ?? "").trim();
}
