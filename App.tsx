
import React, { useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Portfolio from './components/Portfolio.tsx';
import Testimonials from './components/Testimonials.tsx';
import Impact from './components/Impact.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import ScrollProgressBar from './components/ScrollProgressBar.tsx';
import { config } from './data/config.ts';

function App() {
  useEffect(() => {
    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (favicon) {
      favicon.href = config.site.logoUrl;
    }
  }, []);

  return (
    <div className="bg-dark-bg text-text-secondary font-body overflow-x-hidden">
      <ScrollProgressBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;