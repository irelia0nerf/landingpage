import React from "react";

const ChamadaVideo = () => (
  <section className="chamada-video-section">
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
          src="/videos/teu-video.mp4" // Coloque o caminho do vídeo desejado aqui!
          controls
          poster="/images/video-poster.png" // imagem de fallback (opcional)
        >
          Seu navegador não suporta vídeo.
        </video>
      </div>
    </div>
  </section>
);

export default ChamadaVideo;
