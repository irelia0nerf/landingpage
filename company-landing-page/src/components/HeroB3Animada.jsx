import React from 'react';
import logo from '../images/logoPreto.png';
import backHero from '../videos/videoprova.mp4';

const HeroInstitucional = () => (
  <section className="hero-institucional">
    <video className="hero-institucional-bg" src={backHero} autoPlay muted loop playsInline></video>
    <div className="hero-institucional-content">
      <img src={logo} alt="Logo FoundLab" className="hero-institucional-logo" />
      <span className="hero-institucional-slogan">Reputação & Capital</span>

      <h1 className="hero-institucional-title">
        Infraestrutura de Reputação<br />
        para a Nova Ordem Financeira
      </h1>

      <p className="hero-institucional-subtitle">
        A FoundLab opera como uma infraestrutura modular e de alto desempenho, projetada para processamento complexo de risco e reputação. Sua arquitetura interconecta dados, gera inteligência preditiva e garante auditabilidade em tempo real.
      </p>
      <button className="hero-institucional-cta">Conheça a plataforma</button>
    </div>
  </section>
);

export default HeroInstitucional;
