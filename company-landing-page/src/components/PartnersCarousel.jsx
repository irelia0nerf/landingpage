import React from 'react';
import parceiro1 from '../images/parceiro1.png';
import parceiro2 from '../images/parceiro2.png';
import parceiro3 from '../images/parceiro3.png';
import parceiro4 from '../images/parceiro4.png';
import parceiro5 from '../images/parceiro5.png';
import parceiro6 from '../images/parceiro6.png';
import parceiro7 from '../images/parceiro7.png';
import parceiro8 from '../images/parceiro8.png';
import parceiro9 from '../images/parceiro9.png';

// Exemplo de array de logos (adicione o path dos seus SVGs/pngs)
const partners = [
  { name: "Supabase", img: parceiro1 },
  { name: "Google Cloud", img: parceiro2 },
  { name: "Stripe", img: parceiro3 },
  { name: "AWS", img: parceiro4 },
  { name: "Chainlink", img: parceiro5 },
  { name: "GitHub", img: parceiro6 },
  { name: "Vercel", img: parceiro7 },
  { name: "Banco Open", img: parceiro8 },
  { name: "Polygon", img: parceiro9 },

];

const allPartners = [...partners, ...partners];

const PartnersCarousel = () => (
  <section className="partners-section">
    <div className="partners-headline">
      NOSSOS PARCEIROS
    </div>
    <div className="partners-carousel-outer">
      <div className="partners-carousel-track">
        {allPartners.map((partner, i) => (
          <div className="partner-logo" key={i} title={partner.name}>
            <img src={partner.img} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersCarousel;