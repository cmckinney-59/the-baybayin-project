import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";
import HowToUse from "../../components/HowToRead/HowToUse.tsx";
import { useEffect } from "react";
import { useAlphabet } from "../../contexts/AlphabetContext.tsx";
import BackButton from "../../components/Buttons/BackButton.tsx";
import TransliteratorPlqad from "../../components/TransliteratorPlqad/TransliteratorPlqad.tsx";

export default function PlqadPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Plqad");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <BackButton />
      <TransliteratorPlqad title="Plqad" />
      <HowToUse />
    </WordsDictionaryProvider>
  );
}
