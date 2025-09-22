import BaybayinHowToRead from "../../components/HowToRead/BaybayinHTR/BaybayinHowToRead";
import BaybayinHowToUse from "../../components/HowToRead/BaybayinHTR/BaybayinHowToUse";
import WhatIsBaybayin from "../../components/HowToRead/BaybayinHTR/WhatIsBaybayin";
import TransliteratorLite from "../../components/TransliteratorLite/TransliteratorLite";

export default function BaybayinPageLite() {
  return (
    <>
      <TransliteratorLite title="Baybayin" />
      <BaybayinHowToRead />
      <BaybayinHowToUse />
      <WhatIsBaybayin />
    </>
  );
}
