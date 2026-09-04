import { useState } from 'react';
import {
  FolderGit2,
  ChevronDown,
  ScanLine,
  ShieldCheck,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';

type Project = {
  title: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: 'Pneumonia Detection from Chest X-Ray Images using Vision Transformer',
    icon: ScanLine,
    description:
      'Built and cleaned a labeled chest X-ray image dataset for exploratory analysis and model input. Applied a Vision Transformer (ViT) to improve detection accuracy over a baseline CNN by capturing long-range dependencies. Evaluated performance using precision, recall, and F1-score.',
    tags: ['Python', 'Vision Transformer', 'EDA', 'Data Cleaning', 'Model Evaluation'],
  },
  {
    title: 'E-Voting System using Blockchain',
    icon: ShieldCheck,
    description:
      'Designed a multi-node data validation and record-keeping pipeline ensuring transparent, tamper-proof, auditable vote records using Hyperledger Fabric. Wrote Python-based smart contracts to enforce data integrity and prevent fraudulent entries.',
    tags: ['Python', 'Hyperledger Fabric', 'Blockchain', 'Data Integrity'],
  },
  {
    title: 'Smart Lighting & Automatic Fan Control System',
    icon: Lightbulb,
    description:
      'Collected and processed real-time sensor data to drive automated control logic for lighting and fan systems. Integrated multiple sensor outputs with embedded control logic, translating raw signal data into actionable automation rules.',
    tags: ['Embedded Systems', 'Sensor Data', 'Automation'],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = project.icon;
  return (
    <div
      className={`group rounded-2xl bg-navy-800/50 border border-white/10 p-6 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-500/10 ${
        index === 1 ? 'md:mt-8' : ''
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="grid place-items-center w-12 h-12 rounded-xl bg-accent-500/15 text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-colors">
          <Icon size={24} />
        </span>
        <span className="font-mono text-xs text-slate-500">
          0{index + 1}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-white leading-snug mb-3">
        {project.title}
      </h3>

      <p
        className={`text-sm text-slate-400 leading-relaxed ${
          open ? '' : 'line-clamp-3'
        }`}
      >
        {project.description}
      </p>

      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-accent-500/10 border border-accent-500/20 text-xs font-mono text-accent-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {!open && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-accent-500/10 border border-accent-500/20 text-xs font-mono text-accent-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors self-start"
      >
        {open ? 'Show Less' : 'View Details'}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading eyebrow="Projects" title="Featured Work" icon={<FolderGit2 size={16} />} />
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
