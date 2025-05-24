import React from 'react';
import logo1 from '../images/logo1.png';

// Exemplo de array de logos (adicione o path dos seus SVGs/pngs)
const partners = [
  { name: "RMK", img: logo1 },
  { name: "Caliber Home Loans", img: logo1 },
  { name: "Pennymac", img: logo1 },
  { name: "Fairway", img: logo1 },
  { name: "Horizon Bank", img: logo1 },
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