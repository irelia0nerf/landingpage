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
    title: "Inteligência Preditiva e Adaptativa com IA",
    desc: "Nosso motor P(x) é o núcleo matemático-probabilístico que calcula riscos e reputação com precisão inédita, utilizando modelagem bayesiana adaptativa. Ele aprende e recalibra em produção, garantindo decisões justificáveis e auditáveis em tempo real.",
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
    title: "Infraestrutura Modular e Orquestrada (Plug-and-Play)",
    desc: "Entregamos uma arquitetura robusta e flexível via APIs e módulos, que se integra sem fricção em qualquer ambiente (TradFi ou Web3). Essa orquestração inteligente garante escalabilidade, alta performance e customização para suas operações críticas.",
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
    title: "Conectividade e Credibilidade Unificada (Web2 <> Web3)",
    desc: "Somos especialistas em unir a análise de risco e reputação de dados on-chain e off-chain. Proporcionamos uma visão holística e sem lacunas da credibilidade do usuário, permitindo operar com segurança e conformidade em toda a economia digital, sem fronteiras.",
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
