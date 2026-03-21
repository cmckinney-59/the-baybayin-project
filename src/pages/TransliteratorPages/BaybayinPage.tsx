import { useEffect } from "react";

import { useAlphabet } from "../../contexts/AlphabetContext";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";
import Transliterator from "../../components/Transliterator/Transliterator.tsx";
import BaybayinHowToRead from "../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinHowToRead";
import WhatIsBaybayin from "../../components/HowToRead/BaybayinHTR/WhatIsBaybayin/WhatIsBaybayin";
import HowToUse from "../../components/HowToRead/HowToUse";
import BaybayinBorrowedWordsCollapsible from "../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinBorrowedWordsCollapsible.tsx";

export default function BaybayinPage() {
  const { currentAlphabet, setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Baybayin");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <Transliterator currentAlphabet={currentAlphabet} />
      <HowToUse />
      <WhatIsBaybayin />
      <BaybayinHowToRead />
      <BaybayinBorrowedWordsCollapsible />
    </WordsDictionaryProvider>
  );
}
