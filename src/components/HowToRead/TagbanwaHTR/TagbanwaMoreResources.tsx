import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";

export default function TagbanwaMoreResources() {
  return (
    <CollapsibleSection title="More Resources" defaultExpanded={false}>
      <ul className="resource-links">
        <ResourceLink href="https://omniglot.com/writing/tagbanwa.htm">
          Omniglot
        </ResourceLink>
        <ResourceLink href="https://en.wikipedia.org/wiki/Tagbanwa_script">
          Wikipedia
        </ResourceLink>
      </ul>
    </CollapsibleSection>
  );
}
