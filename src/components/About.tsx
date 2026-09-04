import { User, GraduationCap, MapPin } from 'lucide-react';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';

const HIGHLIGHTS = [
  { label: 'SQL', icon: '🗄️' },
  { label: 'Python', icon: '🐍' },
  { label: 'Power BI', icon: '📊' },
  { label: 'Tableau', icon: '📈' },
  { label: 'Excel', icon: '📋' },
];

export default function About() {
  return (
    <Section id="about" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading eyebrow="About Me" title="Who I Am" icon={<User size={16} />} />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 space-y-5 text-slate-300 leading-relaxed">
            <p>
              Data Analyst with hands-on project experience in{' '}
              <span className="text-white font-medium">SQL, Python, Power BI, Excel, and Tableau</span>.
              Skilled in data cleaning, EDA, dashboard development, and KPI reporting —
              translating raw datasets into clear, decision-ready insights.
            </p>
            <p>
              Completed a dedicated Data Analyst certification alongside a background in{' '}
              <span className="text-white font-medium">Electronics &amp; Communication Engineering</span>{' '}
              and applied technical problem-solving.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {HIGHLIGHTS.map((h) => (
                <span
                  key={h.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-200 hover:border-accent-500/40 hover:text-accent-300 transition-colors"
                >
                  <span>{h.icon}</span>
                  {h.label}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400 pt-2">
              <MapPin size={16} className="text-accent-400" />
              Namakkal, Tamil Nadu, India
            </div>
          </div>

          {/* Education card */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-navy-800/60 border border-white/10 p-6 hover:border-accent-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent-500/15 text-accent-400">
                  <GraduationCap size={22} />
                </span>
                <div>
                  <h3 className="font-semibold text-white">Education</h3>
                  <p className="text-xs text-slate-400">2022 — 2026</p>
                </div>
              </div>
              <p className="text-white font-medium leading-snug">
                B.E. Electronics and Communication Engineering
              </p>
              <p className="text-sm text-slate-400 mt-1">
                KSR Institute for Engineering and Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
