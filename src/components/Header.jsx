import React from 'react';

export default function Header() {
  return (
    <header className="w-full pt-10 pb-6">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="inline-flex items-center gap-3 text-amber-400/90">
          <span className="h-px w-10 bg-amber-400/60" />
          <span className="text-sm tracking-[0.35em] uppercase">Atelier</span>
          <span className="h-px w-10 bg-amber-400/60" />
        </div>
        <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-widest text-amber-300 drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
          Deco Carte
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-amber-100/80 leading-relaxed">
          Un tocco Art Decò ispirato ai giochi di carte: bordi geometrici, accenti dorati e un fascino d\'altri tempi.
        </p>
      </div>
    </header>
  );
}
