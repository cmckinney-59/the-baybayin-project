import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";
import TransliteratorWithDialog from "../../components/TransliteratorWithDialog/TransliteratorWithDialog.tsx";
import HowToUse from "../../components/HowToRead/HowToUse.tsx";
import WhatIsDeseret from "../../components/HowToRead/DeseretHTR/WhatIsDeseret/WhatIsDeseret.tsx";
import DeseretHowToRead from "../../components/HowToRead/DeseretHTR/DeseretHTR/DeserethHowToRead.tsx";
import { useEffect } from "react";
import { useAlphabet } from "../../contexts/AlphabetContext.tsx";
import BackButton from "../../components/Buttons/BackButton.tsx";

export default function DeseretPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Deseret");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <BackButton />
      <TransliteratorWithDialog title="Deseret" />
      <HowToUse />
      <WhatIsDeseret />
      <DeseretHowToRead />
    </WordsDictionaryProvider>
  );
}
