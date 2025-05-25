import React from 'react';

const metrics = [
  {
    label: "Clientes Enterprise",
    value: "300+",
    color: "#28a5fa", // azul claro
  },
  {
    label: "Dispositivos Analisados",
    value: "2.14B+",
    color: "#2962ff", // azul principal do projeto
  },
  {
    label: "Pagamentos Monitorados",
    value: "$385B+",
    color: "#28a5fa", // azul claro
  },
];

const ValueSection = () => (
  <section className="value-section">
    <div className="value-headline value-headline--center">
      <h2>Nossa missão</h2>
      <p>
        Garantir confiança e transparência no sistema financeiro digital, conectando tecnologia e compliance para proteger instituições, negócios e usuários em escala global.
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
