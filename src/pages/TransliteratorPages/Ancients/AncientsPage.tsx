import { useEffect } from "react";

import { useAlphabet } from "../../../contexts/AlphabetContext.tsx";
import HowToUse from "../../../components/HowToRead/HowToUse.tsx";

export default function AncientsPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Ancients");
  }, [setCurrentAlphabet]);

  return <HowToUse />;
}
