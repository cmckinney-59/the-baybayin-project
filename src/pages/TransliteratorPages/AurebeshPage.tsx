import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import TransliteratorLiteAurebesh from "../../components/TransliteratorLiteAurebesh/TransliteratorLiteAurebesh";
import { useAlphabet } from "../../contexts/AlphabetContext";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";
import AurebeshHowToRead from "../../components/HowToRead/AurebeshHTR/AurebeshHowToRead/AurebeshHowToRead";
import WhatIsAurebesh from "../../components/HowToRead/AurebeshHTR/WhatIsAurebesh/WhatIsAurebesh";
import HowToUse from "../../components/HowToRead/HowToUse";

export default function AurebeshPage() {
  const { setCurrentAlphabet } = useAlphabet();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentAlphabet("Aurebesh");
  }, [setCurrentAlphabet]);

  const handleBackClick = () => {
    navigate("/transliterator/baybayin");
  };

  return (
    <WordsDictionaryProvider>
      <button className="back-button" onClick={handleBackClick}>
        <AiOutlineArrowLeft /> Back to Baybayin
      </button>
      <TransliteratorLiteAurebesh title="Aurebesh" />
      <HowToUse />
      <WhatIsAurebesh />
      <AurebeshHowToRead />
    </WordsDictionaryProvider>
  );
}
