import React from 'react';
import logo from '../images/logoPreto.png';
import backHero from '../images/backHero.jpg';

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
        A FoundLab opera como uma infraestrutura modular e de alto desempenho, projetada para processamento complexo de risco e reputação. Sua arquitetura é composta por motores interconectados que orquestram fluxos de dados, geram inteligência preditiva e garantem a auditabilidade do processo em tempo real.
      </p>
    </div>
  </section>
);

export default HeroInstitucional;
