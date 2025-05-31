import React from 'react';
import Header from './components/Header';
import Headline from './components/Headline';

import Footer from './components/Footer';
import './styles/main.css';
import ValueMissionCard from './components/ValueMissionCard';
import PartnersCarousel from './components/PartnersCarousel';


import FounderCard from './components/FounderCard';
import ProvaViva from './components/ProvaViva';
import ImpactSection from './components/ImpactSection';
import ChamadaVideo from './components/ChamadaVideo';
import RoadmapDiferenciais from './components/RoadmapDiferenciais';
import HeroSection from './components/HeroB3Animada';
import LatentPainSection from './components/LatentPainSection';
// ...a a


//


const App = () => {
  return (
    <div>
      {/* Blobs de background para efeito visual */}
      <div className="fancy-bg-blur" />
      <div className="fancy-bg-blur2" />
      
      <Header />

{/*      <Headline /> */}
      <HeroSection />
      <ProvaViva />
  
      <ChamadaVideo />

      <LatentPainSection />

{/*      <RoadmapDiferenciais />  */}
      <ValueMissionCard />
      <ImpactSection />
      <FounderCard />
      <PartnersCarousel />
      <Footer />
    </div>
  );
};


export default App;