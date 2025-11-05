import React from 'react';
import { motion } from 'framer-motion';

const suits = [
  { label: 'A', suit: '♠', color: 'text-slate-900', accent: 'from-amber-200/70 to-amber-100/30' },
  { label: 'K', suit: '♥', color: 'text-red-700', accent: 'from-rose-200/70 to-rose-100/30' },
  { label: 'Q', suit: '♦', color: 'text-red-700', accent: 'from-amber-200/70 to-amber-100/30' },
  { label: 'J', suit: '♣', color: 'text-slate-900', accent: 'from-emerald-200/70 to-emerald-100/30' },
  { label: '10', suit: '♠', color: 'text-slate-900', accent: 'from-amber-200/70 to-amber-100/30' },
  { label: '9', suit: '♥', color: 'text-red-700', accent: 'from-rose-200/70 to-rose-100/30' },
];

function PlayingCard({ label, suit, color = 'text-slate-900', accent = 'from-amber-200/60 to-amber-100/20' }) {
  return (
    <motion.div
      whileHover={{ y: -6, rotate: -1 }}
      whileTap={{ scale: 0.98 }}
      className="group relative aspect-[2.5/3.5] w-full cursor-pointer select-none rounded-xl border border-amber-300/70 bg-[#f9f6ef] shadow-[0_6px_24px_rgba(0,0,0,0.25)]"
    >
      {/* Double border */}
      <div className="absolute inset-1 rounded-lg border-2 border-amber-700/40" />
      {/* Corner indices */}
      <div className={`absolute left-2 top-2 text-xl font-bold leading-none ${color}`}>
        <div className="text-sm tracking-widest">{label}</div>
        <div className="-mt-0.5">{suit}</div>
      </div>
      <div className={`absolute bottom-2 right-2 rotate-180 text-xl font-bold leading-none ${color}`}>
        <div className="text-sm tracking-widest">{label}</div>
        <div className="-mt-0.5">{suit}</div>
      </div>
      {/* Center motif */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative grid place-items-center">
          {/* radial rays */}
          <div
            className={`pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-b ${accent} opacity-70 blur-[6px]`}
          />
          <div className="pointer-events-none absolute h-28 w-28 rounded-full border border-amber-800/40" />
          <div className="pointer-events-none absolute h-16 w-16 rounded-full border border-amber-800/40" />
          <div className={`relative grid place-items-center ${color}`}>
            <div className="text-6xl drop-shadow-[0_1px_0_rgba(255,255,255,0.65)]">{suit}</div>
            <div className="mt-2 text-[10px] tracking-[0.35em] text-amber-700/70">ART • DECO</div>
          </div>
        </div>
      </div>
      {/* Deco corners */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1 top-1 h-4 w-8 border-l-2 border-t-2 border-amber-800/50" />
        <div className="absolute right-1 top-1 h-4 w-8 border-r-2 border-t-2 border-amber-800/50" />
        <div className="absolute bottom-1 left-1 h-4 w-8 border-b-2 border-l-2 border-amber-800/50" />
        <div className="absolute bottom-1 right-1 h-4 w-8 border-b-2 border-r-2 border-amber-800/50" />
      </div>
    </motion.div>
  );
}

export default function CardShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg md:text-xl tracking-[0.35em] uppercase text-amber-200/90">Collezione</h2>
        <div className="flex items-center gap-2 text-amber-300/90">
          <span className="h-px w-10 bg-amber-400/60" />
          <span className="text-sm">Edizione Royale</span>
          <span className="h-px w-10 bg-amber-400/60" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
        {suits.map((c, i) => (
          <PlayingCard key={i} label={c.label} suit={c.suit} color={c.color} accent={c.accent} />)
        )}
      </div>
    </section>
  );
}
