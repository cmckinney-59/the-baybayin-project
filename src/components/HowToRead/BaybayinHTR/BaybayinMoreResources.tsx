import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";

export default function BaybayinMoreResources() {
  return (
    <CollapsibleSection title="More Resources" defaultExpanded={false}>
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
      </ul>
    </CollapsibleSection>
  );
}
