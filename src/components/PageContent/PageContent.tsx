import type { JSX } from "react";

import Transliterator from "../Transliterator/Transliterator.tsx";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";

interface PageContentProps {
  currentAlphabet: string;
}

export default function PageContent({
  currentAlphabet,
}: PageContentProps): JSX.Element {
  return (
    <WordsDictionaryProvider>
      <main className="page-content">
        {currentAlphabet && currentAlphabet !== "Home" && (
          <Transliterator currentAlphabet={currentAlphabet} />
        )}
      </main>
    </WordsDictionaryProvider>
  );
}
