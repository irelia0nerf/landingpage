import React from 'react';
import logo from '../images/logoBranca.png';

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <a href="/" className="logo-link" aria-label="Página inicial">
        <img src={logo} alt="Logo FoundLab" className="logo-img" />
        <span className="logo-text">FoundLab</span>
      </a>
    </div>
    <button className="cta-button">Testar Demo</button>
  </header>
);

export default Header;
