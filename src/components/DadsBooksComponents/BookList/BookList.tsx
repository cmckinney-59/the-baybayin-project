import Table from "../../Table/Table";
import type { Book } from "../booksData";

const HEADERS = ["Name", "Author", "Date Read"];

type BookListProps = {
  books: Book[];
  isLoading?: boolean;
};

export default function BookList({ books, isLoading = false }: BookListProps) {
  if (isLoading) {
    return <p>Loading books...</p>;
  }

  if (books.length === 0) {
    return <p>No books yet.</p>;
  }

  return (
    <Table
      data={books}
      headers={HEADERS}
      rows={books.map((book) => [
        book.name,
        book.author,
        book.dateRead || "—",
      ])}
    />
  );
}
