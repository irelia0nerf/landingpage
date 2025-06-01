import React, { useEffect, useState, useRef } from 'react';

// Dados para o componente
const diferenciaisData = [
  '2.100 wallets únicas analisadas e auditadas',
  'ZERO incidentes de vazamento ou comprometimento de dados reportados',
  '34 incidentes de risco real detectados e bloqueados antes do prejuízo',
  'Compliance: 100% compatível com LGPD, padrões Open Finance e requisitos de auditoria independente',
];

const impactoKpisData = [
  {
    label: 'Movimentações monitoradas',
    value: 'R$19,8B+', // Atualizado para seguir o padrão financeiro (bilhões)
    description: 'movimentações monitoradas com score e flags automáticas.',
    isNumeric: true,
  },
  {
    label: 'Uptime da nossa API em produção',
    value: '98,7%',
    description: 'uptime comprovado em produção real.',
    isNumeric: true, // Permite animar o percentual
  },
  {
    label: 'Requisições API processadas',
    value: '36.970+',
    description: 'requisições API processadas em ambiente de produção (2024).',
    isNumeric: true,
  },
];

// Funções utilitárias
const parseNumber = (value) => {
  const valStr = String(value).replace(/\s/g, "");
  if (valStr.includes("B")) return parseFloat(valStr.replace(/[^\d.,]/g, "").replace(",", ".")) * 1_000_000_000;
  if (valStr.includes("M")) return parseFloat(valStr.replace(/[^\d.,]/g, "").replace(",", ".")) * 1_000_000;
  if (valStr.includes("K")) return parseFloat(valStr.replace(/[^\d.,]/g, "").replace(",", ".")) * 1_000;
  if (valStr.includes("R$")) return parseFloat(valStr.replace(/[^\d.,]/g, "").replace(",", "."));
  if (valStr.endsWith("%")) return parseFloat(valStr.replace("%", "").replace(",", "."));
  return parseFloat(valStr.replace(/[^\d.]/g, ""));
};

const formatNumber = (originalValue, currentValue) => {
  const originalStr = String(originalValue);

  // Para valores em bilhões/milhões/etc
  if (originalStr.includes("B")) return "R$" + (currentValue / 1_000_000_000).toFixed(1) + "B+";
  if (originalStr.includes("M")) return "R$" + (currentValue / 1_000_000).toFixed(1) + "M+";
  if (originalStr.includes("K")) return Math.floor(currentValue / 1_000) + "K+";
  if (originalStr.includes("R$")) return "R$" + currentValue.toLocaleString("pt-BR", {maximumFractionDigits: 0}) + (originalStr.endsWith("+") ? "+" : "");
  if (originalStr.endsWith("%")) return currentValue.toFixed(1).replace('.', ',') + "%";
  if (originalStr.endsWith("+")) return Math.floor(currentValue) + "+";
  return String(Math.floor(currentValue));
};

const CountUpNumber = ({ originalValue, startAnimation }) => {
  const [count, setCount] = useState(0);
  const end = parseNumber(originalValue);

  useEffect(() => {
    if (!startAnimation) {
      setCount(0);
      return;
    }
    let start = 0;
    const duration = 2000; // 2 segundos
    let startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      if (String(originalValue).endsWith("%")) {
        setCount(parseFloat((progress * end).toFixed(1)));
      } else {
        setCount(Math.floor(progress * end));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    requestAnimationFrame(animate);

    return () => setCount(end);
  }, [end, originalValue, startAnimation]);

  return <span>{formatNumber(originalValue, count)}</span>;
};

// Componente principal
const ImpactSection = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="kpis" className="impact-section-container animated-section" ref={sectionRef}>
      <div className="impact-grid">
        <div className="impact-column diferenciais-column">
          <h3 className="impact-column-title">Diferenciais</h3>
          <ul className="diferenciais-list">
            {diferenciaisData.map((item, index) => (
              <li key={index} className="diferenciais-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="impact-column kpis-column">
          <h3 className="impact-column-title">Impacto Real: KPIs que Demonstram Valor</h3>
          <div className="kpis-showcase">
            {impactoKpisData.map((kpi, index) => (
              <div key={index} className="kpi-item">
                <span className="kpi-item-label">{kpi.label}:</span>
                <span className="kpi-item-value">
                  {kpi.isNumeric ? (
                    <CountUpNumber originalValue={kpi.value} startAnimation={startAnimation} />
                  ) : (
                    kpi.value
                  )}
                </span>
                <p className="kpi-item-description">{kpi.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
