import { useEffect } from "react";

import { useAlphabet } from "../../../contexts/AlphabetContext.tsx";
import { WordsDictionaryProvider } from "../../../contexts/WordsDictionaryContext.tsx";
import Transliterator from "../../../components/Transliterator/Transliterator.tsx";
import HowToUse from "../../../components/HowToRead/HowToUse.tsx";
import WhatIsTengwar from "../../../components/HowToRead/TengwarHTR/WhatIsTengwar/WhatIsTengwar.tsx";

export default function TengwarPage() {
  const { currentAlphabet, setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Tengwar");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <Transliterator currentAlphabet={currentAlphabet} />
      <HowToUse />
      <WhatIsTengwar />
    </WordsDictionaryProvider>
  );
}
