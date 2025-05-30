import React, { useEffect, useRef } from "react";
import video from '../videos/videoprova.mp4';

const ChamadaVideo = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="chamada-video-section" ref={sectionRef}>
      <div className="chamada-video-content">
        <div className="chamada-video-textos">
          <h2 className="chamada-video-title">
            O Sistema Financeiro Evoluiu.<br />
            Seu Gerenciamento de Risco, Não.
          </h2>
          <p className="chamada-video-desc">
            Solucione seus maiores desafios de risco, compliance e monitoramento com inteligência, automação e integração em tempo real.
          </p>
        </div>
        <div className="chamada-video-midia">
          <video
            className="video-frame"
            src={video}
            controls
            muted // Importante: garante autoplay
            ref={videoRef}
            poster="/images/video-poster.png"
            playsInline // Melhora suporte mobile
          >
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </section>
  );
};

export default ChamadaVideo;
