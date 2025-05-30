import React, { useEffect, useState } from "react";

// Ícones SVG sóbrios (azul/cinza/ciano, institucional)
const icons = {
  fraud: (
    <span className="lp-icon-bg" style={{ background: "#EDF2F6" }}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="15" fill="#EDF2F6" />
        <text x="50%" y="61%" textAnchor="middle" fontSize="20" fill="#0067B3" fontWeight="bold">!</text>
      </svg>
    </span>
  ),
  op: (
    <span className="lp-icon-bg" style={{ background: "#E3F7F6" }}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="15" fill="#E3F7F6" />
        <text x="50%" y="63%" textAnchor="middle" fontSize="17" fill="#009D9A" fontWeight="bold">%</text>
      </svg>
    </span>
  ),
  timer: (
    <span className="lp-icon-bg" style={{ background: "#E3F7F6" }}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="15" fill="#E3F7F6" />
        <text x="50%" y="63%" textAnchor="middle" fontSize="16" fill="#009D9A" fontWeight="bold">⏱</text>
      </svg>
    </span>
  ),
  lock: (
    <span className="lp-icon-bg" style={{ background: "#FFF6D4" }}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="15" fill="#FFF6D4" />
        <text x="50%" y="65%" textAnchor="middle" fontSize="15" fill="#FFC84B" fontWeight="bold">🔒</text>
      </svg>
    </span>
  ),
};

// Barra de confiança sóbria
const ConfiaBar = ({ value, label, color }) => (
  <div className="lp-bar-group">
    <div className="lp-bar-label">{label}</div>
    <div className="lp-bar-bg">
      <div
        className="lp-bar-inner"
        style={{
          width: `${value}%`,
          background: color,
        }}
      />
      <span className="lp-bar-value" style={{ color }}>{value}</span>
    </div>
  </div>
);

const LatentPainSection = () => {
  const [fraud, setFraud] = useState(0);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    // Animação de números sóbria
    let f = 0, c = 0;
    const fraudGoal = 43, costGoal = 75;
    const interval = setInterval(() => {
      if (f < fraudGoal) setFraud(f += 1);
      if (c < costGoal) setCost(c += 1);
      if (f >= fraudGoal && c >= costGoal) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="lp-section animated-section">
      <div className="lp-container">
        <h2 className="lp-title">
          <span>A Dor Latente:</span>{" "}
          <span className="lp-title-highlight">Custo da Desconfiança Digital</span>
        </h2>
        <p className="lp-desc">
          Quando a confiança falha, os custos são reais e mensuráveis. Veja o impacto da desconfiança na economia digital.
        </p>
        <div className="lp-grid">
          {/* Card: Fraudes Crescentes */}
          <div className="lp-card animated-card">
            <div className="lp-card-head">
              {icons.fraud}
              <span className="lp-card-title">Fraudes Crescentes</span>
              <span className="lp-fraude">+{fraud}%</span>
            </div>
            <svg width="92" height="38" viewBox="0 0 92 38" className="lp-bar-graph" style={{ margin: "18px 0 12px 0" }}>
              <BarGroup fraud={fraud} />
            </svg>
            <div className="lp-card-desc">
              Fraudes digitais cresceram 43% no último ano, com perdas estimadas em $10.5 bilhões somente no setor financeiro.
            </div>
          </div>
          {/* Card: Custo Operacional */}
          <div className="lp-card animated-card">
            <div className="lp-card-head">
              {icons.op}
              <span className="lp-card-title">Custo Operacional</span>
            </div>
            <div className="lp-pie">
              <span className="lp-pie-value">{cost}%</span>
            </div>
            <div className="lp-card-desc">
              75% das instituições financeiras reportam aumento nos custos operacionais devido a processos manuais de verificação e compliance.
            </div>
          </div>
          {/* Card: Tempo de Resposta */}
          <div className="lp-card animated-card">
            <div className="lp-card-head">
              {icons.timer}
              <span className="lp-card-title">Tempo de Resposta</span>
            </div>
            <div className="lp-tempo">
              <span className="lp-tempo-atual">72h</span>
              <span className="lp-tempo-arrow">→</span>
              <span className="lp-tempo-novo">5min</span>
            </div>
            <div className="lp-card-desc">
              O tempo médio para detecção de atividades suspeitas é de 72 horas. Com automação inteligente, reduzimos para minutos.
            </div>
          </div>
          {/* Card: Confiança do Consumidor */}
          <div className="lp-card animated-card">
            <div className="lp-card-head">
              {icons.lock}
              <span className="lp-card-title">Confiança do Consumidor</span>
            </div>
            <div className="lp-bar-anim-wrap">
              <ConfiaBar  label="CONFIANÇA" color="#009D9A" />
              <ConfiaBar  label="DESCONFIANÇA" color="#FF9245" />
            </div>
            <div className="lp-card-desc">
              Apenas 62% dos consumidores confiam em plataformas financeiras digitais, criando uma barreira significativa para adoção.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Barras SVG institucionais
function BarGroup({ fraud }) {
  // Barra sóbria: azul e cinza, última barra crescente animada
  const base = [12, 18, 28, 36, Math.max(12, 12 + fraud * 0.56)];
  const color = ["#0053B3", "#0053B3", "#009D9A", "#009D9A", "#D63649"];
  return (
    <>
      {base.map((h, i) => (
        <rect
          key={i}
          x={6 + i * 17}
          y={38 - h}
          width={12}
          height={h}
          rx={3}
          fill={color[i]}
          style={{ transition: `all 0.7s cubic-bezier(.44,1.7,.51,.98)` }}
        />
      ))}
    </>
  );
}

export default LatentPainSection;
