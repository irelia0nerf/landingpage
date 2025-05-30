import React from "react";

const features = [
  {
    title: "ScoreLab",
    desc: "Motor central de reputação plugável e auditável."
  },
  {
    title: "Dynamic Flag Council",
    desc: "Governança de flags e regras com feedback loop real."
  },
  {
    title: "SigilMesh",
    desc: "NFTs de reputação cross-chain e compliance plugável."
  }
];

const RoadmapDiferenciais = () => (
  <section className="roadmap-section animated-section">
    <h2 className="roadmap-title">Roadmap & Diferenciais</h2>
    <div className="roadmap-timeline">
      {/* Linha central do roadmap */}
      <div className="roadmap-timeline-line"></div>
      {features.map((f, i) => (
        <div className="roadmap-step" key={i} style={{ animationDelay: `${i * 0.16 + 0.15}s` }}>
          <div className="roadmap-dot-animated"></div>
          <div className="roadmap-content">
            <div className="roadmap-step-title">{f.title}</div>
            <div className="roadmap-step-desc">{f.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default RoadmapDiferenciais;
