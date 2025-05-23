import React from "react";

// Exemplo de benefícios, ajuste à sua necessidade!
const benefits = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#2962ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="14" r="12"/><path d="M14 8v8l4 2"/></svg>
    ),
    title: "Relatórios Inteligentes",
    subtitle: "Visualize e tome decisões com dados em tempo real.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#2962ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="20" height="12" rx="3"/><path d="M22 8V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2"/></svg>
    ),
    title: "Gestão de Cartões",
    subtitle: "Controle todos os seus cartões em um só lugar.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#2962ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="16" height="16" rx="3"/><path d="M6 14h16"/></svg>
    ),
    title: "Pagamentos Simplificados",
    subtitle: "Acompanhe pagamentos e recebimentos facilmente.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#2962ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="14" r="12"/><path d="M14 10v4l3 3"/></svg>
    ),
    title: "Integração Instantânea",
    subtitle: "Conecte com bancos e fintechs sem complicação.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#2962ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="16" height="16" rx="3"/><path d="M10 14h8"/></svg>
    ),
    title: "Automação Contábil",
    subtitle: "Ganhe tempo automatizando tarefas repetitivas.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#2962ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v5M14 20v5M21 14h5M3 14h5"/></svg>
    ),
    title: "Segurança Avançada",
    subtitle: "Proteção de dados de nível bancário.",
  },
];

const Benefits = () => (
  <section className="benefits-section">
    <span className="benefits-suite">NOSSO PRODUTO</span>
    <h2 className="benefits-title">Conheça a Plataforma</h2>
    <p className="benefits-desc">
      Unifique ferramentas, maximize resultados e simplifique sua gestão.<br />
      Veja como empresas modernas aceleram com nossa solução.
    </p>
    <div className="benefits-grid">
      {benefits.map((item, i) => (
        <div className="benefit-card" key={i}>
          <div className="benefit-icon">{item.icon}</div>
          <div className="benefit-info">
            <div className="benefit-title">{item.title}</div>
            <div className="benefit-subtitle">{item.subtitle}</div>
          </div>
          <div className="benefit-arrow">
            <svg width="24" height="24" fill="none" stroke="#2962ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 8l6 4-6 4"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Benefits;
