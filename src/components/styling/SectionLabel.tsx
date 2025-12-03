interface SectionLabelProps {
  children: string;
  centered?: boolean;
  className?: string;
}

export const SectionLabel = ({ children, centered = false, className = '' }: SectionLabelProps) => (
  <div className={`flex items-center gap-4 ${centered ? 'justify-center' : ''} ${className}`}>
    <div className="h-[2px] w-8 md:w-12 bg-purple-500" />
    <p className="text-xs md:text-sm text-purple-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">
      {children}
    </p>
    {centered && <div className="h-[2px] w-8 md:w-12 bg-purple-500" />}
  </div>
);

