import { useState } from "react";
import type { FormEvent } from "react";
import type { Book } from "../booksData";
import styles from "./EnterBookForm.module.css";

type EnterBookFormProps = {
  onAddBook: (book: Book) => Promise<void>;
};

export default function EnterBookForm({ onAddBook }: EnterBookFormProps) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [dateRead, setDateRead] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextBook: Book = {
      name: name.trim(),
      author: author.trim(),
      dateRead: dateRead.trim(),
    };

    if (!nextBook.name || !nextBook.author) {
      setError("Name and Author are required.");
      setMessage(null);
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setMessage(null);
    try {
      await onAddBook(nextBook);
      setName("");
      setAuthor("");
      setDateRead("");
      setMessage("Book added to Google Sheet.");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Failed to add book.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span className={styles.label}>Name</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={styles.input}
          disabled={isSubmitting}
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Author</span>
        <input
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          className={styles.input}
          disabled={isSubmitting}
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Date Read</span>
        <input
          type="date"
          value={dateRead}
          onChange={(event) => setDateRead(event.target.value)}
          className={styles.input}
          disabled={isSubmitting}
        />
      </label>

      <button type="submit" className={styles.submit} disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Add book"}
      </button>

      {message && <p className={styles.message}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
}
