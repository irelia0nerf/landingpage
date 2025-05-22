import React from 'react';

const DemoArea = () => (
  <section className="section demo-area-card">
    <h3>Demonstração / Simulação</h3>
    <div className="demo-video-placeholder">
      {/* Substitua o src pelo link do seu vídeo real */}
      <iframe
        width="420"
        height="236"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Demonstração"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: 12, margin: '24px 0' }}
      ></iframe>
    </div>
  </section>
);

export default DemoArea;