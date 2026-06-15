import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';
import Cursor from './components/Cursor';
import Loading from './components/Loading';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen gradient-bg text-zinc-150 overflow-x-hidden antialiased selection:bg-purple-500/30 selection:text-white">
      {/* Dynamic particles float background */}
      <ParticleCanvas />

      {/* Floating cursor element for desktop */}
      <Cursor />

      {/* Header navigation */}
      <Header />

      {/* Primary content layouts */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      {/* Global standard footer */}
      <Footer />
    </div>
  );
}
