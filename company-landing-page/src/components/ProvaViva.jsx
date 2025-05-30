import React from "react";

const cards = [
  {
    icon: (
      // API Scorable (ícone de API/server)
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="7" y="12" width="42" height="32" rx="7" stroke="#22D3EE" strokeWidth="3.5" fill="#16223A"/>
        <rect x="15" y="20" width="26" height="5" rx="2.5" fill="#22D3EE" opacity="0.65"/>
        <circle cx="19" cy="34" r="2.6" fill="#22D3EE" />
        <circle cx="28" cy="34" r="2.6" fill="#22D3EE" opacity="0.62"/>
        <circle cx="37" cy="34" r="2.6" fill="#22D3EE" opacity="0.44"/>
      </svg>
    ),
    title: "Moat Real",
    label: "Primeira infra nativa de reputação financeira plugável, anti-fraude, sem lock-in."
  },
  {
    icon: (
      // Governança PEG (ícone de compliance/escudo)
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <path d="M28 10L44 16V28C44 39 28 46 28 46C28 46 12 39 12 28V16L28 10Z" stroke="#22D3EE" strokeWidth="3.5" fill="#16223A"/>
        <path d="M28 21V31" stroke="#22D3EE" strokeWidth="2.2" strokeLinecap="round"/>
        <circle cx="28" cy="36" r="2" fill="#22D3EE"/>
      </svg>
    ),
    title: "ScoreLab Engine",
    label: "Engine dinâmica, flags programáveis, API pública, NFT reputação cross-chain."
  },
  {
    icon: (
      // Performance em Rede (ícone de rede/performance)
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="18" stroke="#22D3EE" strokeWidth="3.5" fill="#16223A"/>
        <circle cx="28" cy="28" r="6.2" fill="#22D3EE" />
        <circle cx="44" cy="28" r="2.6" fill="#22D3EE" opacity="0.6"/>
        <circle cx="28" cy="44" r="2.6" fill="#22D3EE" opacity="0.4"/>
        <circle cx="12" cy="28" r="2.6" fill="#22D3EE" opacity="0.6"/>
        <circle cx="28" cy="12" r="2.6" fill="#22D3EE" opacity="0.4"/>
      </svg>
    ),
    title: "Compliance de verdade",
    label: "LGPD, Open Finance, auditoria, arquitetura não-custodial. Segurança e transparência."
  },
];

const ProvaViva = () => (
  <section className="prova-viva-section animated-section">
    <h2 className="prova-viva-title">
      Prova Técnica & Operacional Viva: <span className="highlight">Teste e Comprove</span>
    </h2>
    <div className="prova-viva-grid">
      {cards.map((card, i) => (
        <div className="prova-viva-card animated-card" key={i}>
          <div className="prova-viva-icon">{card.icon}</div>
          <div className="prova-viva-card-title">{card.title}</div>
          <div className="prova-viva-label">{card.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ProvaViva;
