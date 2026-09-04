import { Linkedin, Mail, Database } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent-500/15 text-accent-400">
              <Database size={18} />
            </span>
            <div>
              <p className="font-semibold text-white tracking-tight">
                Deepak K<span className="text-accent-500">.</span>
              </p>
              <p className="text-xs text-slate-500">Data Analyst</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/deepak2005dk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:deepakdk6264@gmail.com"
              aria-label="Email"
              className="grid place-items-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-sm text-slate-500">
          © {year} Deepak K. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
