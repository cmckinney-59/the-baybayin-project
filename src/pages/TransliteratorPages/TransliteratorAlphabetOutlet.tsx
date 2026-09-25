import { useEffect, useMemo } from "react";
import type { ComponentType } from "react";
import { Navigate, useParams } from "react-router-dom";

import { useAlphabet } from "../../contexts/AlphabetContext";
import AncientsHowToRead from "../../components/HowToRead/AncientsHTR/AncientsHowToRead";
import AncientsMoreResources from "../../components/HowToRead/AncientsHTR/AncientsMoreResources";
import WhatIsAncients from "../../components/HowToRead/AncientsHTR/WhatIsAncients";
import AtlanteanGuide from "../../components/HowToRead/AtlanteanHTR/AtlanteanGuide";
import AurebeshHowToRead from "../../components/HowToRead/AurebeshHTR/AurebeshHowToRead";
import AurebeshResources from "../../components/HowToRead/AurebeshHTR/AurebeshResources";
import WhatIsAurebesh from "../../components/HowToRead/AurebeshHTR/WhatIsAurebesh";
import BaybayinBorrowedWordsCollapsible from "../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinBorrowedWordsCollapsible";
import BaybayinHowToRead from "../../components/HowToRead/BaybayinHTR/BaybayinHowToRead/BaybayinHowToRead";
import BaybayinMoreResources from "../../components/HowToRead/BaybayinHTR/BaybayinMoreResources";
import WhatIsBaybayin from "../../components/HowToRead/BaybayinHTR/WhatIsBaybayin/WhatIsBaybayin";
import BuhidHowToRead from "../../components/HowToRead/BuhidHTR/BuhidHowToRead/BuhidHowToRead";
import BuhidMoreResources from "../../components/HowToRead/BuhidHTR/BuhidMoreResources";
import WhatIsBuhid from "../../components/HowToRead/BuhidHTR/WhatIsBuhid/WhatIsBuhid";
import CirthGuide from "../../components/HowToRead/CirthHTR/CirthGuide";
import DeseretHowToRead from "../../components/HowToRead/Deseret/DeserethHowToRead";
import DeseretMoreResources from "../../components/HowToRead/Deseret/DeseretMoreResources";
import WhatIsDeseret from "../../components/HowToRead/Deseret/DeseretWhatIs";
import GallifreyanGuide from "../../components/HowToRead/GallifreyanHTR/GallifreyanGuide";
import HanunooHowToRead from "../../components/HowToRead/HanunooHTR/HanunooHowToRead/HanunooHowToRead";
import HanunooMoreResources from "../../components/HowToRead/HanunooHTR/HanunooMoreResources";
import WhatIsHanunoo from "../../components/HowToRead/HanunooHTR/WhatIsHanunoo/WhatIsHanunoo";
import MarasEyeGuide from "../../components/HowToRead/MarasEyeHTR/MarasEyeGuide";
import MatoranGuide from "../../components/HowToRead/MatoranHTR/MatoranGuide";
import OghamGuide from "../../components/HowToRead/OghamHTR/OghamGuide";
import PlqadGuide from "../../components/HowToRead/PlqadHTR/PlqadGuide";
import SteelGuide from "../../components/HowToRead/SteelHTR/SteelGuide";
import TagbanwaHowToRead from "../../components/HowToRead/TagbanwaHTR/TagbanwaHowToRead/TagbanwaHowToRead";
import TagbanwaMoreResources from "../../components/HowToRead/TagbanwaHTR/TagbanwaMoreResources";
import WhatIsTagbanwa from "../../components/HowToRead/TagbanwaHTR/WhatIsTagbanwa/WhatIsTagbanwa";
import TengwarHowToAndResources from "../../components/HowToRead/TengwarHTR/TengwarHowToAndResources";
import WhatIsTengwar from "../../components/HowToRead/TengwarHTR/WhatIsTengwar/WhatIsTengwar";
import UnownGuide from "../../components/HowToRead/UnownHTR/UnownGuide";
import HowToUse from "../../components/HowToRead/HowToUse";
import {
  ALPHABETS_DATA,
  alphabetNameToRouteSegment,
} from "../../data/ALPHABETS_DATA";

type AlphabetName = (typeof ALPHABETS_DATA)[number]["name"];

const HOW_TO_EXTRA_BY_ALPHABET: Partial<Record<AlphabetName, ComponentType>> = {
  Ancients: () => (
    <>
      <WhatIsAncients />
      <AncientsHowToRead />
      <AncientsMoreResources />
    </>
  ),
  Aurebesh: () => (
    <>
      <WhatIsAurebesh />
      <AurebeshHowToRead />
      <AurebeshResources />
    </>
  ),
  Atlantean: AtlanteanGuide,
  Baybayin: () => (
    <>
      <WhatIsBaybayin />
      <BaybayinHowToRead />
      <BaybayinBorrowedWordsCollapsible />
      <BaybayinMoreResources />
    </>
  ),
  Buhid: () => (
    <>
      <WhatIsBuhid />
      <BuhidHowToRead />
      <BuhidMoreResources />
    </>
  ),
  Cirth: CirthGuide,
  Deseret: () => (
    <>
      <WhatIsDeseret />
      <DeseretHowToRead />
      <DeseretMoreResources />
    </>
  ),
  Gallifreyan: GallifreyanGuide,
  Hanunoo: () => (
    <>
      <WhatIsHanunoo />
      <HanunooHowToRead />
      <HanunooMoreResources />
    </>
  ),
  MarasEye: MarasEyeGuide,
  Matoran: MatoranGuide,
  Ogham: OghamGuide,
  Plqad: PlqadGuide,
  Steel: SteelGuide,
  Tagbanwa: () => (
    <>
      <WhatIsTagbanwa />
      <TagbanwaHowToRead />
      <TagbanwaMoreResources />
    </>
  ),
  Tengwar: () => (
    <>
      <WhatIsTengwar />
      <TengwarHowToAndResources />
    </>
  ),
  Unown: UnownGuide,
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
