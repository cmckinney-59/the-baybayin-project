import { useEffect } from "react";
import Transliterator3 from "../../components/Transliterator3/Transliterator3";
import { useAlphabet } from "../../contexts/AlphabetContext";

export default function BaybayinPage() {
  const { setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    setCurrentAlphabet("Baybayin");
  }, [setCurrentAlphabet]);

  return (
    <>
      <Transliterator3 title="Baybayin" />
    </>
  );
}
