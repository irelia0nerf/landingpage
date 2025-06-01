import React from 'react';

const steps = [
  {
    icon: (
      // Ícone de Integração (plug)
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" fill="#F6F8FA" stroke="#3BB273" strokeWidth="2"/>
        <rect x="14" y="19" width="16" height="6" rx="3" fill="#4F83CC"/>
        <rect x="19" y="16" width="6" height="12" rx="3" fill="#0033A0"/>
      </svg>
    ),
    title: "Integração de dados",
    desc: "Conecte rapidamente bancos, fintechs, ERPs e plataformas via API, SFTP ou arquivos.",
  },
  {
    icon: (
      // Ícone de Processamento (engrenagem/analytics)
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" fill="#F6F8FA" stroke="#0033A0" strokeWidth="2"/>
        <rect x="13" y="28" width="4" height="8" rx="2" fill="#4F83CC"/>
        <rect x="20" y="20" width="4" height="16" rx="2" fill="#3BB273"/>
        <rect x="27" y="24" width="4" height="12" rx="2" fill="#0033A0"/>
        <circle cx="22" cy="12" r="4" fill="#4F83CC"/>
      </svg>
    ),
    title: "Processamento & análise",
    desc: "Aplicamos inteligência e compliance automático para detectar riscos e oportunidades em tempo real.",
  },
  {
    icon: (
      // Ícone de Decisão (check/AI)
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" fill="#F6F8FA" stroke="#3BB273" strokeWidth="2"/>
        <path d="M15 22.5l6 6 8-12" stroke="#0033A0" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Decisão automatizada",
    desc: "Resultados prontos para aprovação, bloqueio ou auditoria — tudo auditável e seguro.",
  },
];

const ComoFunciona = () => (
  <section id="como-funciona" className="como-funciona-section">
    <h2 className="como-funciona-title">Como funciona</h2>
    <div className="como-funciona-steps">
      {steps.map((step, i) => (
        <div className="como-funciona-step" key={i}>
          <div className="como-funciona-icon">{step.icon}</div>
          <div className="como-funciona-step-title">{step.title}</div>
          <div className="como-funciona-step-desc">{step.desc}</div>
          {/* Flecha entre os steps (não no último) */}
          {i < steps.length - 1 && (
            <span className="como-funciona-arrow">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <path d="M10 16h12M18 12l4 4-4 4" stroke="#0033A0" strokeWidth="2" fill="none" />
              </svg>
            </span>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default ComoFunciona;
