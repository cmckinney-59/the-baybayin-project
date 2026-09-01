type ResourceLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function ResourceLink({ href, children }: ResourceLinkProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        {children}
      </a>
    </li>
  );
}
