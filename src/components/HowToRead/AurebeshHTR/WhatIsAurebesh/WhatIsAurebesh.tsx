import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";

export default function WhatIsAurebesh() {
  return (
    <CollapsibleSection title="What Is Aurebesh" defaultExpanded={false}>
      <p>Aurebesh is the alphabet used in the Star Wars franchise.</p>
      <p>
        To explore Aurebesh further, read the "How To Read" section, or download
        our comprehensive{" "}
        <a
          href="/src/assets/projects/AurebeshHowToReadV2.pdf"
          download="HowToReadAurebesh.pdf"
          className="link"
        >
          "How To Read Aurebesh"
        </a>{" "}
        PDF guide.
      </p>
    </CollapsibleSection>
  );
}
