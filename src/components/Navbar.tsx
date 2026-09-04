import { useEffect, useState } from 'react';
import { Menu, X, Database } from 'lucide-react';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const offset = window.innerHeight * 0.35;
      let current = 'home';
      for (const link of LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = link.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2 group"
          aria-label="Go to top"
        >
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent-500/15 text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-colors">
            <Database size={18} />
          </span>
          <span className="font-semibold text-white tracking-tight">
            Deepak<span className="text-accent-500">.</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  active === link.id
                    ? 'text-accent-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute left-3 right-3 -bottom-px h-0.5 bg-accent-500 rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden grid place-items-center w-10 h-10 rounded-lg text-slate-200 hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-navy-950/95 backdrop-blur-md border-b border-white/5 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="px-5 py-3 space-y-1">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'bg-accent-500/15 text-accent-400'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
