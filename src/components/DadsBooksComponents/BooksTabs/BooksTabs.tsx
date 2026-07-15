import { useState } from "react";
import type { ReactNode } from "react";
import styles from "./BooksTabs.module.css";

type TabId = "enter" | "list";

type Tab = {
  id: TabId;
  label: string;
  content: ReactNode;
};

type BooksTabsProps = {
  tabs: Tab[];
  defaultTab?: TabId;
};

export default function BooksTabs({
  tabs,
  defaultTab = "enter",
}: BooksTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>(defaultTab);
  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={styles.container}>
      <div className={styles.tabList} role="tablist" aria-label="Dads Books">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`dads-books-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`dads-books-panel-${tab.id}`}
              className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        className={styles.panel}
        role="tabpanel"
        id={`dads-books-panel-${activeTab}`}
        aria-labelledby={`dads-books-tab-${activeTab}`}
      >
        {activeContent}
      </div>
    </div>
  );
}
