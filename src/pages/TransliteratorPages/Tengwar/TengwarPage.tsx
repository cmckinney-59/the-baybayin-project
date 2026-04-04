import { useEffect } from "react";

import { useAlphabet } from "../../../contexts/AlphabetContext.tsx";
import HowToUse from "../../../components/HowToRead/HowToUse.tsx";
import WhatIsTengwar from "../../../components/HowToRead/TengwarHTR/WhatIsTengwar/WhatIsTengwar.tsx";

export default function TengwarPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Tengwar");
  }, [setCurrentAlphabet]);

  return (
    <>
      <HowToUse />
      <WhatIsTengwar />
    </>
  );
}
