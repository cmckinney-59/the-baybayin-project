import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import ResourceLink from "../../ResourceLink/ResourceLink";

type ResourceLinkItem = {
  href: string;
  text: string;
};

type ResourceLinkSection = {
  title: string;
  links: ResourceLinkItem[];
};

const RESOURCE_LINK_SECTIONS: ResourceLinkSection[] = [
  {
    title: "Learn",
    links: [
      {
        href: "https://en.wikipedia.org/wiki/Deseret_alphabet",
        text: "Deseret Alphabet on Wikipedia",
      },
      {
        href: "https://www.deseretalphabet.info/About.html",
        text: "About the Deseret Alphabet",
      },
      {
        href: "https://www.omniglot.com/writing/deseret.htm",
        text: "Deseret Alphabet on Omniglot",
      },
      {
        href: "https://www.churchofjesuschrist.org/study/history/topics/deseret-alphabet?lang=eng",
        text: "Church History Topic: Deseret Alphabet",
      },
      {
        href: "https://eom.byu.edu/index.php/Deseret_Alphabet",
        text: "Encyclopedia of Mormonism Entry",
      },
      {
        href: "https://www.chem.ucla.edu/~jericks/Historical%20or%20Technical/Linguistics/Deseret_Guide.pdf",
        text: "Complete Guide to Reading and Writing Deseret (PDF)",
      },
    ],
  },
  {
    title: "Read & practice",
    links: [
      {
        href: "https://www.deseretalphabet.org/",
        text: "Deseret Alphabet Portal",
      },
      {
        href: "https://www.2deseret.com/",
        text: "Online Deseret Translator",
      },
      {
        href: "https://restorethealphabet.com",
        text: "Restore the Alphabet",
      },
      {
        href: "https://www.deseretalphabet.info/classics/",
        text: "Deseret Alphabet Classics",
      },
      {
        href: "https://www.deseretalphabet.info/BoM/nav.xhtml",
        text: "Book of Mormon Reader (Deseret)",
      },
    ],
  },
  {
    title: "Research & archives",
    links: [
      {
        href: "https://exhibits.lib.utah.edu/s/designing-deseret/page/home",
        text: "Designing Deseret (University of Utah Exhibit)",
      },
      {
        href: "http://faculty.las.illinois.edu/rshosted/deseret.html",
        text: "Illinois Deseret Consortium",
      },
      {
        href: "https://www.chem.ucla.edu/~jericks/",
        text: "Joshua Erickson’s Deseret Resources",
      },
      {
        href: "https://archive.org/details/bookofmormdeseretalpha00",
        text: "1869 Deseret Book of Mormon (Internet Archive)",
      },
      {
        href: "https://catalog.churchofjesuschrist.org/record/ab7480c3-3a13-4e80-8d2f-8d140caf78bd/0?lang=eng&view=browse",
        text: "Deseret Alphabet Manuscripts (Church History Catalog)",
      },
      {
        href: "https://www.unicode.org/charts/PDF/U10400.pdf",
        text: "Official Unicode Deseret Character Chart (PDF)",
      },
      {
        href: "http://www.speech.cs.cmu.edu/cgi-bin/cmudict",
        text: "Carnegie Mellon University Pronouncing Dictionary",
      },
    ],
  },
];

export default function DeseretMoreResources() {
  return (
    <CollapsibleSection title="More Resources" defaultExpanded={false}>
      {RESOURCE_LINK_SECTIONS.map((section) => (
        <section key={section.title} className="resource-link-section">
          <h3 className="resource-link-section-title">{section.title}</h3>
          <ul className="resource-links">
            {section.links.map((link) => (
              <ResourceLink key={link.href} href={link.href}>
                {link.text}
              </ResourceLink>
            ))}
          </ul>
        </section>
      ))}
    </CollapsibleSection>
  );
}
