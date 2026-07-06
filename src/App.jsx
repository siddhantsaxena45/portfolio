import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import IronManPreloader from './components/IronManPreloader';
import NanoBackground from './components/NanoBackground';

function App() {
  const [preloading, setPreloading] = React.useState(true);

  return (
    <div className={`min-h-screen text-foreground font-sans selection:bg-accent selection:text-white ${preloading ? 'overflow-hidden h-screen' : 'overflow-x-hidden'}`}>
      <div className="fixed inset-0 bg-background -z-50 pointer-events-none" />
      {preloading && <IronManPreloader onComplete={() => setPreloading(false)} />}
      <NanoBackground />
      <div className="fixed inset-0 hud-grid opacity-10 -z-20 pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
      </main>
      <Contact />
    </div>
  );
}

export default App;
