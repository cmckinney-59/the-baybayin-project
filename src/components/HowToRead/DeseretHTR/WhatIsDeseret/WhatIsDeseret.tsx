import CollapsibleSection from "../../../CollapsibleSection/CollapsibleSection";

export default function WhatIsDeseret() {
  return (
    <CollapsibleSection title="What Is Deseret" defaultExpanded={false}>
      <p>
        The Deseret Alphabet is a phonetic alphabet that was commisioned by Brigham Young in the 1850s.
        It was intended to help the new immigrants to the Salt Lake Valley learn English.
        Since many Enlish words are not spelled as they sound, it was difficult for the new immigrants to learn proper pronunciation.
        Hence, having a phonetic alphabet was to be a great help.
        The alphabet never saw widespread use due to the cost to impliment it, but it is still a fascinating part of history.
        This alphabet has seen an influx of artistic use in recent years and many Deseret "easter eggs" can be found throughout the state of Utah.
      </p>
      <p>
        To explore Deseret further, go to the "How To Read" section or follow the
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
