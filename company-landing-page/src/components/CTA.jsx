import React, { useState } from 'react';

const CTA = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // ação do formulário
  };

  return (
    <section className="section contact-form" style={{ textAlign: 'center' }}>
      <h2>Teste agora sua reputação!</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', maxWidth: 400 }}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 12 }}
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 12 }}
        />
        <br />
        <br />
        <button className="cta-button" type="submit" style={{ width: '100%' }}>
          Testar Agora
        </button>
      </form>
    </section>
  );
};

export default CTA;