import CollapsibleSection from "../CollapsibleSection/CollapsibleSection";
import { useAlphabet } from "../../contexts/AlphabetContext";
import { getFontTableRows } from "../../data/FONTS_TABLE_DATA";
import FontsTable from "./FontsTable";

export default function FontsSection() {
  const { currentAlphabet } = useAlphabet();
  const rows = getFontTableRows(currentAlphabet);

  if (!currentAlphabet || rows.length === 0) {
    return null;
  }

  return (
    <CollapsibleSection title="Fonts" defaultExpanded={false}>
      <p>
        {currentAlphabet === "Gallifreyan" ? (
          <>
            The transliterator on this page uses WS Simple Gallifreyan. A copy
            for Word or Excel is on Melanie J. Cook&apos;s{" "}
            <a
              className="link"
              href="https://www.dafont.com/ws-simple-gallifreyan.font"
              target="_blank"
              rel="noopener noreferrer"
            >
              DaFont page
            </a>
            .
          </>
        ) : currentAlphabet === "Atlantean" ? (
          <>
            The transliterator on this page uses the Atlantean font. The file
            is copyright 1999, The Walt Disney Company. A description of the
            letters is on{" "}
            <a
              className="link"
              href="https://omniglot.com/conscripts/atlantean.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Omniglot
            </a>
            .
          </>
        ) : currentAlphabet === "Ancients" ? (
          <>
            The transliterator on this page uses Ancients by Joseph Spicer.
            The font is all rights reserved.
          </>
        ) : currentAlphabet === "Cirth" || currentAlphabet === "Tengwar" ? (
          <>
            The transliterator on this page uses{" "}
            {currentAlphabet === "Cirth" ? "Cirth Erebor" : "Tengwar Quenya"}{" "}
            by Daniel Steven Smith. A copy for Word or Excel is on his{" "}
            <a
              className="link"
              href="https://www.acondia.com/fonts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fantasy Fonts page
            </a>
            .
          </>
        ) : currentAlphabet === "Steel" ? (
          <>
            The transliterator on this page uses the Steel font by Claincy
            (Colin M.). His write-up is on the{" "}
            <a
              className="link"
              href="https://www.17thshard.com/blogs/entry/455-steel-alphabet-font/"
              target="_blank"
              rel="noopener noreferrer"
            >
              17th Shard
            </a>
            .
          </>
        ) : currentAlphabet === "Unown" ? (
          <>The Unown letters show in the transliterator on this page.</>
        ) : currentAlphabet === "Plqad" ? (
          <>
            The transliterator uses the pIqaD font by kaiserzharkhan and
            Klinzhai by PsychoGlyph. A copy of pIqaD is on{" "}
            <a
              className="link"
              href="https://truefonts.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              truefonts
            </a>
            , and Klinzhai&apos;s author pointed readers to the{" "}
            <a
              className="link"
              href="https://www.kli.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Klingon Language Institute
            </a>
            . Klingon pIqaD Mandel can be downloaded below.
          </>
        ) : currentAlphabet === "MarasEye" ? (
          <>
            The transliterator on this page uses Mara&apos;s Eye. A copy for
            Word or Excel is on Neale Davidson&apos;s{" "}
            <a
              className="link"
              href="https://www.pixelsagas.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixel Sagas page
            </a>
            .
          </>
        ) : (
          <>Download and install a font to see this alphabet in Word or Excel.</>
        )}
        {currentAlphabet === "Deseret" ? (
          <>
            {" "}
            The{" "}
            <a
              className="link"
              href="https://www.unicode.org/charts/PDF/U10400.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unicode Deseret chart
            </a>{" "}
            and{" "}
            <a
              className="link"
              href="https://www.unicode.org/versions/Unicode18.0.0/core-spec/chapter-20/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chapter 20 of the Unicode Standard
            </a>{" "}
            describe the characters these fonts use.
          </>
        ) : null}
        {currentAlphabet === "Baybayin" ? (
          <>
            {" "}
            Baybayin Modern, TAAL, Baybayin Doctrina, Baybayin Doctrina Clear,
            and Tawbid Pilipinas link to the designer&apos;s page.
          </>
        ) : null}
        {currentAlphabet === "Aurebesh" ? (
          <>
            {" "}
            Aurebesh and Aurebesh Cantina link to Pixel Sagas. Aurebesh Hand
            links to DaFont.
          </>
        ) : null}
      </p>
      <FontsTable />
    </CollapsibleSection>
  );
}
