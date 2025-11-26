import BaybayinHowToRead from "../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinHowToRead";
import WhatIsBaybayin from "../../components/HowToRead/BaybayinHTR/WhatIsBaybayin/WhatIsBaybayin";
import TransliteratorLite from "../../components/TransliteratorLite/TransliteratorLite";
import HowToUse from "../../components/HowToRead/HowToUse";
import OtherAlphabets from "../../components/HowToRead/OtherAlphabets";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";

export default function BaybayinPageLite() {
  return (
    <WordsDictionaryProvider>
      <p className="quote">"Kung anong bigkas, siyang baybay."</p>
      <p className="quote">Enter text as it sounds for best results.</p>
      <TransliteratorLite title="Baybayin" />
      <HowToUse />
      <WhatIsBaybayin />
      <BaybayinHowToRead />
      <OtherAlphabets />
    </WordsDictionaryProvider>
  );
}
