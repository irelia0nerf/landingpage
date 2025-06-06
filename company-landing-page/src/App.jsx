import React, { useEffect } from 'react';
import Header from './components/Header';

import Footer from './components/Footer';
import './styles/main.css';
import ValueMissionCard from './components/ValueMissionCard';
import PartnersCarousel from './components/PartnersCarousel';


import FounderCard from './components/FounderCard';
import ProvaViva from './components/ProvaViva';
import ImpactSection from './components/ImpactSection';
import ChamadaVideo from './components/ChamadaVideo';
import HeroSection from './components/HeroB3Animada';
import LatentPainSection from './components/LatentPainSection';

import OQueFazemos from './components/OQueFazemos';
import Diferenciais from './components/Diferenciais';
import ComoFunciona from './components/ComoFunciona';
import SobreNos from './components/SobreNos';
import Kpis from './components/Kpis';


// ...a a


//


const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const blur1 = document.querySelector('.fancy-bg-blur');
      const blur2 = document.querySelector('.fancy-bg-blur2');
      if (blur1) blur1.style.transform = `translateY(${y * 0.2}px)`;
      if (blur2) blur2.style.transform = `translateY(${-y * 0.15}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{position: 'relative', minHeight: '100vh', overflowX: 'hidden'}}>
      {/* Blobs de background para efeito visual */}
      <div className="fancy-bg-blur" />
      <div className="fancy-bg-blur2" />
      
      <Header />


      <HeroSection />

      <PartnersCarousel />
      
      <OQueFazemos />
      <Kpis />
      <Diferenciais />

      <section className="chamada-video-section chamada-video-bg">

           <ChamadaVideo />

      </section>

 
      
      <ComoFunciona />

      <ImpactSection />
      <SobreNos />
      
      <FounderCard />
      
  {/*     
      
      <LatentPainSection />
      <ValueMissionCard />
      
      
      <ProvaViva /> */}
      
      <Footer />
    </div>
  );
};


export default App;