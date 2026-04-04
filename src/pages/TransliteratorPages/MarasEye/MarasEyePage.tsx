import { useEffect } from "react";

import { useAlphabet } from "../../../contexts/AlphabetContext.tsx";
import HowToUse from "../../../components/HowToRead/HowToUse.tsx";

export default function MarasEyePage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("MarasEye");
  }, [setCurrentAlphabet]);

  return <HowToUse />;
}
