import React from 'react';
import Header from './components/Header';
import Headline from './components/Headline';

import Footer from './components/Footer';
import './styles/main.css';
import ValueSection from './components/ValueSection';
import PartnersCarousel from './components/PartnersCarousel';


import FounderCard from './components/FounderCard';
import ProvaViva from './components/ProvaViva';
import ImpactSection from './components/ImpactSection';
import ChamadaVideo from './components/ChamadaVideo';
// ...a a


//


const App = () => {
  return (
    <div>
      {/* Blobs de background para efeito visual */}
      <div className="fancy-bg-blur" />
      <div className="fancy-bg-blur2" />
      
      <Header />
      <Headline />
      <ProvaViva />
      <ChamadaVideo />
      <ValueSection />
      <ImpactSection />
      <FounderCard />
      <PartnersCarousel />
      <Footer />
    </div>
  );
};


export default App;