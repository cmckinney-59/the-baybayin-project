import { useEffect } from "react";
import TransliteratorLiteAurebesh from "../../components/TransliteratorLiteAurebesh/TransliteratorLiteAurebesh";
import { useAlphabet } from "../../contexts/AlphabetContext";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";
import AurebeshHowToRead from "../../components/HowToRead/AurebeshHTR/AurebeshHowToRead/AurebeshHowToRead";
import WhatIsAurebesh from "../../components/HowToRead/AurebeshHTR/WhatIsAurebesh/WhatIsAurebesh";
import HowToUse from "../../components/HowToRead/HowToUse";

export default function AurebeshPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Aurebesh");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <TransliteratorLiteAurebesh title="Aurebesh" />
      <HowToUse />
      <WhatIsAurebesh />
      <AurebeshHowToRead />
    </WordsDictionaryProvider>
  );
}
