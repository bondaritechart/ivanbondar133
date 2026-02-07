import { GridPattern } from '@/components/styling';

export const SECTION_CONTAINER_STYLES = 'relative z-10 space-y-4 md:space-y-12';

export const PageSection = ({ children, id }: { children: React.ReactNode; id?: string }) => {
  return (
    <section id={id} className="border-primary/30 relative overflow-hidden border-t py-16 md:py-24">
      <GridPattern />
      {children}
    </section>
  );
};
