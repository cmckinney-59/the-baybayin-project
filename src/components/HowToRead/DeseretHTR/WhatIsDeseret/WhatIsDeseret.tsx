import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";

export default function WhatIsDeseret() {
  return (
    <CollapsibleSection title="What Is Deseret" defaultExpanded={false}>
      <p>
        The Deseret Alphabet was commisioned by Brigham Young to be created by
        The University of Deseret (now known as The University of Utah).{" "}
      </p>
      <p>
        To explore Deseret further, read the "How To Read" section or follow the
        link below.
      </p>
      <a
        href="https://www.churchofjesuschrist.org/study/history/topics/deseret-alphabet?lang=eng"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        Deseret Alphabet - Church of Jesus Christ of Latter-day Saints
      </a>
    </CollapsibleSection>
  );
}
