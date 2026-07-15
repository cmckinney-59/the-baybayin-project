import { useState } from "react";
import styles from "./EnterBookForm.module.css";

export default function EnterBookForm() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [dateRead, setDateRead] = useState("");
  return (
    <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
      <label className={styles.field}>
        <span className={styles.label}>Name</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={styles.input}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Author</span>
        <input
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          className={styles.input}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Date Read</span>
        <input
          type="text"
          value={dateRead}
          onChange={(event) => setDateRead(event.target.value)}
          className={styles.input}
        />
      </label>
    </form>
  );
}
