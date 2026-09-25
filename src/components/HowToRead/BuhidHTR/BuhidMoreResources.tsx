import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";

export default function BuhidMoreResources() {
  return (
    <CollapsibleSection title="More Resources" defaultExpanded={false}>
      <ul className="resource-links">
        <ResourceLink href="https://omniglot.com/writing/buhid.htm">
          Omniglot
        </ResourceLink>
        <ResourceLink href="https://en.wikipedia.org/wiki/Buhid_script">
          Wikipedia
        </ResourceLink>
      </ul>
    </CollapsibleSection>
  );
}
