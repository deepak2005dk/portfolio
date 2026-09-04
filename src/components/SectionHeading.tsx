import { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: string;
  icon?: ReactNode;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, icon, align = 'left' }: Props) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : ''}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-accent-400 font-mono text-sm tracking-widest uppercase mb-3 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          {icon}
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      <div
        className={`h-1 w-16 bg-accent-500 rounded-full mt-4 origin-left animate-draw-line ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
