import { useEffect } from "react";
import TransliteratorLiteAurebesh from "../../components/TransliteratorLiteAurebesh/TransliteratorLiteAurebesh";
import { useAlphabet } from "../../contexts/AlphabetContext";
import AurebeshHowToRead from "../../components/HowToRead/AurebeshHTR/AurebeshHowToRead/AurebeshHowToRead";
import WhatIsAurebesh from "../../components/HowToRead/AurebeshHTR/WhatIsAurebesh/WhatIsAurebesh";
import AurebeshHowToUse from "../../components/HowToRead/AurebeshHTR/AurebeshHowToUse/AurebeshHowToUse";

export default function AurebeshPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Aurebesh");
  }, [setCurrentAlphabet]);

  return (
    <>
      <TransliteratorLiteAurebesh title="Aurebesh" />
      <AurebeshHowToUse />
      <WhatIsAurebesh />
      <AurebeshHowToRead />
    </>
  );
}
