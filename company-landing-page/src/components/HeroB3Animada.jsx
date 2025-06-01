import React from 'react';
import logo from '../images/logoPreto.png'; // Ajuste para o logo institucional, se necessário

const HeroInstitucional = () => (
  <section className="hero-institucional">
    <div className="hero-institucional-content">
      <img src={logo} alt="Logo FoundLab" className="hero-institucional-logo" />
      <span className="hero-institucional-slogan">Reputação & Capital</span>

      <h1 className="hero-institucional-title">
        Infraestrutura de Reputação<br />
        para a Nova Ordem Financeira
      </h1>

      <p className="hero-institucional-subtitle">
        Conectamos compliance, score e confiança<br />
        para instituições que movem bilhões.
      </p>

      <button className="hero-institucional-cta">
        Solicitar acesso
      </button>
    </div>
  </section>
);

export default HeroInstitucional;
