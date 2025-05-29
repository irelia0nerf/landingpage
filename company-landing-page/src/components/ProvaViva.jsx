import React from "react";

// Ícones SVG (customizáveis conforme quiser)
const icons = [
  (
    // Plug
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
      <path d="M20 14v12M38 14v12M20 40c0 5 4 9 9 9s9-4 9-9V30M16 28h26" stroke="#fff" strokeWidth="2.7" strokeLinecap="round"/>
      <path d="M28 35v8" stroke="#fff" strokeWidth="2.7" strokeLinecap="round"/>
    </svg>
  ),
  (
    // Shield/Gavel
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
      <rect x="13" y="18" width="32" height="20" rx="8" stroke="#fff" strokeWidth="2.4"/>
      <path d="M21 25h16M21 30h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <path d="M29 38v-8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  (
    // Speed/Chart
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
      <path d="M18 38a12 12 0 1 1 22 0" stroke="#fff" strokeWidth="2.7"/>
      <path d="M29 38l5-5" stroke="#fff" strokeWidth="2.7" strokeLinecap="round"/>
      <rect x="23" y="38" width="4" height="6" rx="2" fill="#fff"/>
      <rect x="31" y="40" width="4" height="4" rx="2" fill="#fff"/>
    </svg>
  )
];

// Dados das "provas"
const provas = [
  {
    title: "API ScoreLab\nAo Vivo",
    icon: icons[0],
    label: "API Plug"
  },
  {
    title: "Governança DFC\nTransparente",
    icon: icons[1],
    label: "API"
  },
  {
    title: "Performance em\nTempo Real",
    icon: icons[2],
    label: "web3"
  }
];

const ProvaViva = () => (
  <section className="prova-viva-section" id="prova">
    <h2 className="prova-viva-title">
      Prova Técnica & Operacional Viva:<br /> <span className="highlight">Teste e Comprove</span>
    </h2>
    <div className="prova-viva-grid">
      {provas.map((item, i) => (
        <div className="prova-viva-card" key={i}>
          <div className="prova-viva-card-title">
            {item.title.split('\n').map((line, j) => (
              <span key={j}>{line}<br /></span>
            ))}
          </div>
          <div className="prova-viva-icon">{item.icon}</div>
          <div className="prova-viva-label">{item.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ProvaViva;
