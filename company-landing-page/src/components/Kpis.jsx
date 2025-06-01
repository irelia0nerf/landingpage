import React, { useEffect, useState } from "react";

// Lista de KPIs
const metrics = [
  { value: "300+", label: "Clientes Enterprise", duration: 1200 },
  { value: "2.14B+", label: "Dispositivos\nAnalisados", duration: 1500 },
  { value: "385.00B+", label: "Pagamentos\nMonitorados", duration: 1700 },
  { value: "1234567", label: "Wallets\nAnalisadas", duration: 1200 },
  { value: "15234", label: "Eventos de Risco\nIdentificados\n(Últimas 24h)", duration: 1100 },
];

// Parse e formatação
function parseValue(str) {
  if (typeof str === "number") return { num: str, suffix: "" };
  if (typeof str !== "string") return { num: 0, suffix: "" };
  let num = parseFloat(str.replace(/[^\d.]/g, ""));
  let suffix = "";
  if (/K/i.test(str)) { num *= 1_000; suffix = "K+"; }
  else if (/M/i.test(str)) { num *= 1_000_000; suffix = "M+"; }
  else if (/B/i.test(str)) { num *= 1_000_000_000; suffix = "B+"; }
  else if (/\+$/.test(str)) { suffix = "+"; }
  let decimals = 0;
  if (/\d+\.\d+/.test(str)) decimals = 2;
  return { num, suffix, decimals };
}

function CountUp({ value, duration = 1000 }) {
  const { num, suffix, decimals } = parseValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTimestamp = Date.now();
    function animate() {
      const now = Date.now();
      const elapsed = now - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (num - start) * progress;
      setDisplay(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(num);
      }
    }
    animate();
  }, [value, duration, num]);

  let formatted;
  if (suffix === "B+" || suffix === "M+" || suffix === "K+") {
    let divisor = 1;
    if (suffix === "B+") divisor = 1_000_000_000;
    if (suffix === "M+") divisor = 1_000_000;
    if (suffix === "K+") divisor = 1_000;
    formatted = (display / divisor).toLocaleString('pt-BR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) + suffix;
  } else if (suffix === "+") {
    formatted = Math.floor(display).toLocaleString('pt-BR') + "+";
  } else {
    formatted = Math.floor(display).toLocaleString('pt-BR');
  }

  return (
    <span className="kpi-metric-value">{formatted}</span>
  );
}

const Kpis = () => (
  <section className="kpi-section">
    <div className="kpi-card">
      {metrics.map((item, i) => (
        <div className="kpi-block" key={i}>
          <div className="kpi-metric">
            <CountUp value={item.value} duration={item.duration} />
          </div>
          <div className="kpi-label">
            {item.label.split('\n').map((l, idx) => (
              <div key={idx}>{l}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Kpis;
