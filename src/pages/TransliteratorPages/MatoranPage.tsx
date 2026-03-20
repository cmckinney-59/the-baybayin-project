import { useEffect } from "react";

import { useAlphabet } from "../../contexts/AlphabetContext.tsx";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";
import Transliterator from "../../components/Transliterator/Transliterator.tsx";
import BackButton from "../../components/Buttons/BackButton.tsx";
import HowToUse from "../../components/HowToRead/HowToUse.tsx";

export default function MatoranPage() {
  const { currentAlphabet, setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Matoran");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <BackButton />
      <Transliterator currentAlphabet={currentAlphabet} />
      <HowToUse />
    </WordsDictionaryProvider>
  );
}
