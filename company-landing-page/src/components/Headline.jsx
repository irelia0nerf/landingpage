import React, { useEffect, useState } from 'react';

const highlights = [
  "Onde a Reputação Vira Capital",
  "Confiabilidade Digital em Escala Global",
  "A infraestrutura de Confiança do Sistema Financeiro"
];

const TYPING_SPEED = 60; // ms por caractere
const ERASING_SPEED = 35;
const WAIT_AFTER_TYPING = 3000; // 3 segundos

const Headline = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  // Calcula o texto mais longo para minHeight
  const maxLenText = highlights.reduce((a, b) => a.length > b.length ? a : b);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < highlights[index].length) {
        timeout = setTimeout(() => {
          setDisplayed(highlights[index].slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setTyping(false), WAIT_AFTER_TYPING);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(highlights[index].slice(0, displayed.length - 1));
        }, ERASING_SPEED);
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % highlights.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index]);

  return (
    <section className="hero-section">
      <h1>
        FoundLab<br />
        <span
          className="highlight"
          style={{
            minHeight: "36px",
            display: "inline-block",
            verticalAlign: "bottom",
            whiteSpace: "nowrap",  // Não deixa quebrar a linha aqui!
            position: "relative",
          }}
        >
          {/* Span invisível reserva espaço para texto mais longo, inline e nowrap */}
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
          {/* Texto digitado por cima */}
          <span style={{ position: "relative", whiteSpace: "nowrap" }}>
            {displayed}
            <span className="typewriter-cursor" style={{ color: "#2962ff" }}>|</span>
          </span>
        </span>
      </h1>
      <p className="subtitle">
        Infraestrutura modular, compliance nativo, score invisível e trust layer real conectando TradFi e Web3.
        Pronto para o mundo. Pronto para você.
      </p>
      <button className="cta-btn">Comece agora</button>
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

export default Headline;
