import { ArrowDown, FolderGit2, Mail, Download } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-accent-500/15 blur-[120px]" />
      <div className="absolute -bottom-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-accent-700/10 blur-[120px]" />

      {/* Floating chart lines */}
      <svg
        className="absolute bottom-0 left-0 w-full h-40 opacity-30 hidden sm:block"
        viewBox="0 0 800 160"
        preserveAspectRatio="none"
        fill="none"
      >
        <polyline
          points="0,120 120,90 240,110 360,60 480,80 600,40 720,70 800,30"
          stroke="#3b82f6"
          strokeWidth="2"
          className="animate-pulse-dot"
        />
        <polyline
          points="0,140 120,130 240,100 360,120 480,70 600,100 720,60 800,90"
          stroke="#60a5fa"
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto px-5 w-full">
        <div className={`max-w-2xl ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 text-xs font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse-dot" />
            AVAILABLE FOR DATA ANALYST ROLES
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Deepak K
          </h1>

          <p className="mt-3 text-xl sm:text-2xl font-medium text-accent-400">
            Data Analyst
          </p>

          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
            Turning raw data into decision-ready insights.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent-500 hover:bg-accent-400 text-white font-medium shadow-lg shadow-accent-500/25 transition-all hover:-translate-y-0.5"
            >
              <FolderGit2 size={18} />
              View Projects
            </button>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-slate-300 hover:text-accent-400 font-medium transition-colors"
            >
              <Mail size={18} />
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 hover:text-accent-400 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </button>
    </section>
  );
}
