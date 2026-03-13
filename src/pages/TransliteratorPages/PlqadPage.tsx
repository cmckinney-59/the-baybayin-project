import { useEffect } from "react";

import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";
import { useAlphabet } from "../../contexts/AlphabetContext.tsx";
import HowToUse from "../../components/HowToRead/HowToUse.tsx";
import BackButton from "../../components/Buttons/BackButton.tsx";
import Transliterator from "../../components/Transliterator/Transliterator";

export default function PlqadPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Plqad");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <BackButton />
      <Transliterator title="Plqad" />
      <HowToUse />
    </WordsDictionaryProvider>
  );
}
