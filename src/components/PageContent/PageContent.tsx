import type { JSX } from "react";

import TransliteratorWithDialog from "../TransliteratorWithDialog/TransliteratorWithDialog.tsx";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";

interface PageContentProps {
  title: string;
}

export default function PageContent({ title }: PageContentProps): JSX.Element {
  return (
    <WordsDictionaryProvider>
      <main className="page-content">
        {title && title !== "Home" && (
          <TransliteratorWithDialog title={title} />
        )}
      </main>
    </WordsDictionaryProvider>
  );
}
