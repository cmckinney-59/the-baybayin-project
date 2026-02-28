import { useEffect } from "react";
import TransliteratorTengwar from "../../components/TransliteratorTengwar/TransliteratorTengwar";
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
      <TransliteratorTengwar title="Tengwar" />
    </WordsDictionaryProvider>
  );
}
