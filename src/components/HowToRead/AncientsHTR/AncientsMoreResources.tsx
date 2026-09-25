import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";

export default function AncientsMoreResources() {
  return (
    <CollapsibleSection title="More Resources" defaultExpanded={false}>
      <p>Here are some more resources for learning about the Ancients alphabet.</p>
      <ul className="resource-links">
        <ResourceLink href="https://omniglot.com/conscripts/ancients.htm">
          Omniglot
        </ResourceLink>
        <ResourceLink href="https://www.gateworld.net/news/2025/06/destiny-secret-message-hidden-plain-sight/">
          GateWorld: reading Ancient text
        </ResourceLink>
        <ResourceLink href="https://www.dcode.fr/ancients-stargate-alphabet">
          dCode Ancients translator
        </ResourceLink>
      </ul>
    </CollapsibleSection>
  );
}
