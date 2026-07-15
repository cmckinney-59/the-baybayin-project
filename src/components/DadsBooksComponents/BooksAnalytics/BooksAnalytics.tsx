import { isBookRead, type Book } from "../booksData";
import styles from "./BooksAnalytics.module.css";

type BooksAnalyticsProps = {
  books: Book[];
  isLoading?: boolean;
};

export default function BooksAnalytics({
  books,
  isLoading = false,
}: BooksAnalyticsProps) {
  if (isLoading) {
    return <p>Loading analytics...</p>;
  }

  const totalBooks = books.length;
  const booksRead = books.filter(isBookRead).length;

  return (
    <div className={styles.analytics}>
      <div className={styles.stat}>
        <span className={styles.value}>{totalBooks}</span>
        <span className={styles.label}>Total books</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.value}>{booksRead}</span>
        <span className={styles.label}>Books read</span>
      </div>
    </div>
  );
}
