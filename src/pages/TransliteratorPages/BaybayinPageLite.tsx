import BaybayinHowToRead from "../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinHowToRead";
import BaybayinHowToUse from "../../components/HowToRead/BaybayinHTR/BaybayinHowToUse/BaybayinHowToUse";
import WhatIsBaybayin from "../../components/HowToRead/BaybayinHTR/WhatIsBaybayin/WhatIsBaybayin";
import TransliteratorLite from "../../components/TransliteratorLite/TransliteratorLite";

export default function BaybayinPageLite() {
  return (
    <>
      <TransliteratorLite title="Baybayin" />
      <BaybayinHowToUse />
      <BaybayinHowToRead />
      <WhatIsBaybayin />
    </>
  );
}
