import React, { useEffect, useRef } from 'react';

const ValueMissionCard = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    // Trigger a CSS class for fade/translateY on enter
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('fade-in-up');
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll);
    // Run on mount
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="value-mission-section">
      <div className="value-mission-card" ref={cardRef}>
        <h2>Nossa missão</h2>
        <p>
          Garantir confiança e transparência no sistema financeiro digital, conectando tecnologia e compliance para proteger instituições, negócios e usuários em escala global.
        </p>
      </div>
    </section>
  );
};

export default ValueMissionCard;
