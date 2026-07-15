import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./DadsBooksPage.module.css";
import EnterBookForm from "../../components/DadsBooksComponents/EnterBookForm/EnterBookForm";
import BookList from "../../components/DadsBooksComponents/BookList/BookList";
import BooksTabs from "../../components/DadsBooksComponents/BooksTabs/BooksTabs";

export default function DadsBooksPage() {
  return (
    <article className={styles.page}>
      <PageTitle title="Dads Books" />
      <BooksTabs
        tabs={[
          { id: "enter", label: "Enter Book", content: <EnterBookForm /> },
          { id: "list", label: "Book List", content: <BookList /> },
        ]}
      />
    </article>
  );
}
