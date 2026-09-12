import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";

export default function DeseretMoreResources() {
  return (
    <CollapsibleSection title="More Resources" defaultExpanded={false}>
      <p>
        Here are some more resources for learning about The Deseret Alphabet.
      </p>
      <ul className="resource-links">
        <ResourceLink href="https://www.deseretalphabet.org/">
          Deseret Alphabet
        </ResourceLink>
        <ResourceLink href="https://www.2deseret.com/">
          Deseret Translator
        </ResourceLink>
        <ResourceLink href="https://www.churchofjesuschrist.org/study/history/topics/deseret-alphabet?lang=eng">
          LDS Church Deseret Alphabet
        </ResourceLink>
        <ResourceLink href="https://restorethealphabet.com">
          Restore The Alphabet
        </ResourceLink>
      </ul>
    </CollapsibleSection>
  );
}
