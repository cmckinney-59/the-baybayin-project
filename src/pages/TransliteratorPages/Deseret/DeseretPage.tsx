import { useEffect } from "react";

import { useAlphabet } from "../../../contexts/AlphabetContext.tsx";
import HowToUse from "../../../components/HowToRead/HowToUse.tsx";
import WhatIsDeseret from "../../../components/HowToRead/DeseretHTR/WhatIsDeseret/WhatIsDeseret.tsx";

export default function DeseretPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Deseret");
  }, [setCurrentAlphabet]);

  return (
    <>
      <HowToUse />
      <WhatIsDeseret />
    </>
  );
}
