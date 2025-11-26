import type { JSX } from "react";

import TransliteratorLite from "../TransliteratorLite/TransliteratorLite.tsx";
import TransliteratorWithDialog from "../TransliteratorWithDialog/TransliteratorWithDialog.tsx";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";

interface PageContentProps {
  currentPage: string;
  title: string;
}

export default function PageContent({
  currentPage,
  title,
}: PageContentProps): JSX.Element {
  return (
    <WordsDictionaryProvider>
      <main className="page-content">
        {title && title !== "Home" && (
          <TransliteratorWithDialog title={title} />
        )}
        {currentPage === "BaybayinLite" ? (
          <TransliteratorLite title="Baybayin Lite" />
        ) : (
          <TransliteratorWithDialog title={title} />
        )}
      </main>
    </WordsDictionaryProvider>
  );
}
