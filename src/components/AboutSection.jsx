import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-item', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 75%',
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">Profilo</h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-300 md:text-base">
          Direzione creativa per campagne integrate, identità e contenuti digitali. Collaborazioni con team cross‑funzionali.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="about-item rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm font-semibold text-white/90">Competenze</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>Concept & copy partnering</li>
            <li>Key visual & system design</li>
            <li>Motion & prototipazione</li>
            <li>Art direction su set</li>
          </ul>
        </div>
        <div className="about-item rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm font-semibold text-white/90">Strumenti</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>Adobe CC, Figma</li>
            <li>After Effects</li>
            <li>Cinema 4D / Spline</li>
            <li>Principi di brand</li>
          </ul>
        </div>
        <div className="about-item rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm font-semibold text-white/90">Riconoscimenti</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>Shortlist ADCI</li>
            <li>Webby Honors</li>
            <li>Behance Feature</li>
            <li>Best Integrated, local awards</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
