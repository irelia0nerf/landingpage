import React, { useRef, useEffect, useState } from "react";

const documentos = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#2962ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="16" height="20" rx="3" />
        <path d="M10 8h8M10 12h8M10 16h5" />
      </svg>
    ),
    title: "Whitepaper",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "https://seulink.com/whitepaper.pdf"
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#2962ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="7" width="18" height="14" rx="2" />
        <path d="M9 11h10M9 15h6" />
      </svg>
    ),
    title: "One-Pager",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "https://seulink.com/onepager.pdf"
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#2962ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="16" height="16" rx="3" />
        <path d="M10 12h8M10 16h8" />
      </svg>
    ),
    title: "Pitch Deck",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "https://seulink.com/pitchdeck.pdf"
  }
];

const Documentos = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="docs-section" ref={ref}>
      <h2 className="docs-title">Documentação</h2>
      <p className="docs-desc">
        Acesse rapidamente os principais documentos da plataforma.
      </p>
      <div className={`docs-grid fade-in-section${show ? " visible" : ""}`}>
        {documentos.map((item, i) => (
          <a
            className="docs-card"
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="docs-icon">{item.icon}</div>
            <div className="docs-info">
              <div className="docs-name">{item.title}</div>
              <div className="docs-desc-small">{item.subtitle}</div>
            </div>
            <div className="docs-arrow">
              <svg width="24" height="24" fill="none" stroke="#2962ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 8l6 4-6 4"/>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Documentos;
