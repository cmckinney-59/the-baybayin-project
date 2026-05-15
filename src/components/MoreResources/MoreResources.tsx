import CollapsibleSection from "../CollapsibleSection/CollapsibleSection";

export default function HowToUse() {
  return (
    <CollapsibleSection title="More Resources" defaultExpanded={false}>
      <p>
        Here are some more resources for learning about the different writing
        systems.
      </p>
      <ul>
        <li>
          <a
            href="https://www.deseretalphabet.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deseret Alphabet
          </a>
        </li>
      </ul>
    </CollapsibleSection>
  );
}
