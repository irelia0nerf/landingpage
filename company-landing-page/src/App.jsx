import React from 'react';
import Header from './components/Header';
import Headline from './components/Headline';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import DemoArea from './components/DemoArea';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles/main.css';

const App = () => {
  return (
    <div>
      <Header />
      <Headline />
      <Benefits />
      <HowItWorks />
      <DemoArea />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;