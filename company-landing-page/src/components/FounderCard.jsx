import React, { useRef, useEffect, useState } from "react";
import founderImg from "../images/founder.png"; // ajuste o caminho da imagem

const FounderCard = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (

    
    <section className="founder-section" ref={ref}>
        
      <div className={`founder-card ${show ? "fade-in" : ""}`}>
        <div className="founder-info">
          <div className="founder-name">Alex Bolson</div>
          <div className="founder-role">Founder</div>
        </div>
      </div>

        <div className={`founder-card ${show ? "fade-in" : ""}`}>
        <div className="founder-info">
          <div className="founder-name">Fernanda Stumpf</div>
          <div className="founder-role">Diretora</div>
        </div>
      </div>

            <div className={`founder-card ${show ? "fade-in" : ""}`}>
        <div className="founder-info">
          <div className="founder-name">Rafael Bado</div>
          <div className="founder-role">Founder</div>
        </div>
      </div>

            <div className={`founder-card ${show ? "fade-in" : ""}`}>
        <div className="founder-info">
          <div className="founder-name">Patrick Stegaribe</div>
          <div className="founder-role">Desenvolvimento</div>
        </div>
      </div>
    </section>
  );
};

export default FounderCard;
