import { useState } from 'react';
import { Menu, X, ArrowRight, Palette, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#work', label: 'Progetti', icon: Palette },
    { href: '#about', label: 'Chi sono', icon: User },
    { href: '#contact', label: 'Contatti', icon: ArrowRight },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 dark:bg-neutral-950/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl">Art Director</a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(({ href, label }) => (
            <a key={href} href={href} className="text-sm text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors">
              {label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black rounded-full px-4 py-2 text-sm font-medium hover:opacity-90 transition">
            Parliamo
            <ArrowRight size={16} />
          </a>
        </nav>
        <button aria-label="Apri menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/90 dark:bg-neutral-950/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4 grid gap-3">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black rounded-full px-4 py-2 text-sm font-medium">
              Parliamo <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
