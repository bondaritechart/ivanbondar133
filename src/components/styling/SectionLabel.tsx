import { Typography } from '@/components/ui';

interface SectionLabelProps {
  children: string;
  centered?: boolean;
  className?: string;
}

export const SectionLabel = ({ children, centered = false, className = '' }: SectionLabelProps) => (
  <div
    className={`mb-8 flex items-center gap-4 md:mb-8 ${centered ? 'justify-center' : ''} ${className}`}
  >
    <div className="bg-primary h-[2px] w-6 md:w-10" />
    <Typography variant="caption">{children}</Typography>
    {centered && <div className="bg-primary h-[2px] w-8 md:w-12" />}
  </div>
);
