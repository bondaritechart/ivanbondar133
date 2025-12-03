interface SectionLabelProps {
  children: string;
  centered?: boolean;
  className?: string;
}

export const SectionLabel = ({ children, centered = false, className = '' }: SectionLabelProps) => (
  <div className={`flex items-center gap-4 ${centered ? 'justify-center' : ''} ${className}`}>
    <div className="h-[2px] w-8 bg-purple-500 md:w-12" />
    <p className="text-xs tracking-[0.2em] text-purple-400 uppercase md:text-sm md:tracking-[0.3em]">
      {children}
    </p>
    {centered && <div className="h-[2px] w-8 bg-purple-500 md:w-12" />}
  </div>
);
