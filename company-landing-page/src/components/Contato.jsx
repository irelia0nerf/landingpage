import React from "react";
import Header from "../components/Header"; // ajuste o caminho se precisar
import Footer from "../components/Footer"; // ajuste o caminho se precisar

const Contato = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Header />
    <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", background: "#F6F8FA" }}>
      <iframe
        src="https://tally.so/r/wg18oP"
        width="100%"
        height="600"
        style={{ border: 'none', maxWidth: 540, minWidth: 320, margin: "32px 0", background: "#F6F8FA" }}
        title="Formulário de Contato"
        allow="fullscreen"
      ></iframe>
    </main>
    <Footer />
  </div>
);

export default Contato;
