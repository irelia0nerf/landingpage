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
        <span className="highlight" style={{ minHeight: 36, display: "inline-block" }}>
          {displayed}
          <span className="typewriter-cursor" style={{ color: "#2962ff" }}>|</span>
        </span>
      </h1>
      <p className="subtitle"></p>
      <button className="cta-btn">Comece agora</button>
      {/* Adicione este CSS em seu arquivo global ou componente */}
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
