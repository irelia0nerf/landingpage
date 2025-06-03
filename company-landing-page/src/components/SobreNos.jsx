import React from "react";

const sobre = [
  {
    titulo: "Sobre a FoundLab",
    texto: "Na FoundLab, somos a vanguarda da confiança digital, impulsionando a segurança e a escalabilidade na economia global. Nosso compromisso é construir as bases para um futuro financeiro mais seguro e interconectado.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="16" fill="#E1E4E8" stroke="#3BB273" strokeWidth="2"/>
        <path d="M11 19l4 4 8-10" stroke="#3BB273" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    titulo: "Nossa Missão",
    texto: "Fornecer a infraestrutura de confiança e inteligência de risco essencial para a economia digital. Capacitamos empresas a operar com segurança, conformidade e escalabilidade, unificando a credibilidade entre os ecossistemas TradFi e Web3.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="16" fill="#E1E4E8" stroke="#0033A0" strokeWidth="2"/>
        <circle cx="17" cy="17" r="5" fill="#0033A0"/>
      </svg>
    )
  },
  {
    titulo: "Nossa Visão",
    texto: "Ser a infraestrutura de confiança e reputação que define o padrão global para a economia digital. Almejamos um futuro onde a segurança e a conformidade impulsionem a inovação e o crescimento sem atrito entre todos os ecossistemas financeiros.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="16" fill="#E1E4E8" stroke="#4F83CC" strokeWidth="2"/>
        <path d="M17 9v7l5 5" stroke="#4F83CC" strokeWidth="2.3" strokeLinecap="round"/>
      </svg>
    )
  }
];

const SobreNos = () => (
  <section id="sobre-nos" className="sobre-nos-section">
    <h2 className="sobre-nos-title">Sobre nós</h2>
    <div className="sobre-nos-cards">
      {sobre.map((item, i) => (
        <div className="sobre-nos-card" key={i}>
          <div className="sobre-nos-icon">{item.icon}</div>
          <div className="sobre-nos-titulo">{item.titulo}</div>
          <div className="sobre-nos-texto">{item.texto}</div>
        </div>
      ))}
    </div>
  </section>
);

export default SobreNos;
