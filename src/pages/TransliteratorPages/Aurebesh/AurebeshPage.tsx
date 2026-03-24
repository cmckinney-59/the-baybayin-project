import { useEffect } from "react";
import Transliterator from "../../../components/Transliterator/Transliterator.tsx";
import { useAlphabet } from "../../../contexts/AlphabetContext.tsx";
import { WordsDictionaryProvider } from "../../../contexts/WordsDictionaryContext.tsx";
import AurebeshHowToRead from "../../../components/HowToRead/AurebeshHTR/AurebeshHowToRead/AurebeshHowToRead";
import WhatIsAurebesh from "../../../components/HowToRead/AurebeshHTR/WhatIsAurebesh/WhatIsAurebesh";
import HowToUse from "../../../components/HowToRead/HowToUse.tsx";

export default function AurebeshPage() {
  const { currentAlphabet, setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Aurebesh");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <Transliterator currentAlphabet={currentAlphabet} />
      <HowToUse />
      <WhatIsAurebesh />
      <AurebeshHowToRead />
    </WordsDictionaryProvider>
  );
}
