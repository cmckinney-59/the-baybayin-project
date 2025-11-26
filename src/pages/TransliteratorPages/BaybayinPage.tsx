import { useEffect } from "react";
import TransliteratorWithDialog from "../../components/TransliteratorWithDialog/TransliteratorWithDialog.tsx";
import { useAlphabet } from "../../contexts/AlphabetContext";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";

export default function BaybayinPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Baybayin");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <h1>With Dialog</h1>
      <TransliteratorWithDialog title="Baybayin" />
    </WordsDictionaryProvider>
  );
}
