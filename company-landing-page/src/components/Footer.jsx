import React from "react";

const today = new Date();
const lastUpdate = today.toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
});

const Footer = () => (
  <footer className="footer-main">
    <div className="footer-flex">
      <div className="footer-info">
        <div className="footer-company">
          <strong>FoundLab.cloud</strong>
        </div>
        <div className="footer-links">
          <a href="mailto:domains@foundlab.cloud" className="footer-link">
            domains@foundlab.cloud
          </a>
          <span className="footer-sep">|</span>
          <a href="mailto:founder@foundlab.cloud" className="footer-link">
            founder@foundlab.cloud
          </a>
          <span className="footer-sep">|</span>
          <a
            href="https://www.linkedin.com/company/foundlabcloud/"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="footer-update">
          Última atualização: {lastUpdate}
        </div>
      </div>

      <div>
        <strong>Institucional</strong>
        div
        <a href="">teste1</a>
        <a href="">teste2</a>
        <a href="">teste3</a>
      </div>

      <div className="footer-seal">
        Aplicante no Google for Startups Cloud Program
      </div>
    </div>
    <div className="footer-copyright">
      © {today.getFullYear()} FoundLab.cloud. Todos os direitos reservados.
    </div>
  </footer>
);

export default Footer;
