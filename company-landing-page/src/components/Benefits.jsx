import React from 'react';

const benefits = [
  { icon: "🔒", title: "Segurança", desc: "Mais segurança para sua operação" },
  { icon: "⚡", title: "Agilidade", desc: "Menos fraude e chargeback" },
  { icon: "⭐", title: "Score Plug & Play", desc: "Score reputacional fácil de integrar" },
];

const Benefits = () => (
  <section className="section features-list">
    {benefits.map((b, i) => (
      <div className="feature-item" key={i}>
        <div style={{ fontSize: 32 }}>{b.icon}</div>
        <h3>{b.title}</h3>
        <p>{b.desc}</p>
      </div>
    ))}
  </section>
);

export default Benefits;