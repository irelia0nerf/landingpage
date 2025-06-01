import React from "react";

const sobre = [
  {
    titulo: "Missão",
    texto: "Garantir confiança e transparência no sistema financeiro digital, conectando tecnologia e compliance para proteger instituições, negócios e usuários em escala global.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="16" fill="#E1E4E8" stroke="#3BB273" strokeWidth="2"/>
        <path d="M11 19l4 4 8-10" stroke="#3BB273" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    titulo: "Visão",
    texto: "Ser referência global em reputação financeira, fomentando a inovação responsável e a segurança digital em todas as operações do mercado.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="16" fill="#E1E4E8" stroke="#0033A0" strokeWidth="2"/>
        <circle cx="17" cy="17" r="5" fill="#0033A0"/>
      </svg>
    )
  },
  {
    titulo: "Valores",
    texto: "Ética, transparência, inovação, confiabilidade e respeito à privacidade. Somos guiados por impacto social positivo e responsabilidade.",
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
