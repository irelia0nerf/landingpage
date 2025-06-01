import React from 'react';

const features = [
  {
    icon: (
      // Ícone: Score reputacional (estrela/escudo)
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="21" fill="#F6F8FA"/>
        <path d="M21 9l3.09 6.26L31 16.27l-5 4.87L27.18 29 21 25.27 14.82 29 16 21.14l-5-4.87 6.91-1.01L21 9z" fill="#0033A0"/>
      </svg>
    ),
    title: "Score reputacional",
    desc: "Construímos scores dinâmicos para medir a reputação financeira de usuários e instituições em tempo real.",
  },
  {
    icon: (
      // Ícone: Compliance automatizado (check/engrenagem)
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="21" fill="#F6F8FA"/>
        <rect x="14" y="14" width="14" height="14" rx="4" fill="#3BB273"/>
        <path d="M17 21l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Compliance automatizado",
    desc: "Automatize processos regulatórios, KYC/AML e obrigações legais sem complicações e sem burocracia.",
  },
  {
    icon: (
      // Ícone: Monitoramento em tempo real (radar/olho)
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="21" fill="#F6F8FA"/>
        <ellipse cx="21" cy="21" rx="9" ry="6" fill="#4F83CC"/>
        <circle cx="21" cy="21" r="2" fill="#0033A0"/>
      </svg>
    ),
    title: "Monitoramento em tempo real",
    desc: "Detecte riscos, transações suspeitas e fraudes de modo instantâneo com inteligência proprietária.",
  }
];

const OQueFazemos = () => (
  <section id="oque-fazemos" className="oque-fazemos-section">
    <div className="oque-fazemos-container">
      <h2 className="oque-fazemos-h2">O que fazemos</h2>
      <div className="oque-fazemos-cards">
        {features.map((feat, i) => (
          <div className="oque-fazemos-card" key={i}>
            <div className="oque-fazemos-icon">{feat.icon}</div>
            <div className="oque-fazemos-title">{feat.title}</div>
            <div className="oque-fazemos-desc">{feat.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);



export default OQueFazemos;
