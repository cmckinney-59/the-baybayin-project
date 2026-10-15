import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";

const RESOURCE_LINKS = [
  {
    href: "https://www.deseretalphabet.org/",
    text: "Deseret Alphabet",
  },
  {
    href: "https://www.2deseret.com/",
    text: "Deseret Translator",
  },
  {
    href: "https://www.churchofjesuschrist.org/study/history/topics/deseret-alphabet?lang=eng",
    text: "LDS Church Deseret Alphabet",
  },
  {
    href: "https://restorethealphabet.com",
    text: "Restore The Alphabet",
  },
  {
    href: "https://www.deseretalphabet.info/classics/",
    text: "Deseret Alphabet Classics Books",
  },
  {
    href: "https://www.deseretalphabet.info/BoM/nav.xhtml",
    text: "Deseret Alphabet Book of Mormon Reader",
  },
];

export default function DeseretMoreResources() {
  return (
    <CollapsibleSection title="More Resources" defaultExpanded={false}>
      <ul className="resource-links">
        {RESOURCE_LINKS.map((link) => (
          <ResourceLink key={link.href} href={link.href} >{link.text}</ResourceLink>
        ))}
      </ul>
    </CollapsibleSection>
  );
}
