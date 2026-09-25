import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";

export default function HanunooMoreResources() {
  return (
    <CollapsibleSection title="More Resources" defaultExpanded={false}>
      <ul className="resource-links">
        <ResourceLink href="https://omniglot.com/writing/hanunoo.htm">
          Omniglot
        </ResourceLink>
        <ResourceLink href="https://en.wikipedia.org/wiki/Hanunoo_script">
          Wikipedia
        </ResourceLink>
      </ul>
    </CollapsibleSection>
  );
}
