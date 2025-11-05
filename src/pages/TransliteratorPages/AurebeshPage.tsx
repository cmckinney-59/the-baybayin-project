import { useEffect } from "react";
import TransliteratorLiteAurebesh from "../../components/TransliteratorLiteAurebesh/TransliteratorLiteAurebesh";
import { useAlphabet } from "../../contexts/AlphabetContext";

export default function AurebeshPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Aurebesh");
  }, [setCurrentAlphabet]);

  return (
    <>
      <TransliteratorLiteAurebesh title="Aurebesh" />
    </>
  );
}
