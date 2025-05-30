import React, { useEffect, useState, useRef } from 'react';

// Parse e format igual ao anterior
const parseNumber = (value) => {
  if (value.includes("B")) return parseFloat(value) * 1_000_000_000;
  if (value.includes("M")) return parseFloat(value) * 1_000_000;
  if (value.includes("K")) return parseFloat(value) * 1_000;
  if (value.includes("$")) return parseFloat(value.replace(/[^\d.]/g, ""));
  return parseFloat(value);
};
const formatNumber = (original, current) => {
  if (original.includes("B")) return (current / 1_000_000_000).toFixed(2) + "B+";
  if (original.includes("M")) return (current / 1_000_000).toFixed(2) + "M+";
  if (original.includes("K")) return Math.floor(current / 1_000) + "K+";
  if (original.includes("$")) return "$" + current.toLocaleString() + (original.includes("B") ? "B+" : "+");
  return Math.floor(current) + "+";
};

const CountUpNumber = ({ value, startAnimation }) => {
  const [count, setCount] = useState(0);
  const end = parseNumber(value);

  useEffect(() => {
    if (!startAnimation) {
      setCount(0);
      return;
    }
    let start = 0;
    let duration = 2000;
    let startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(animate);
    return () => setCount(end);
  }, [end, startAnimation]);

  return <span>{formatNumber(value, count)}</span>;
};

const metrics = [
  {
    label: "Clientes Enterprise",
    value: "300+",
    color: "#28a5fa",
  },
  {
    label: "Dispositivos Analisados",
    value: "2.14B+",
    color: "#2962ff",
  },
  {
    label: "Pagamentos Monitorados",
    value: "385B+",
    color: "#28a5fa",
  },
];

const ValueSection = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); // só anima uma vez
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="value-section animated-section" ref={sectionRef}>
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
            <span className="metric-value" style={{ color: item.color }}>
              <CountUpNumber value={item.value} startAnimation={startAnimation} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueSection;
