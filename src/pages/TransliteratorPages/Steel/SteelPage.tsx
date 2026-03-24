import { useEffect } from "react";

import { useAlphabet } from "../../../contexts/AlphabetContext.tsx";
import { WordsDictionaryProvider } from "../../../contexts/WordsDictionaryContext.tsx";
import Transliterator from "../../../components/Transliterator/Transliterator.tsx";
import HowToUse from "../../../components/HowToRead/HowToUse.tsx";

export default function SteelPage() {
  const { currentAlphabet, setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Steel");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <Transliterator currentAlphabet={currentAlphabet} />
      <HowToUse />
    </WordsDictionaryProvider>
  );
}
