import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Sparkles, Gauge } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Animazioni fluide',
    desc: 'Transizioni armoniose e micro-interazioni che guidano l’attenzione senza distrarre.'
  },
  {
    icon: Zap,
    title: 'Prestazioni',
    desc: 'Ottimizzazione attenta per garantire FPS stabili e caricamenti rapidissimi.'
  },
  {
    icon: Shield,
    title: 'Accessibilità',
    desc: 'Contrasti curati, focus states visibili e semantica a prova di screen reader.'
  },
  {
    icon: Gauge,
    title: 'Reattività',
    desc: 'Layout adattivi e interazioni perfette su mobile, tablet e desktop.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

const Features = () => {
  return (
    <section id="features" className="relative bg-neutral-950 py-24 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 h-[1px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Caratteristiche che fanno la differenza
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-2xl transition group-hover:bg-fuchsia-500/20" />
              <f.icon className="h-6 w-6 text-fuchsia-300" />
              <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
