import React from 'react';

const metrics = [
  {
    label: "Enterprise Customers",
    value: "300+",
    color: "#28a5fa", // azul claro
  },
  {
    label: "Devices Profiled",
    value: "2.14B+",
    color: "#2962ff", // azul principal do projeto
  },
  {
    label: "Payments Screened",
    value: "$385B+",
    color: "#28a5fa", // azul claro
  },
];

const ValueSection = () => (
  <section className="value-section">
    <div className="value-headline">
      <h2>Nossa missão</h2>
      <p>
        A missão da FoundLab é proteger e impulsionar instituições financeiras que operam na fronteira entre TradFi e Web3, oferecendo infraestrutura de reputação e risco em tempo real. Fornecemos o ScoreLab, motor de reputação híbrida e auditável, que integra dados on-chain, off-chain e comportamento transacional para análises precisas e adaptativas. Atendemos fintechs, bancos digitais e protocolos DeFi que precisam escalar com segurança, mitigar riscos e manter confiança em um ambiente financeiro cada vez mais complexo e exponencial. 
      </p>
    </div>
    <div className="value-metrics">
      {metrics.map((item, i) => (
        <div className="metric-item" key={i}>
          <span className="metric-label">{item.label}</span>
          <span className="metric-value" style={{ color: item.color }}>{item.value}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ValueSection;

 // DEIXAR A MISSÃO MAIS SIMPLES, TRAZER ALGUNS NUMERO SE POSSIVEL