import { motion } from 'framer-motion';
import { ExternalLink, Palette, Camera, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Rebrand Maison Lumière',
    tag: 'Identità visiva',
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1600&auto=format&fit=crop',
    year: '2025',
  },
  {
    title: 'Campagna “Urban Echoes”',
    tag: 'Art Direction + Adv',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop',
    year: '2024',
  },
  {
    title: 'Lancio prodotto – Nova Audio',
    tag: 'Concept & Visual',
    image: 'https://images.unsplash.com/photo-1655023988755-923a7d258fcf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMYW5jaW8lMjBwcm9kb3R0byUyMCVFMiU4MCU5MyUyME5vdmElMjBBdWRpb3xlbnwwfDB8fHwxNzYyMzAyMDk2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    year: '2024',
  },
  {
    title: 'Editoriale “Chromatic”',
    tag: 'Direzione fotografica',
    image: 'https://images.unsplash.com/photo-1642410259623-8cd928747bb7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFZGl0b3JpYWxlJTIwJUUyJTgwJTlDQ2hyb21hdGljJUUyJTgwJTlEfGVufDB8MHx8fDE3NjIzMDIwOTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    year: '2023',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selezione progetti</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              Brand identity, campagne integrate, set design e direzione fotografica. Una curatela di lavori con focus su coerenza visiva e impatto emotivo.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10"><Palette size={16}/> Branding</span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10"><Camera size={16}/> Foto</span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10"><Sparkles size={16}/> Campaign</span>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-white/80 text-xs">{p.tag} • {p.year}</p>
                  <h3 className="text-white text-lg font-medium">{p.title}</h3>
                </div>
                <div className="shrink-0 h-9 w-9 rounded-full bg-white/90 backdrop-blur text-black flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition">
                  <ExternalLink size={18} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
