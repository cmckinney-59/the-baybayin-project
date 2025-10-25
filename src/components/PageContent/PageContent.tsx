import type { JSX } from "react";

import TransliteratorLite from "../TransliteratorLite/TransliteratorLite.tsx";
import Transliterator3 from "../Transliterator3/Transliterator3.tsx";

interface PageContentProps {
  currentPage: string;
  title: string;
}

export default function PageContent({
  currentPage,
  title,
}: PageContentProps): JSX.Element {
  return (
    <main className="page-content">
      {title && title !== "Home" && <Transliterator3 title={title} />}
      {currentPage === "BaybayinLite" ? (
        <TransliteratorLite title="Baybayin Lite" />
      ) : (
        <Transliterator3 title={title} />
      )}
    </main>
  );
}
