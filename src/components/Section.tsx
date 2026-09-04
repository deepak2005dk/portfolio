import { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, children, className = '' }: Props) {
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </section>
  );
}
