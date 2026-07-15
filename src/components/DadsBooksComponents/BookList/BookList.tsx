import Table from "../../Table/Table";

const DUMMY_BOOKS = [
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
];

const HEADERS = ["Name", "Author", "Date Read"];

export default function BookList() {
  return (
    <Table
      data={DUMMY_BOOKS}
      headers={HEADERS}
      rows={DUMMY_BOOKS.map((book) => [book.name, book.author, book.dateRead])}
    />
  );
}
