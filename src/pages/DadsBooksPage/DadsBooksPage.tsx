import { useCallback, useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./DadsBooksPage.module.css";
import EnterBookForm from "../../components/DadsBooksComponents/EnterBookForm/EnterBookForm";
import BookList from "../../components/DadsBooksComponents/BookList/BookList";
import BooksAnalytics from "../../components/DadsBooksComponents/BooksAnalytics/BooksAnalytics";
import BooksTabs from "../../components/DadsBooksComponents/BooksTabs/BooksTabs";
import {
  addBook,
  fetchBooks,
  hasBooksSheetConfigured,
} from "../../components/DadsBooksComponents/booksApi";
import type { Book } from "../../components/DadsBooksComponents/booksData";

export default function DadsBooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadBooks = useCallback(async () => {
    if (!hasBooksSheetConfigured()) {
      setBooks([]);
      setError(
        "Add your Google Apps Script URL to .env.local as VITE_DADS_BOOKS_SHEET_URL.",
      );
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const nextBooks = await fetchBooks();
      setBooks(nextBooks);
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Failed to load books from Google Sheet.",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadBooks();
  }, [loadBooks]);

  const handleAddBook = async (book: Book) => {
    await addBook(book);
    await loadBooks();
  };

  return (
    <article className={styles.page}>
      <PageTitle title="Dads Books" />
      {error && <p className={styles.statusError}>{error}</p>}
      {isLoading && <p className={styles.status}>Loading books...</p>}
      <BooksTabs
        tabs={[
          {
            id: "enter",
            label: "Enter Book",
            content: <EnterBookForm onAddBook={handleAddBook} />,
          },
          {
            id: "list",
            label: "Book List",
            content: <BookList books={books} isLoading={isLoading} />,
          },
          {
            id: "analytics",
            label: "Analytics",
            content: <BooksAnalytics books={books} isLoading={isLoading} />,
          },
        ]}
      />
    </article>
  );
}
