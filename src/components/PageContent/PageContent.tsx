import type { JSX } from "react";
import "./PageContent.css";

import Transliterator from "../Transliterator/Transliterator.tsx";
import Transliterator2 from "../Transliterator2/Transliterator2.tsx";
// import Description from "../Description/Description.tsx";
import { PAGES } from "../../pages.tsx";
import TransliteratorLite from "../TransliteratorLite/TransliteratorLite.tsx";

interface PageContentProps {
  selectedAlphabet: string;
  currentPage: string;
}

export default function PageContent({
  selectedAlphabet,
  currentPage,
}: PageContentProps): JSX.Element {
  const pageData = PAGES[selectedAlphabet] || {};
  const { title } = pageData;

  return (
    <main className="page-content">
      {title && title !== "Home" && <Transliterator title={title} />}
      {currentPage === "BaybayinLite" ? (
        <TransliteratorLite title="Baybayin Lite" />
      ) : (
        <Transliterator2 title={title} />
      )}
      {/* <Description image={image} whatIs={whatIs} description={description} /> */}
    </main>
  );
}
