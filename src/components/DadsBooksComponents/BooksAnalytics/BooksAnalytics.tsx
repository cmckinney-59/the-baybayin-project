import { DUMMY_BOOKS, isBookRead } from "../booksData";
import styles from "./BooksAnalytics.module.css";

export default function BooksAnalytics() {
  const totalBooks = DUMMY_BOOKS.length;
  const booksRead = DUMMY_BOOKS.filter(isBookRead).length;

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
