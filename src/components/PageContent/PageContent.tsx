import type { JSX } from "react";
import "./PageContent.css";

import Transliterator from "../Transliterator/Transliterator.tsx";
import Transliterator2 from "../Transliterator2/Transliterator2.tsx";
import TransliteratorLite from "../TransliteratorLite/TransliteratorLite.tsx";

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
      {title && title !== "Home" && <Transliterator title={title} />}
      {currentPage === "BaybayinLite" ? (
        <TransliteratorLite title="Baybayin Lite" />
      ) : (
        <Transliterator2 title={title} />
      )}
    </main>
  );
}
