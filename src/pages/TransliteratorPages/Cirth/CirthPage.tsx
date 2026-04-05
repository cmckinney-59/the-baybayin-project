import { useEffect } from "react";

import { useAlphabet } from "../../../contexts/AlphabetContext.tsx";
import HowToUse from "../../../components/HowToRead/HowToUse.tsx";

export default function CirthPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Cirth");
  }, [setCurrentAlphabet]);

  return <HowToUse />;
}
