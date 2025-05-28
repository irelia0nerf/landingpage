import React, { useState } from "react";
import logo from '../images/logo.png';

const NAV_LINKS = [
  { label: "Solução", target: "solucao" },
  { label: "Prova Viva", target: "prova" },
  { label: "Diferenciais", target: "diferenciais" },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 65,
      behavior: "smooth",
    });
  }
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (target) => {
    scrollToSection(target);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <a href="/" className="logo-link" aria-label="Página inicial">
            <img src={logo} alt="Logo FoundLab" className="logo-img" />
            <span className="logo-text">FoundLab</span>
          </a>
        </div>

        {/* NAV DESKTOP */}
        <nav className="nav-links">
          {NAV_LINKS.map((item) => (
            <button
              className="nav-link"
              key={item.target}
              onClick={() => scrollToSection(item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="cta-button desktop-demo">Testar Demo</button>

        {/* HAMBURGER - MOBILE */}
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* MOBILE NAV MENU */}
      <div className={`mobile-nav-overlay${menuOpen ? " show" : ""}`} onClick={() => setMenuOpen(false)} />
      <nav className={`mobile-nav${menuOpen ? " open" : ""}`}>
        <div className="mobile-nav-inner">
          <div className="mobile-nav-links">
            {NAV_LINKS.map((item) => (
              <button
                className="nav-link"
                key={item.target}
                onClick={() => handleNavClick(item.target)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            className="cta-button mobile-demo"
            onClick={() => setMenuOpen(false)}
          >
            Testar Demo
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
