import React from "react";

const today = new Date();
const lastUpdate = today.toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
});

const documentos = [
  { name: "Política de Privacidade", url: "/docs/politica-de-privacidade.pdf" },
  { name: "Termos de Uso", url: "/docs/termos-de-uso.pdf" },
  { name: "Compliance", url: "/docs/compliance.pdf" },
];

const Footer = () => (
  <footer className="footer-main">
    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-company">FoundLab.cloud</div>
        <div className="footer-links">
          <a href="mailto:domains@foundlab.cloud" className="footer-link">domains@foundlab.cloud</a>
          <a href="mailto:founder@foundlab.cloud" className="footer-link">founder@foundlab.cloud</a>
          <a href="https://www.linkedin.com/company/foundlabcloud/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="footer-update">Última atualização: {lastUpdate}</div>
      </div>

      <div className="footer-section">
        <div className="footer-title">Institucional</div>
        <ul className="footer-docs">
          {documentos.map((doc, idx) => (
            <li key={idx}><a href={doc.url} className="footer-link" target="_blank" rel="noopener noreferrer">{doc.name}</a></li>
          ))}
        </ul>
      </div>

      <div className="footer-section footer-seal">
        Aplicante no Google for Startups Cloud Program
      </div>
    </div>
    <div className="footer-bottom">
      © {today.getFullYear()} FoundLab.cloud. Todos os direitos reservados.
    </div>
  </footer>
);

export default Footer;
