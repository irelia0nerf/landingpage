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
// ...a a


//


const App = () => {
  return (
    <div>
      <Header />
      <Headline />
      <PartnersCarousel />
{ /*  <Benefits />  */ }
      <ValueSection />
      <Documentos />
{ /*      <HowItWorks />
      <DemoArea /> */ }
      <FounderCard />
{ /*      <CTA /> */ }
      <Footer />
    </div>
  );
};

export default App;