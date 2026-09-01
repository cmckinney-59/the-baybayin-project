import CollapsibleSection from "../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../ResourceLink/ResourceLink";

export default function HowToUse() {
  return (
    <CollapsibleSection title="More Resources" defaultExpanded={false}>
      <p>
        Here are some more resources for learning about the different writing
        systems.
      </p>
      <ul className="resource-links">
        <ResourceLink href="https://www.deseretalphabet.org/">
          Deseret Alphabet
        </ResourceLink>
      </ul>
    </CollapsibleSection>
  );
}
