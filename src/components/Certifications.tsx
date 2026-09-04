import { Award, Trophy, Presentation } from 'lucide-react';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';

const ITEMS = [
  {
    title: 'Data Analyst Certification',
    issuer: 'Qspider Institute, Chennai',
    year: '2026',
    detail: 'SQL, Python, Excel, Power BI, Tableau',
    icon: Award,
  },
  {
    title: 'Software Quality Contest — Rank 303',
    issuer: 'TechGig',
    year: '2024',
    detail: 'Competitive quality-focused programming challenge',
    icon: Trophy,
  },
  {
    title: 'Paper Presentation: "Blockchain-Powered Voting"',
    issuer: 'National Level Technical Symposium, R P Sarathy Institute of Technology',
    year: '2025',
    detail: 'Presented research on blockchain-based voting integrity',
    icon: Presentation,
  },
];

export default function Certifications() {
  return (
    <Section id="certifications" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          eyebrow="Achievements"
          title="Certifications & Awards"
          icon={<Award size={16} />}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl bg-navy-800/50 border border-white/10 p-6 hover:-translate-y-1 hover:border-accent-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent-500/15 text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                    <Icon size={22} />
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                    {item.year}
                  </span>
                </div>
                <h3 className="font-semibold text-white leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-400 mt-1.5">{item.issuer}</p>
                <p className="text-sm text-accent-300/80 mt-3 font-mono">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
