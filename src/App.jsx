import React from 'react';
import Hero3D from './components/Hero3D';
import WorkGrid from './components/WorkGrid';
import AboutSection from './components/AboutSection';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-tight text-white/90">
            Art Director • Portfolio
          </a>
          <nav className="hidden gap-6 text-sm text-neutral-300 sm:flex">
            <a href="#work" className="hover:text-white">Lavori</a>
            <a href="#about" className="hover:text-white">Profilo</a>
            <a href="#contact" className="hover:text-white">Contatti</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/20">
            Parliamo
          </a>
        </div>
      </header>

      <main>
        <Hero3D />
        <WorkGrid />
        <AboutSection />
        <ContactCTA />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950/90 py-8 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} — Portfolio Art Director.
      </footer>
    </div>
  );
}

export default App;
