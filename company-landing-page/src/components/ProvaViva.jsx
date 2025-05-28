import React from "react";

// Exemplo de imagens: substitua pelo caminho certo dos seus assets!
import parceiro1 from '../images/parceiro1.png';

const cards = [
  {
    title: "API ScoreLab Ao Vivo",
    description: "Submeta sua wallet e veja a reputação em tempo real.",
    img: parceiro1,
    alt: "Demonstração API ScoreLab",
    link: "#", // ou "/demo" se quiser
    button: "Testar agora",
  },
  {
    title: "Governança DFC Transparente",
    description: "Visualize como funciona a governança digital.",
    img: parceiro1,
    alt: "Governança DFC",
    link: "#",
    button: "Ver demo",
  },
  {
    title: "Performance em Tempo Real",
    description: "Acompanhe métricas de performance com dashboards reais.",
    img: parceiro1,
    alt: "parceiro1 Dashboard",
    link: "#",
    button: "Acessar demo",
  },
];

const ProvaViva = () => (
  <section className="prova-viva-section">
    <div className="prova-viva-header">
      <h2>Prova Técnica & Operacional Viva</h2>
      <div className="prova-viva-actions">
        <span>Teste e Comprove.</span>
        <span className="prova-viva-sub">Scoree e comiça</span>
      </div>
      <p className="prova-viva-desc">
        Envie, prove ou simule o comportamento de execução. Demonstre resultados reais sem medo, crie sua própria experiência!
      </p>
    </div>
    <div className="prova-viva-grid">
      {cards.map((card, i) => (
        <div className="prova-viva-card" key={i}>
          <div className="prova-viva-img-box">
            <img src={card.img} alt={card.alt} />
          </div>
          <div className="prova-viva-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a className="cta-btn" href={card.link}>{card.button} →</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProvaViva;
