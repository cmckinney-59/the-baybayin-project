import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";

export default function WhatIsBaybayin() {
  return (
    <CollapsibleSection title="What Is Baybayin" defaultExpanded={false}>
      <p>
        Baybayin is the ancient writing system of the Philippines, predating the
        arrival of Spanish colonizers in the 16th century. This remarkable
        script represents a crucial aspect of Filipino culture and history,
        serving as evidence of sophisticated education, governance, and civil
        systems that existed long before Spanish occupation. Today, scholars and
        historians worldwide are working to learn, preserve, and revitalize this
        important cultural heritage.
      </p>
      <p>
        Traditionally, Baybayin was inscribed on various natural materials
        including bamboo, leaves, and tree bark. It served as the primary
        writing system for important documents, personal correspondence, and
        religious inscriptions. Following Spanish colonization, however, the use
        of Baybayin gradually declined and was eventually supplanted by the
        Latin alphabet, nearly disappearing from daily use.
      </p>
      <p>
        What makes Baybayin unique is its syllabic nature—each character
        represents an entire syllable rather than a single letter. The script
        uses "kudlit" (diacritical marks) that modify consonant characters to
        represent different vowel sounds, creating a distinctive writing system.
        To explore Baybayin further, read the "How To Read" section, or download
        our comprehensive{" "}
        <a
          href="/src/assets/projects/BaybayinHowToReadV1.pdf"
          download="HowToReadBaybayin.pdf"
          className="link"
        >
          "How To Read Baybayin"
        </a>{" "}
        PDF guide.
      </p>
    </CollapsibleSection>
  );
}
