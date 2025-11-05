import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Micro-interazioni',
    desc: 'Hover, press e focus di nuova generazione con feedback tattile visivo.'
  },
  {
    title: 'Parallassi soft',
    desc: 'Movimenti delicati che danno profondità senza compromettere la leggibilità.'
  },
  {
    title: 'Vetro e luci',
    desc: 'Glassmorphism e bagliori controllati per un’estetica premium.'
  }
];

const Showcase = () => {
  return (
    <section id="showcase" className="relative bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold sm:text-4xl"
          >
            Dettagli che incantano
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-neutral-300"
          >
            Ogni interazione è pensata per essere sensata, piacevole e memorabile.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_var(--x,50%)_var(--y,50%),rgba(244,114,182,0.08),transparent_40%)]" />
              <div className="relative">
                <h3 className="text-lg font-medium">{it.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{it.desc}</p>
              </div>
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
