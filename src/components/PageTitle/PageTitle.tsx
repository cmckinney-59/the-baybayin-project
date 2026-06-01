import styles from "./PageTitle.module.css";

export default function PageTitle({ title }: { title: string }) {
  return <h1 className={styles["page-title"]}>{title}</h1>;
}
