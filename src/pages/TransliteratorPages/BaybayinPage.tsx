import { useEffect } from "react";
import TransliteratorWithDialog from "../../components/TransliteratorWithDialog/TransliteratorWithDialog.tsx";
import { useAlphabet } from "../../contexts/AlphabetContext";

export default function BaybayinPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Baybayin");
  }, [setCurrentAlphabet]);

  return (
    <>
      <h1>Baybayin With Dialog</h1>
      <TransliteratorWithDialog title="Baybayin" />
    </>
  );
}
