import { useEffect } from "react";

import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";
import { useAlphabet } from "../../contexts/AlphabetContext.tsx";
import HowToUse from "../../components/HowToRead/HowToUse.tsx";
import WhatIsDeseret from "../../components/HowToRead/DeseretHTR/WhatIsDeseret/WhatIsDeseret.tsx";
import Transliterator from "../../components/Transliterator/Transliterator";

export default function DeseretPage() {
  const { currentAlphabet, setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Deseret");
  }, [setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <Transliterator currentAlphabet={currentAlphabet} />
      <HowToUse />
      <WhatIsDeseret />
    </WordsDictionaryProvider>
  );
}
