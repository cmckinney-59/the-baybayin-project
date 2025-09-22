import "./BaybayinHowToUse.css";
import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";

export default function WhatIsBaybayin() {
  return (
    <CollapsibleSection title="What Is Baybayin" defaultExpanded={false}>
      <p>
        Baybayin is an ancient script used for writing the Tagalog language,
        which is one of the major languages spoken in the Philippines. It is
        also known as Alibata, although the term "Alibata" was coined during the
        early 20th century and is now considered incorrect.
      </p>
      <p>
        Baybayin was primarily used before the arrival of the Spanish colonists
        in the Philippines in the 16th century. The script is written in a way
        that each character represents a syllable rather than a single letter.
        The basic characters in Baybayin are called "kudlit" or diacritical
        marks, which are added to consonant characters to represent different
        vowel sounds.
      </p>
      <p>
        Baybayin was written on various materials such as bamboo, leaves, and
        tree bark. It was commonly used for important documents, correspondence,
        and inscriptions on religious artifacts. However, after the Spanish
        colonization, the use of Baybayin declined and was eventually replaced
        by the Latin alphabet.
      </p>
    </CollapsibleSection>
  );
}
