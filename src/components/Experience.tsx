import { Briefcase, Cpu, Wifi } from 'lucide-react';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

type Item = {
  role: string;
  org: string;
  location: string;
  year: string;
  detail: string;
  icon: typeof Cpu;
};

const ITEMS: Item[] = [
  {
    role: 'Embedded Systems Intern',
    org: 'Embuzz Technology',
    location: 'Coimbatore',
    year: '2025',
    detail:
      'Hands-on experience with Embedded C programming and ATMEGA GPIOs across multiple IoT kits, logging and analyzing sensor data output.',
    icon: Cpu,
  },
  {
    role: 'IoT Intern',
    org: 'Enthu Technology',
    location: 'Coimbatore',
    year: '2024',
    detail:
      'Worked on multiple IoT Trainer Kits covering design implementation and troubleshooting, documenting test data and issue patterns.',
    icon: Wifi,
  },
];

export default function Experience() {
  return (
    <Section id="experience" className="py-24 sm:py-28 bg-navy-950/40">
      <div className="max-w-4xl mx-auto px-5">
        <SectionHeading eyebrow="Experience" title="Internship Timeline" icon={<Briefcase size={16} />} />

        <div className="relative pl-8 sm:pl-10">
          {/* vertical line */}
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/60 via-accent-500/20 to-transparent" />

          <div className="space-y-10">
            {ITEMS.map((item) => (
              <TimelineItem key={item.role} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function TimelineItem({ item }: { item: Item }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const Icon = item.icon;
  return (
    <div
      ref={ref}
      className={`relative ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
    >
      {/* node */}
      <span className="absolute -left-[1.65rem] sm:-left-[2.15rem] top-1 grid place-items-center w-7 h-7 rounded-full bg-navy-800 border-2 border-accent-500 text-accent-400">
        <Icon size={14} />
      </span>

      <div className="rounded-2xl bg-navy-800/50 border border-white/10 p-5 hover:border-accent-500/30 transition-colors">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold text-white">{item.role}</h3>
          <span className="font-mono text-xs text-accent-400">{item.year}</span>
        </div>
        <p className="text-sm text-slate-300 mt-1">
          {item.org}, {item.location}
        </p>
        <p className="text-sm text-slate-400 mt-3 leading-relaxed">{item.detail}</p>
      </div>
    </div>
  );
}
