import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-10 border-t border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-950/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Parliamo del tuo prossimo progetto</h3>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-md">
              Disponibile per collaborazioni, consulenze e direzione creativa per brand e agenzie.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a href="mailto:hello@artdirector.studio" className="inline-flex items-center gap-3 hover:opacity-80"><Mail size={18}/> hello@artdirector.studio</a>
              <a href="tel:+39020000000" className="inline-flex items-center gap-3 hover:opacity-80"><Phone size={18}/> +39 02 000 000</a>
              <p className="inline-flex items-center gap-3 text-neutral-600 dark:text-neutral-300"><MapPin size={18}/> Milano • Europa</p>
            </div>
          </div>
          <div className="md:justify-self-end">
            <form onSubmit={(e) => e.preventDefault()} className="bg-white dark:bg-neutral-950 border border-black/10 dark:border-white/10 rounded-2xl p-4 sm:p-6 w-full max-w-md">
              <div className="grid gap-3">
                <input aria-label="Nome" placeholder="Nome" className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20" />
                <input aria-label="Email" type="email" placeholder="Email" className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20" />
                <textarea aria-label="Messaggio" placeholder="Raccontami del progetto" rows={4} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20" />
                <button type="submit" className="inline-flex justify-center items-center gap-2 bg-black text-white dark:bg-white dark:text-black rounded-lg px-4 py-2 text-sm font-medium">Invia</button>
              </div>
              <p className="mt-3 text-xs text-neutral-500">Questo modulo è dimostrativo. Per richieste reali, usa l'email.</p>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Art Director — Tutti i diritti riservati</p>
          <div className="flex items-center gap-3">
            <a aria-label="Instagram" href="#" className="h-9 w-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"><Instagram size={18}/></a>
            <a aria-label="LinkedIn" href="#" className="h-9 w-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"><Linkedin size={18}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
