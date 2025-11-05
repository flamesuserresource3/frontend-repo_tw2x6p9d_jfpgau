import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    id: 1,
    client: 'Nike',
    role: 'Art Direction',
    year: '2024',
    title: 'Move Without Limits',
    description:
      'Campagna integrata per lanciare una nuova linea running. Key visual modulare, OOH, digital e spot 20”.',
    tags: ['OOH', 'Digital', 'KV'],
    cover:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 2,
    client: 'Spotify',
    role: 'Creative Direction',
    year: '2023',
    title: 'Your Year, Your Sound',
    description:
      'Attivazione social e DOOH data-driven per celebrare gli ascolti dell’anno. Sistema tipografico dinamico.',
    tags: ['DOOH', 'Social', 'Brand'],
    cover:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 3,
    client: 'IKEA',
    role: 'Art Direction',
    year: '2022',
    title: 'Home Playground',
    description:
      'Shooting e key visual per una linea kids: colori saturi, tipografia playful, motion per i canali social.',
    tags: ['Shooting', 'KV', 'Motion'],
    cover:
      'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function WorkGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.work-card');
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">Selezione lavori</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-300 md:text-base">
            Campagne per brand globali e locali: concept, key visual, motion e attivazioni.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {works.map((w) => (
          <article key={w.id} className="work-card group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={w.cover}
                alt={`${w.client} – ${w.title}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
              <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
                <span className="rounded bg-black/50 px-2 py-1">{w.client}</span>
                <span className="rounded bg-black/50 px-2 py-1">{w.year}</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{w.title}</h3>
              <p className="mt-1 text-sm text-neutral-300">{w.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-white/10 px-2 py-1 text-xs text-white/80 ring-1 ring-white/15">{w.role}</span>
                {w.tags.map((t) => (
                  <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-xs text-white/60 ring-1 ring-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
