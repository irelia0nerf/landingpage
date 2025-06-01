import React from 'react';

const diferenciais = [
  {
    icon: (
      // Modularidade (ícone de blocos/montagem)
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="6" y="6" width="12" height="12" rx="4" fill="#0033A0"/>
        <rect x="26" y="6" width="12" height="12" rx="4" fill="#3BB273"/>
        <rect x="6" y="26" width="12" height="12" rx="4" fill="#4F83CC"/>
        <rect x="26" y="26" width="12" height="12" rx="4" fill="#DFE3E8"/>
      </svg>
    ),
    title: "Modularidade",
    desc: "Adapte cada módulo de acordo com a necessidade do seu negócio – plug & play, sem lock-in.",
  },
  {
    icon: (
      // Conectividade (ícone de plug/conexão)
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" fill="#F6F8FA" stroke="#4F83CC" strokeWidth="2"/>
        <path d="M17 22h10" stroke="#0033A0" strokeWidth="2.2" strokeLinecap="round"/>
        <circle cx="17" cy="22" r="2.7" fill="#3BB273"/>
        <circle cx="27" cy="22" r="2.7" fill="#3BB273"/>
      </svg>
    ),
    title: "Conectividade TradFi/Web3",
    desc: "Integração pronta para bancos, fintechs e plataformas blockchain – conecte tudo sem atrito.",
  },
  {
    icon: (
      // Neutralidade & Escalabilidade (balança/engrenagem)
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" fill="#F6F8FA" stroke="#0033A0" strokeWidth="2"/>
        <ellipse cx="22" cy="22" rx="10" ry="6" fill="#DFE3E8"/>
        <rect x="18" y="19" width="8" height="6" rx="2.2" fill="#4F83CC"/>
        <rect x="20" y="17" width="4" height="10" rx="1.3" fill="#3BB273"/>
      </svg>
    ),
    title: "Neutralidade & escalabilidade",
    desc: "Independência, governança neutra e tecnologia preparada para milhões de usuários.",
  }
];

const Diferenciais = () => (
  <section id="diferenciais" className="diferenciais-section">
    <h2 className="diferenciais-title">Diferenciais</h2>
    <div className="diferenciais-cards">
      {diferenciais.map((pilar, i) => (
        <div className="diferenciais-card" key={i}>
          <div className="diferenciais-icon">{pilar.icon}</div>
          <div className="diferenciais-card-title">{pilar.title}</div>
          <div className="diferenciais-card-desc">{pilar.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Diferenciais;
