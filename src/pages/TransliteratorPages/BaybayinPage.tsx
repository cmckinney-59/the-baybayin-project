import { useEffect } from "react";
import TransliteratorWithDialog from "../../components/TransliteratorWithDialog/TransliteratorWithDialog.tsx";
import { useAlphabet } from "../../contexts/AlphabetContext";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";
import BaybayinHowToRead from "../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinHowToRead";
import WhatIsBaybayin from "../../components/HowToRead/BaybayinHTR/WhatIsBaybayin/WhatIsBaybayin";
import HowToUse from "../../components/HowToRead/HowToUse";
import OtherAlphabets from "../../components/HowToRead/OtherAlphabets";
import BaybayinBorrowedWordsCollapsible from "../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinBorrowedWordsCollapsible.tsx";

export default function BaybayinPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Baybayin");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <p className="quote">"Kung anong bigkas, siyang baybay."</p>
      <p className="quote">Enter text as it sounds for best results.</p>
      <TransliteratorWithDialog title="Baybayin" />
      <HowToUse />
      <WhatIsBaybayin />
      <BaybayinHowToRead />
      <BaybayinBorrowedWordsCollapsible />
      <OtherAlphabets />
    </WordsDictionaryProvider>
  );
}
