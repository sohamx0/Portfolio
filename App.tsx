import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Tools from './components/Tools';
import InteractionShowcase from './components/InteractionShowcase';
import Collaboration from './components/Collaboration';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-background min-h-screen text-gray-200 selection:bg-accent selection:text-black overflow-hidden relative">
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-[-20%] translate-y-[-20%]" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10 translate-x-[20%] translate-y-[20%]" />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Tools />
        <InteractionShowcase />
        <Collaboration />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;