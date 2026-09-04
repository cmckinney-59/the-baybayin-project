import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";

export default function WhatIsAurebesh() {
  return (
    <CollapsibleSection title="What Is Aurebesh" defaultExpanded={false}>
      <p>
        Aurebesh is a fictional alphabet used in the Star Wars franchise. The
        characters first appeared in Return of the Jedi, in 1983. At the time
        they were just symbols displayed on a screen and had no meaning. In
        1993, with the approval of Lucasfilm, a table top game creator used
        those symbols and invented new ones mapping them to letters in the Latin
        alphabet. Since then, Aurebesh has been used in many Star Wars related
        products, including books, games, movies and even props throughout
        Disneyland.
      </p>
      <p>
        To explore Aurebesh further, see the "How To Read" and "More Resources"
        sections.
      </p>
    </CollapsibleSection>
  );
}
