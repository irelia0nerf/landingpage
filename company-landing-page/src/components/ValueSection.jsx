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
      <h2>The value of<br />one platform</h2>
      <p>
        Consolidate vendors, maximize your ROI, and streamline business operations.<br />
        See why Fortune 500 companies choose nossa plataforma over other risk vendors.
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
