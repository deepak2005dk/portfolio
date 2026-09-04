import {
  Code2,
  BarChart3,
  Database,
  LineChart,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

type Skill = { name: string; level: number };
type Group = {
  title: string;
  icon: LucideIcon;
  bars: Skill[];
  tags: string[];
};

const GROUPS: Group[] = [
  {
    title: 'Programming & Querying',
    icon: Code2,
    bars: [
      { name: 'Python (Pandas, NumPy, Matplotlib)', level: 85 },
      { name: 'SQL (joins, aggregations, window functions, stored procedures)', level: 82 },
    ],
    tags: ['Pandas', 'NumPy', 'Matplotlib', 'Stored Procedures'],
  },
  {
    title: 'Visualization & BI',
    icon: BarChart3,
    bars: [
      { name: 'Power BI (DAX, Power Query, dashboards, data modeling)', level: 88 },
      { name: 'Tableau', level: 78 },
      { name: 'Excel (Pivot Tables, VLOOKUP/XLOOKUP)', level: 86 },
    ],
    tags: ['DAX', 'Power Query', 'Data Modeling', 'Dashboards'],
  },
  {
    title: 'Data Handling',
    icon: Database,
    bars: [
      { name: 'Data Cleaning & Wrangling', level: 84 },
      { name: 'Exploratory Data Analysis (EDA)', level: 86 },
    ],
    tags: ['Data Validation', 'Report Automation', 'EDA', 'Wrangling'],
  },
  {
    title: 'Analytical Concepts',
    icon: LineChart,
    bars: [
      { name: 'Descriptive Statistics & KPI Tracking', level: 82 },
      { name: 'Root Cause & Trend Analysis', level: 80 },
    ],
    tags: ['Business Intelligence', 'Data-Driven Decision Making'],
  },
  {
    title: 'Tools & Soft Skills',
    icon: Wrench,
    bars: [],
    tags: ['MS Office', 'Google Sheets', 'Communication', 'Teamwork', 'Problem-Solving'],
  },
];

function Bar({ skill, delay }: { skill: Skill; delay: number }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.4 });
  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-slate-300">{skill.name}</span>
        <span className="text-accent-400 font-mono text-xs">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-600 to-accent-400 transition-[width] duration-1000 ease-out"
          style={{ width: isVisible ? `${skill.level}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" className="py-24 sm:py-28 bg-navy-950/40">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading eyebrow="Skills" title="Technical Toolkit" icon={<BarChart3 size={16} />} />

        <div className="grid md:grid-cols-2 gap-5">
          {GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="rounded-2xl bg-navy-800/50 border border-white/10 p-6 hover:border-accent-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent-500/15 text-accent-400">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-semibold text-white">{group.title}</h3>
                </div>

                {group.bars.length > 0 && (
                  <div className="space-y-4 mb-4">
                    {group.bars.map((s, i) => (
                      <Bar key={s.name} skill={s} delay={i * 120} />
                    ))}
                  </div>
                )}

                {group.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-accent-500/10 border border-accent-500/20 text-xs font-mono text-accent-300 hover:bg-accent-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
