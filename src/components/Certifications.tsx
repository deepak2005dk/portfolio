import { useEffect, useState, useCallback } from 'react';
import { Award, Trophy, Presentation, Briefcase, ExternalLink, X, Download } from 'lucide-react';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';

type BaseItem = {
  title: string;
  issuer: string;
  year: string;
  detail: string;
  icon: typeof Award;
};

type CertItem = BaseItem & {
  duration: string;
  certId: string;
  pdfUrl: string;
  downloadName: string;
};

const REGULAR_ITEMS: BaseItem[] = [
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
];

const CERT_ITEM: CertItem = {
  title: 'Internship Experience — Data Analytics',
  issuer: 'Infyntrek Systèmes',
  year: '2026',
  detail: 'Hands-on data analytics internship',
  icon: Briefcase,
  duration: '25 June 2026 – 25 August 2026',
  certId: '7855EA46A8E88413',
  pdfUrl: '/infyntrek-certificate.pdf',
  downloadName: 'Deepak_Internship_Certificate.pdf',
};

const TRAILING_ITEMS: BaseItem[] = [
  {
    title: 'Paper Presentation: "Blockchain-Powered Voting"',
    issuer: 'National Level Technical Symposium, R P Sarathy Institute of Technology',
    year: '2025',
    detail: 'Presented research on blockchain-based voting integrity',
    icon: Presentation,
  },
];

function RegularCard({ item }: { item: BaseItem }) {
  const Icon = item.icon;
  return (
    <div className="group rounded-2xl bg-navy-800/50 border border-white/10 p-6 hover:-translate-y-1 hover:border-accent-500/40 transition-all">
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
}

function CertificateModal({
  item,
  onClose,
}: {
  item: CertItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-navy-900 border border-accent-500/30 rounded-none sm:rounded-2xl shadow-2xl w-full h-full sm:w-[90vw] sm:h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b border-white/10 bg-navy-800/80">
          <div className="min-w-0">
            <h3 className="font-semibold text-white text-sm sm:text-base truncate">
              {item.title}
            </h3>
            <p className="text-xs text-slate-400 truncate">{item.issuer}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={item.pdfUrl}
              download={item.downloadName}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors px-3 py-1.5 rounded-lg border border-accent-500/30 hover:border-accent-500/50"
            >
              <Download size={15} />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="grid place-items-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-accent-500 hover:border-accent-500 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="flex-1 min-h-0 bg-navy-950">
          <iframe
            src={item.pdfUrl}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title={item.title}
          />
        </div>
      </div>
    </div>
  );
}

function CertificateCard({
  item,
  onOpen,
}: {
  item: CertItem;
  onOpen: () => void;
}) {
  const Icon = item.icon;
  return (
    <div className="group rounded-2xl bg-navy-800/50 border border-white/10 p-6 hover:-translate-y-1 hover:border-accent-500/40 transition-all">
      <button
        onClick={onOpen}
        className="block w-full rounded-xl overflow-hidden border border-white/10 mb-4 group-hover:border-accent-500/30 transition-colors"
        aria-label={`View ${item.title} certificate`}
      >
        <iframe
          src={item.pdfUrl}
          title={`${item.title} preview`}
          className="w-full aspect-[4/3] pointer-events-none bg-white"
        />
      </button>

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
      <p className="text-sm text-accent-300/80 mt-3 font-mono">{item.duration}</p>

      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-slate-500 truncate">
          ID: {item.certId}
        </span>
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors shrink-0"
        >
          View Certificate
          <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [openCert, setOpenCert] = useState<CertItem | null>(null);
  const handleClose = useCallback(() => setOpenCert(null), []);

  return (
    <Section id="certifications" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          eyebrow="Achievements"
          title="Certifications & Awards"
          icon={<Award size={16} />}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REGULAR_ITEMS.map((item) => (
            <RegularCard key={item.title} item={item} />
          ))}
          <CertificateCard
            key={CERT_ITEM.title}
            item={CERT_ITEM}
            onOpen={() => setOpenCert(CERT_ITEM)}
          />
          {TRAILING_ITEMS.map((item) => (
            <RegularCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      {openCert && <CertificateModal item={openCert} onClose={handleClose} />}
    </Section>
  );
}
