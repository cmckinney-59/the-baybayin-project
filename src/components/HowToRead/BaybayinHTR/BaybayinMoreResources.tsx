import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";

export default function BaybayinMoreResources() {
  return (
    <CollapsibleSection title="More Resources" defaultExpanded={false}>
      <p>
        Phonetic mode looks up pronunciations before it writes Baybayin. English
        words use the Carnegie Mellon University Pronouncing Dictionary, through
        the ingglish package. Spanish words use the Montreal Forced Aligner
        Spanish dictionary, licensed under Creative Commons Attribution 4.0.
      </p>
      <ul className="resource-links">
        <ResourceLink href="https://omniglot.com/writing/baybayin.htm">
          Omniglot
        </ResourceLink>
        <ResourceLink href="https://en.wikipedia.org/wiki/Baybayin">
          Wikipedia
        </ResourceLink>
        <ResourceLink href="https://www.ust.edu.ph/the-baybayin-documents/">
          UST Baybayin Documents (1613 and 1625 land deeds)
        </ResourceLink>
        <ResourceLink href="https://www.gutenberg.org/ebooks/16119">
          Project Gutenberg — Doctrina Christiana
        </ResourceLink>
        <ResourceLink href="https://www.gutenberg.org/ebooks/15421">
          Project Gutenberg — Pardo de Tavera (1884)
        </ResourceLink>
        <ResourceLink href="https://archive.org/details/aps6594.0001.001.umich.edu">
          Internet Archive — Villamor (1922)
        </ResourceLink>
        <ResourceLink href="http://www.speech.cs.cmu.edu/cgi-bin/cmudict">
          Carnegie Mellon University Pronouncing Dictionary
        </ResourceLink>
        <ResourceLink href="https://mfa-models.readthedocs.io/">
          Montreal Forced Aligner Spanish dictionary (CC BY 4.0)
        </ResourceLink>
        <ResourceLink href="https://creativecommons.org/licenses/by/4.0/">
          Creative Commons Attribution 4.0
        </ResourceLink>
      </ul>
    </CollapsibleSection>
  );
}
