import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold"
        >
          Prontə a creare esperienze memorabili?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-neutral-300"
        >
          Porta il tuo prodotto a un altro livello con motion design, 3D e cura dei dettagli.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 font-medium text-neutral-900 shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
          >
            Crea con noi
          </a>
          <a
            href="#features"
            className="rounded-xl bg-white/5 px-6 py-3 font-medium text-white ring-1 ring-white/15 backdrop-blur-sm transition hover:bg-white/10"
          >
            Scopri di più
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
