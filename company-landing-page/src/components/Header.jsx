import React, { useState } from 'react';
import logo from '../images/logoPreto.png';

const Header = () => {
  const [open, setOpen] = useState(false);

  // Fecha menu ao clicar fora (opcional)
  React.useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener('scroll', close);
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('scroll', close);
      window.removeEventListener('resize', close);
    };
  }, [open]);

  return (
    <header className="header">
      <div className="logo-container">
        <a href="/" className="logo-link" aria-label="Página inicial">
          <img src={logo} alt="Logo FoundLab" className="logo-img" />
          <span className="logo-text">FoundLab</span>
        </a>
      </div>
      <nav className={`header-nav${open ? ' header-nav--open' : ''}`}>
        <a href="#oque-fazemos" className="header-link" onClick={() => setOpen(false)}>O que fazemos</a>
        <a href="#diferenciais" className="header-link" onClick={() => setOpen(false)}>Diferenciais</a>
        <a href="#como-funciona" className="header-link" onClick={() => setOpen(false)}>Como funciona</a>
        <a href="#kpis" className="header-link" onClick={() => setOpen(false)}>KPIs</a>
        <a href="#sobre-nos" className="header-link" onClick={() => setOpen(false)}>Sobre nós</a>
        <a href="#contato" className="header-link" onClick={() => setOpen(false)}>Contato</a>
      </nav>
      <button className="cta-button">Solicitar acesso</button>

      {/* Botão hambúrguer */}
      <button
        className={`header-burger${open ? ' header-burger--open' : ''}`}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Overlay ao abrir menu */}
      {open && <div className="header-overlay" onClick={() => setOpen(false)}></div>}
    </header>
  );
};

export default Header;
