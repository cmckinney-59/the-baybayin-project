import { useEffect, useMemo } from "react";
import type { ComponentType } from "react";
import { Navigate, useParams } from "react-router-dom";

import { useAlphabet } from "../../contexts/AlphabetContext";
import AurebeshHowToRead from "../../components/HowToRead/AurebeshHTR/AurebeshHowToRead";
import AurebeshResources from "../../components/HowToRead/AurebeshHTR/AurebeshResources";
import WhatIsAurebesh from "../../components/HowToRead/AurebeshHTR/WhatIsAurebesh";
import BaybayinBorrowedWordsCollapsible from "../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinBorrowedWordsCollapsible";
import BaybayinHowToRead from "../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinHowToRead";
import WhatIsBaybayin from "../../components/HowToRead/BaybayinHTR/WhatIsBaybayin/WhatIsBaybayin";
import WhatIsBuhid from "../../components/HowToRead/BuhidHTR/WhatIsBuhid/WhatIsBuhid";
import WhatIsDeseret from "../../components/HowToRead/DeseretHTR/WhatIsDeseret/WhatIsDeseret";
import WhatIsHanunoo from "../../components/HowToRead/HanunooHTR/WhatIsHanunoo/WhatIsHanunoo";
import WhatIsTagbanwa from "../../components/HowToRead/TagbanwaHTR/WhatIsTagbanwa/WhatIsTagbanwa";
import WhatIsTengwar from "../../components/HowToRead/TengwarHTR/WhatIsTengwar/WhatIsTengwar";
import HowToUse from "../../components/HowToRead/HowToUse";
import {
  ALPHABETS_DATA,
  alphabetNameToRouteSegment,
} from "../../data/ALPHABETS_DATA";
import DeseretHowToRead from "../../components/HowToRead/DeseretHTR/DeseretHTR/DeserethHowToRead";
import BuhidHowToRead from "../../components/HowToRead/BuhidHTR/BuhidHowToRead/BuhidHowToRead";
import HanunooHowToRead from "../../components/HowToRead/HanunooHTR/HanunooHowToRead/HanunooHowToRead";
import TagbanwaHowToRead from "../../components/HowToRead/TagbanwaHTR/TagbanwaHowToRead/TagbanwaHowToRead";
import MoreResources from "../../components/MoreResources/MoreResources";

type AlphabetName = (typeof ALPHABETS_DATA)[number]["name"];

const HOW_TO_EXTRA_BY_ALPHABET: Partial<Record<AlphabetName, ComponentType>> = {
  Aurebesh: () => (
    <>
      <WhatIsAurebesh />
      <AurebeshHowToRead />
      <AurebeshResources />
    </>
  ),
  Baybayin: () => (
    <>
      <WhatIsBaybayin />
      <BaybayinHowToRead />
      <BaybayinBorrowedWordsCollapsible />
    </>
  ),
  Buhid: () => (
    <>
      <WhatIsBuhid />
      <BuhidHowToRead />
    </>
  ),
  Deseret: () => (
    <>
      <WhatIsDeseret />
      <DeseretHowToRead />
      <MoreResources />
    </>
  ),
  Hanunoo: () => (
    <>
      <WhatIsHanunoo />
      <HanunooHowToRead />
    </>
  ),
  Tagbanwa: () => (
    <>
      <WhatIsTagbanwa />
      <TagbanwaHowToRead />
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
