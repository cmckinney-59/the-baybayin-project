import styles from "./NavCard.module.css";

type NavCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
};

export default function NavCard({
  title,
  description,
  icon,
  onClick,
}: NavCardProps) {
  return (
    <div className={styles.navCard} onClick={onClick}>
      <div className={styles.navCardIcon}>{icon}</div>
      <h2 className={styles.navCardTitle}>{title}</h2>
      <p className={styles.navCardDescription}>{description}</p>
    </div>
  );
}
