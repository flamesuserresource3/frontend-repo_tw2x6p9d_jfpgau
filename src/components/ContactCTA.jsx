import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 75%',
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.04] p-8 md:p-12"
      >
        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/10 to-emerald-500/10 blur-2xl"></div>
        <div className="relative">
          <h3 className="text-2xl font-semibold md:text-3xl">Hai un brief?</h3>
          <p className="mt-2 max-w-2xl text-sm text-neutral-200 md:text-base">
            Sono disponibile per collaborazioni con agenzie e brand. Scrivimi per portfolio completo e disponibilità.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:art.director@example.com?subject=Brief%20-%20Portfolio"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:opacity-90"
            >
              art.director@example.com
            </a>
            <a
              href="#work"
              className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/20"
            >
              Guarda i lavori
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
