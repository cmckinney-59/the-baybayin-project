export type Book = {
  name: string;
  author: string;
  dateRead: string;
};

export const DUMMY_BOOKS: Book[] = [
  {
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    dateRead: "2024-03-12",
  },
  {
    name: "Dune",
    author: "Frank Herbert",
    dateRead: "2024-06-01",
  },
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    dateRead: "2025-01-18",
  },
  {
    name: "1984",
    author: "George Orwell",
    dateRead: "2025-09-22",
  },
  {
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    dateRead: "",
  },
];

export function isBookRead(book: Book): boolean {
  return book.dateRead.trim().length > 0;
}
