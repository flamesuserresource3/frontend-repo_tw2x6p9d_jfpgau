import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          aria-label="Futuristic floating glassmorphic AI animation"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/20 to-neutral-950/80" />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-fuchsia-300" />
          <span className="text-sm text-neutral-200">Esperienza ultra fluida con animazioni 3D</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
        >
          UX pazzesca, estetica futuristica
          <span className="block bg-gradient-to-r from-fuchsia-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            potenziata dall'AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-neutral-300"
        >
          Interazioni morbide, micro-animazioni reattive e un tocco 3D per stupire gli utenti. Ottimizzato per performance e accessibilità.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/20"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            Inizia ora
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-900/60 px-6 py-3 text-neutral-100 ring-1 ring-white/10 backdrop-blur-md transition hover:bg-neutral-800/80"
          >
            Guarda la magia
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
