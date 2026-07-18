import { useState } from "react";
import Table from "../../Table/Table";
import type { Book } from "../booksData";
import styles from "./BookList.module.css";

const HEADERS = ["Name", "Author", "Date Read"];

type BookListProps = {
  books: Book[];
  isLoading?: boolean;
};

export default function BookList({ books, isLoading = false }: BookListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return <p>Loading books...</p>;
  }

  if (books.length === 0) {
    return <p>No books yet.</p>;
  }

  const query = searchTerm.trim().toLowerCase();
  const filteredBooks = books.filter((book) => {
    if (!query) return true;

    // Exact consecutive substring match only (e.g. "mat" matches "Mathematics").
    return [book.name, book.author, book.dateRead].some((value) =>
      value.toLowerCase().includes(query),
    );
  });

  return (
    <div className={styles.bookList}>
      <label className={styles.searchLabel} htmlFor="book-search">
        Search books
      </label>
      <input
        id="book-search"
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className={styles.searchInput}
        placeholder="Search by name, author, or date"
      />

      {filteredBooks.length > 0 ? (
        <Table
          data={filteredBooks}
          headers={HEADERS}
          rows={filteredBooks.map((book) => [
            book.name,
            book.author,
            book.dateRead || "—",
          ])}
        />
      ) : (
        <p className={styles.emptyMessage}>
          No books match &ldquo;{searchTerm.trim()}&rdquo;.
        </p>
      )}
    </div>
  );
}
