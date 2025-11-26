import { useEffect } from "react";
import TransliteratorLiteTengwar from "../../components/TransliteratorLiteTengwar/TransliteratorLiteTengwar";
import { useAlphabet } from "../../contexts/AlphabetContext";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";

export default function TengwarPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Tengwar");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <TransliteratorLiteTengwar title="Tengwar" />
    </WordsDictionaryProvider>
  );
}

