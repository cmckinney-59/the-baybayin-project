import type { JSX } from "react";

import Transliterator from "../Transliterator/Transliterator.tsx";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";

interface PageContentProps {
  title: string;
}

export default function PageContent({ title }: PageContentProps): JSX.Element {
  return (
    <WordsDictionaryProvider>
      <main className="page-content">
        {title && title !== "Home" && (
          <Transliterator title={title} />
        )}
      </main>
    </WordsDictionaryProvider>
  );
}
