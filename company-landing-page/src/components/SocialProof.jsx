import React from 'react';
import logo1 from '../images/logo1.png';

const feedbacks = [
  {
    img: logo1,
    text: '“A FoundLab revolucionou nossa análise de risco.”',
    company: 'Teste'
  },
  {
    img: logo1,
    text: '“Mais segurança e menos fraude no nosso dia a dia.”',
    company: 'Teste'
  },
  {
    img: logo1,
    text: '“Score reputacional fácil de integrar e confiável.”',
    company: 'Teste'
  }
];

const SocialProof = () => (
  <section className="section social-proof-cards">
    {feedbacks.map((f, i) => (
      <div className="social-proof-card" key={i}>
        <img src={f.img} alt={f.company} className="social-proof-img" />
        <div>
          <p className="social-proof-text">{f.text}</p>
          <span className="social-proof-company">{f.company}</span>
        </div>
      </div>
    ))}
  </section>
);

export default SocialProof;