import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero3D() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Intro animation
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.35'
      );

    // Subtle parallax on scroll
    const ctx = gsap.context(() => {
      gsap.to(titleRef.current, {
        yPercent: -10,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(subtitleRef.current, {
        yPercent: -18,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[88vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glow overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/10 via-transparent to-neutral-950"></div>

      {/* Copy overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <h1
          ref={titleRef}
          className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] md:text-6xl"
        >
          Art Director per brand coraggiosi
        </h1>
        <p
          ref={subtitleRef}
          className="mt-4 max-w-xl text-base text-white/80 md:text-lg"
        >
          Concept, direzione creativa e campagne integrate per agenzie e clienti ambiziosi.
        </p>
        <div ref={ctaRef} className="mt-8 flex items-center gap-3">
          <a href="#work" className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:opacity-90">
            Guarda i lavori
          </a>
          <a href="#contact" className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/20">
            Contattami
          </a>
        </div>
      </div>
    </section>
  );
}
