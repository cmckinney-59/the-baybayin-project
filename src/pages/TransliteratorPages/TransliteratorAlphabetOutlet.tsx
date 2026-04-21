import { useEffect, useMemo } from "react";
import type { ComponentType } from "react";
import { Navigate, useParams } from "react-router-dom";

import { useAlphabet } from "../../contexts/AlphabetContext";
import AurebeshHowToRead from "../../components/HowToRead/AurebeshHTR/AurebeshHowToRead";
import WhatIsAurebesh from "../../components/HowToRead/AurebeshHTR/WhatIsAurebesh";
import BaybayinBorrowedWordsCollapsible from "../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinBorrowedWordsCollapsible";
import BaybayinHowToRead from "../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinHowToRead";
import WhatIsBaybayin from "../../components/HowToRead/BaybayinHTR/WhatIsBaybayin/WhatIsBaybayin";
import WhatIsDeseret from "../../components/HowToRead/DeseretHTR/WhatIsDeseret/WhatIsDeseret";
import WhatIsTengwar from "../../components/HowToRead/TengwarHTR/WhatIsTengwar/WhatIsTengwar";
import HowToUse from "../../components/HowToRead/HowToUse";
import {
  ALPHABETS_DATA,
  alphabetNameToRouteSegment,
} from "../../data/ALPHABETS_DATA";
import DeseretHowToRead from "../../components/HowToRead/DeseretHTR/DeseretHTR/DeserethHowToRead";

type AlphabetName = (typeof ALPHABETS_DATA)[number]["name"];

const HOW_TO_EXTRA_BY_ALPHABET: Partial<Record<AlphabetName, ComponentType>> = {
  Aurebesh: () => (
    <>
      <WhatIsAurebesh />
      <AurebeshHowToRead />
    </>
  ),
  Baybayin: () => (
    <>
      <WhatIsBaybayin />
      <BaybayinHowToRead />
      <BaybayinBorrowedWordsCollapsible />
    </>
  ),
  Deseret: () => (
    <>
      <WhatIsDeseret />
      <DeseretHowToRead />
    </>
  ),
  Tengwar: WhatIsTengwar,
};

export default function TransliteratorAlphabetOutlet() {
  const { alphabetSegment } = useParams<{ alphabetSegment: string }>();
  const { setCurrentAlphabet } = useAlphabet();

  const entry = useMemo(() => {
    if (!alphabetSegment) return undefined;
    return ALPHABETS_DATA.find(
      (a) => alphabetNameToRouteSegment(a.name) === alphabetSegment,
    );
  }, [alphabetSegment]);

  useEffect(() => {
    if (entry) setCurrentAlphabet(entry.name);
  }, [entry, setCurrentAlphabet]);

  if (!entry) {
    return <Navigate to="/transliterator" replace />;
  }

  const Extra = HOW_TO_EXTRA_BY_ALPHABET[entry.name];

  return (
    <>
      <HowToUse />
      {Extra ? <Extra /> : null}
    </>
  );
}
