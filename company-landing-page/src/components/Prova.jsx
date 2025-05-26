import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";


const images = [
  img1,
  img2,
  img3,
  img4
];

const Prova = () => (
    
  <section className="prova-section">
    <div className="prova-grid">
      {images.map((src, i) => (
        <div className="prova-item" key={i}>
          <img src={src} alt={`Prova ${i + 1}`} />
        </div>
      ))}
    </div>
  </section>
);

export default Prova;
