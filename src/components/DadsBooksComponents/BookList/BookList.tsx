import Table from "../../Table/Table";
import { DUMMY_BOOKS } from "../booksData";

const HEADERS = ["Name", "Author", "Date Read"];

export default function BookList() {
  return (
    <Table
      data={DUMMY_BOOKS}
      headers={HEADERS}
      rows={DUMMY_BOOKS.map((book) => [
        book.name,
        book.author,
        book.dateRead || "—",
      ])}
    />
  );
}
