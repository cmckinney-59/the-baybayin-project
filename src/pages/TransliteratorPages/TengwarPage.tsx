import { useEffect } from "react";
import TransliteratorLiteTengwar from "../../components/TransliteratorLiteTengwar/TransliteratorLiteTengwar";
import { useAlphabet } from "../../contexts/AlphabetContext";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";
import BackButton from "../../components/Buttons/BackButton.tsx";

export default function TengwarPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Tengwar");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <BackButton />
      <TransliteratorLiteTengwar title="Tengwar" />
    </WordsDictionaryProvider>
  );
}
