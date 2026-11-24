import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";

export default function WhatIsTengwar() {
  return (
    <CollapsibleSection title="What Is Tengwar" defaultExpanded={false}>
      <p>
        Tengwar is the Elvish writing system from{" "}
        <em>The Lord of the Rings</em>. Consonants are full letters. Vowels
        are marks written above a letter. Tolkien left no single official mode
        for English. The one used here follows the title-page inscription:
        spell the word as it is written, and place each vowel on the consonant
        that comes after it.
      </p>
    </CollapsibleSection>
  );
}
