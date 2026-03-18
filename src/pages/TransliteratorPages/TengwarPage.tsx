import { useEffect } from "react";

import { useAlphabet } from "../../contexts/AlphabetContext";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";
import Transliterator from "../../components/Transliterator/Transliterator";
import BackButton from "../../components/Buttons/BackButton.tsx";
import HowToUse from "../../components/HowToRead/HowToUse.tsx";

export default function TengwarPage() {
  const { currentAlphabet, setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Tengwar");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <BackButton />
      <Transliterator currentAlphabet={currentAlphabet} />
      <HowToUse />
    </WordsDictionaryProvider>
  );
}
