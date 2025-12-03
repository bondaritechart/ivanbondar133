import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export const SectionHeading = ({ children, className = '' }: SectionHeadingProps) => (
  <h2 className={`text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 flex items-center gap-4 ${className}`}>
    <div className="h-[2px] w-8 md:w-12 bg-purple-500" />
    {children}
  </h2>
);

