import BaybayinHowToRead from "../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinHowToRead";
import BaybayinHowToUse from "../../components/HowToRead/BaybayinHTR/BaybayinHowToUse/BaybayinHowToUse";
import WhatIsBaybayin from "../../components/HowToRead/BaybayinHTR/WhatIsBaybayin/WhatIsBaybayin";
import TransliteratorLite from "../../components/TransliteratorLite/TransliteratorLite";

export default function BaybayinPageLite() {
  return (
    <>
      <p style={{ marginTop: "-10px" }}>"Kung anong bigkas, siyang baybay."</p>
      <p style={{ marginTop: "-10px" }}>
        Enter text as it sounds for best results.
      </p>
      <TransliteratorLite title="Baybayin" />
      <BaybayinHowToUse />
      <WhatIsBaybayin />
      <BaybayinHowToRead />
    </>
  );
}
