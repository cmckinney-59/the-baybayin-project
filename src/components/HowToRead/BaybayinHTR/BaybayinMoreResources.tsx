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
      </ul>
    </CollapsibleSection>
  );
}
