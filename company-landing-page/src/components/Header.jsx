import React, { useState } from 'react';
import logo from '../images/logoPreto.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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

  // Fecha modal com Esc
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    if (modalOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen]);

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
        {/* Volta a ser um link normal */}
        <a href="#contato" className="header-link" onClick={() => setOpen(false)}>Contato</a>
      </nav>
      {/* Agora o botão que abre o modal é o "Solicitar acesso" */}
      <button
        className="cta-button"
        onClick={() => setModalOpen(true)}
      >
        Solicitar acesso
      </button>

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

      {/* Modal de contato */}
      {modalOpen && (
        <div className="contato-modal-bg" onClick={() => setModalOpen(false)}>
          <div className="contato-modal" onClick={e => e.stopPropagation()}>
            <button className="contato-modal-close" onClick={() => setModalOpen(false)} aria-label="Fechar">×</button>
            <iframe
              src="https://tally.so/r/wg18oP"
              title="Contato"
              frameBorder="0"
              width="100%"
              height="530"
              style={{ borderRadius: 14, minWidth: 300, background: "#fff" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
