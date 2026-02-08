import { GridPattern } from '@/components/styling';
import { cn } from '@/utils/tailwind';

export const SECTION_CONTAINER_STYLES = 'relative z-10 space-y-4 md:space-y-12';

export const PageSection = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => {
  return (
    <section
      id={id}
      className={cn(
        'border-primary/30 relative overflow-hidden border-t py-16 md:py-24',
        className
      )}
    >
      <GridPattern />
      {children}
    </section>
  );
};
