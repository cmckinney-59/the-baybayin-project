import { useState } from "react";
import type { ChangeEvent } from "react";

import "./ContentContainer.css";
import PageContent from "../PageContent/PageContent.tsx";
import AlphabetPicker from "../AlphabetPicker/AlphabetPicker.tsx";

interface ContentContainerProps {
  isTransliteratorPage?: boolean;
  currentPage?: string;
}

export default function ContentContainer({
  isTransliteratorPage = false,
  currentPage = "Home",
}: ContentContainerProps) {
  const [selectedAlphabet, setSelectedAlphabet] = useState<string>("");

  function handleClick(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedAlphabet(event.target.value);
  }

  return (
    <section>
      <div>
        {isTransliteratorPage && (
          <AlphabetPicker
            selectedAlphabet={selectedAlphabet}
            handleClick={handleClick}
          />
        )}
      </div>
      <div className="page-content">
        <PageContent
          selectedAlphabet={selectedAlphabet}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}
