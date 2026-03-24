import { useEffect } from "react";

import { WordsDictionaryProvider } from "../../../contexts/WordsDictionaryContext.tsx";
import { useAlphabet } from "../../../contexts/AlphabetContext.tsx";
import HowToUse from "../../../components/HowToRead/HowToUse.tsx";
import Transliterator from "../../../components/Transliterator/Transliterator.tsx";

export default function PlqadPage() {
  const { currentAlphabet, setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Plqad");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <Transliterator currentAlphabet={currentAlphabet} />
      <HowToUse />
    </WordsDictionaryProvider>
  );
}
