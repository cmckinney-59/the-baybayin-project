import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";

export default function AurebeshResources() {
  return (
    <CollapsibleSection title="More Resources" defaultExpanded={false}>
      <ul className="resource-links">
        <ResourceLink href="https://aurebesh.fandom.com/wiki/Aurebesh_Wiki">
          Fandom Wiki
        </ResourceLink>
        <ResourceLink href="https://starwars.fandom.com/wiki/Aurebesh">
          Wookieepedia
        </ResourceLink>
        <ResourceLink href="https://www.omniglot.com/conscripts/aurekbesh.htm">
          Omniglot
        </ResourceLink>
        <ResourceLink href="https://aurekfonts.github.io/?font=AurebeshAF">
          Aurek Fonts
        </ResourceLink>
        <ResourceLink href="https://aurebesh.org/">Aurebesh.org</ResourceLink>
      </ul>
    </CollapsibleSection>
  );
}
