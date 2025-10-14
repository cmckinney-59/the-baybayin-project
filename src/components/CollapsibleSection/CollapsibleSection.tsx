import { useState } from "react";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export default function CollapsibleSection({
  title,
  children,
  defaultExpanded = false,
  className = "",
}: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`collapsible-section ${className}`}>
      <button
        className="collapsible-header"
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
        aria-controls="collapsible-content"
      >
        <h2 className="collapsible-title">{title}</h2>
        <span className={`collapsible-icon ${isExpanded ? "expanded" : ""}`}>
          ▼
        </span>
      </button>
      <div
        id="collapsible-content"
        className={`collapsible-content ${isExpanded ? "expanded" : ""}`}
      >
        <div className="collapsible-content-inner">{children}</div>
      </div>
    </div>
  );
}
