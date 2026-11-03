import styles from "./NavCard.module.css";

type NavCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  featured?: boolean;
};

export default function NavCard({
  title,
  description,
  icon,
  onClick,
  featured = false,
}: NavCardProps) {
  return (
    <button
      type="button"
      className={`${styles.navCard}${featured ? ` ${styles.featured}` : ""}`}
      onClick={onClick}
    >
      <div className={styles.navCardIcon} aria-hidden="true">
        {icon}
      </div>
      <h2 className={styles.navCardTitle}>{title}</h2>
      <p className={styles.navCardDescription}>{description}</p>
    </button>
  );
}
