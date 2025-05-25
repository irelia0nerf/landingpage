import React, { useRef, useEffect, useState } from "react";

const founders = [
  {
    name: "Alex Bolson",
    role: "Founder & CEO",
    desc: "Lidera a visão estratégica e o desenvolvimento dos produtos FoundLab. Formação em Direito e pós-graduação em Direito Financeiro. Experiência em JP Morgan.",
  },
  {
    name: "Fernanda Stumpf",
    role: "Head de Operações",
    desc: "Coordena a operação, compliance e melhoria dos processos internos. Especialista em gestão operacional e estruturação de rotinas para crescimento.",
  },
  {
    name: "Rafael Bado",
    role: "Head of Business",
    desc: "Responsável pela articulação de parcerias e relações institucionais. Atuação prévia em networking, negócios digitais e expansão de fintechs.",
  },
  {
    name: "Patrick Stegaribe",
    role: "Lead Developer",
    desc: "Desenvolve e integra as soluções tecnológicas da FoundLab. Foco em backend, APIs e automação para produtos financeiros.",
  },
  {
    name: "Advisors & Builders",
    role: "",
    desc: "Profissionais de tecnologia, regulação e integração financeira. Atuam conforme a demanda em projetos específicos e estratégicos.",
  },
];

const FounderCard = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.18 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Alex é o destaque, outros são linha de baixo
  const mainFounder = founders[0];
  const rest = founders.slice(1);

  return (
    <section className="founders-wrapper" ref={ref}>
      <h2 className="founders-title">EQUIPE</h2>
      <div className="founders-grid">
        <div className="founders-top">
          <div className={`founder-card${show ? " fade-in" : ""}`}>
            <div className="founder-info">
              <div className="founder-name">{mainFounder.name}</div>
              <div className="founder-role">{mainFounder.role}</div>
              <div className="founder-desc">{mainFounder.desc}</div>
            </div>
          </div>
        </div>
        <div className="founders-bottom">
          {rest.map((f, i) => (
            <div className={`founder-card${show ? " fade-in" : ""}`} key={f.name}>
              <div className="founder-info">
                <div className="founder-name">{f.name}</div>
                <div className="founder-role">{f.role}</div>
                <div className="founder-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderCard;
