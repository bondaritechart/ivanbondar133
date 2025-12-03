import type { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export const SectionHeading = ({ children, className = '' }: SectionHeadingProps) => (
  <h2
    className={`mb-8 flex items-center gap-4 text-3xl md:mb-12 md:text-4xl lg:text-5xl ${className}`}
  >
    <div className="h-[2px] w-8 bg-purple-500 md:w-12" />
    {children}
  </h2>
);
