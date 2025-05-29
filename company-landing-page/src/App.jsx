import React from 'react';
import Header from './components/Header';
import Headline from './components/Headline';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import DemoArea from './components/DemoArea';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles/main.css';
import ValueSection from './components/ValueSection';
import PartnersCarousel from './components/PartnersCarousel';

import Documentos from "./components/Documentos";
import Missao from "./components/Missao";
import FounderCard from './components/FounderCard';
import Prova from './components/Prova';
import ImpactSection from './components/ImpactSection';
import ProvaViva from './components/ProvaViva';
// ...a a


//


const App = () => {
  return (
    <div>
      <Header />
      <Headline />
      
      <ValueSection />
      <ProvaViva />
      <Prova />
      <ImpactSection />
      <FounderCard />
      <PartnersCarousel />
      <Footer />
    </div>
  );
};

export default App;