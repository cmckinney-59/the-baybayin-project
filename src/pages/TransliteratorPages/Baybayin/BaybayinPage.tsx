import { useEffect } from "react";

import { useAlphabet } from "../../../contexts/AlphabetContext.tsx";
import BaybayinHowToRead from "../../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinHowToRead.tsx";
import WhatIsBaybayin from "../../../components/HowToRead/BaybayinHTR/WhatIsBaybayin/WhatIsBaybayin.tsx";
import HowToUse from "../../../components/HowToRead/HowToUse.tsx";
import BaybayinBorrowedWordsCollapsible from "../../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinBorrowedWordsCollapsible.tsx";

export default function BaybayinPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Baybayin");
  }, [setCurrentAlphabet]);

  return (
    <>
      <HowToUse />
      <WhatIsBaybayin />
      <BaybayinHowToRead />
      <BaybayinBorrowedWordsCollapsible />
    </>
  );
}
