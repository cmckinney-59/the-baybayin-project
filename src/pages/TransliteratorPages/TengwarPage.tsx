import { useEffect } from "react";
import TransliteratorLiteTengwar from "../../components/TransliteratorLiteTengwar/TransliteratorLiteTengwar";
import { useAlphabet } from "../../contexts/AlphabetContext";

export default function TengwarPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Tengwar");
  }, [setCurrentAlphabet]);

  return (
    <>
      <TransliteratorLiteTengwar title="Tengwar" />
    </>
  );
}

