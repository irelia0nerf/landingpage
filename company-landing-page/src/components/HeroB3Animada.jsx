import React, { useState, useEffect } from 'react';

// ======= Configuração do texto que digita =======
const highlightLines = [
  "A infraestrutura de Confiança do Sistema Financeiro",
  "A base para a confiança digital em escala",
  "Onde reputação vira capital no mercado moderno"
];
const TYPING_SPEED = 55;
const ERASING_SPEED = 28;
const WAIT_AFTER_TYPING = 2100;

// ======= Métricas =======
const metrics = [
  { value: "300+", label: "Clientes Enterprise", duration: 1200 },
  { value: "2.14B+", label: "Dispositivos Analisados", duration: 1500 },
  { value: "385.00B+", label: "Pagamentos Monitorados", duration: 1700 },
  { value: "1234567", label: "Wallets Analisadas", duration: 1200 },
  { value: "15234", label: "Eventos de Risco Identificados (Últimas 24h)", duration: 1100 },
];

// Utilitário para parsear e animar qualquer tipo de número
function parseValue(str) {
  if (typeof str === "number") return { num: str, suffix: "" };
  if (typeof str !== "string") return { num: 0, suffix: "" };

  let num = parseFloat(str.replace(/[^\d.]/g, ""));
  let suffix = "";
  if (/K/i.test(str)) { num *= 1_000; suffix = "K+"; }
  else if (/M/i.test(str)) { num *= 1_000_000; suffix = "M+"; }
  else if (/B/i.test(str)) { num *= 1_000_000_000; suffix = "B+"; }
  else if (/\+$/.test(str)) { suffix = "+"; }

  // Detecta casas decimais (para exibir com 2 casas em B/M)
  let decimals = 0;
  if (/\d+\.\d+/.test(str)) decimals = 2;

  return { num, suffix, decimals };
}

// Componente animador
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
    // eslint-disable-next-line
  }, [value, duration]);

  // Formatação para números grandes/sufixos
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
    <span className="hero-b3-metric-value">
      {formatted}
    </span>
  );
}

// ======= Hero principal =======
const HeroB3Animada = () => {
  // Typing effect
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  // Reserva espaço para maior linha
  const maxLenText = highlightLines.reduce((a, b) => a.length > b.length ? a : b);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < highlightLines[index].length) {
        timeout = setTimeout(() => {
          setDisplayed(highlightLines[index].slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setTyping(false), WAIT_AFTER_TYPING);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(highlightLines[index].slice(0, displayed.length - 1));
        }, ERASING_SPEED);
      } else {
        setTyping(true);
        setIndex(prev => (prev + 1) % highlightLines.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index]);

  return (
    <section className="hero-b3-animada">
      <div className="hero-b3-content">
        <h1 className="hero-b3-title">
          <span style={{ color: "#144399" }}>FoundLab</span>
        </h1>
        <span
          className="hero-b3-highlight"
          style={{
            position: "relative",
            minHeight: "46px",
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          {/* Span invisível para não quebrar layout */}
          <span
            style={{
              opacity: 0,
              position: "absolute",
              left: 0,
              pointerEvents: "none",
              userSelect: "none",
              fontWeight: "inherit",
              fontSize: "inherit",
              fontFamily: "inherit",
              whiteSpace: "nowrap",
            }}
            aria-hidden="true"
          >
            {maxLenText}
          </span>
          {/* Texto digitado */}
          <span style={{ position: "relative", whiteSpace: "nowrap" }}>
            {displayed}
            <span
              className="typewriter-cursor"
              style={{ color: "#144399", fontWeight: 900 }}
            >
              |
            </span>
          </span>
        </span>

        <p className="hero-b3-description justified-montserrat">
          ScoreLab em tempo real. Governança DFC auditável.<br />
          Riscos mitigados antes que virem perdas.<br />
          Construímos a infraestrutura de reputação que o futuro exige – e provamos isso ao vivo.
        </p>

        {/* MÉTRICAS EM LINHA */}
        <div className="hero-b3-metrics-container">
          <div className="hero-b3-metrics-card hero-b3-metrics-card--inline">
            {metrics.map((item, i) => (
              <div className="hero-b3-metrics-block" key={i}>
                <CountUp value={item.value} duration={item.duration || 1200} />
                <div className="hero-b3-metric-label">
                  {item.label.split('\n').map((l, idx) => (
                    <div key={idx}>{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <h1 className='text-green-institucional'>Teste e Comprove</h1>

        <div className="hero-b3-cta-buttons">
          <button className="hero-b3-cta">
            Explore a Prova Viva ScoreLab
          </button>
          <button className="hero-b3-cta-outline">
            Agendar Demo Estratégica
          </button>
        </div>
      </div>

      {/* CSS temporário para cursor */}
      <style>{`
        .typewriter-cursor {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroB3Animada;
