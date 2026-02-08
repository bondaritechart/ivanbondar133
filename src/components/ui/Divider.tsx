import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwind';

const dividerVariants = cva('bg-primary shrink-0', {
  variants: {
    orientation: {
      horizontal: 'h-px w-full my-6',
      vertical: 'w-px h-full mx-6',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export type DividerProps = VariantProps<typeof dividerVariants> & {
  className?: string;
};

export const Divider = ({ orientation, className }: DividerProps) => {
  return <div role="separator" aria-orientation={orientation ?? 'horizontal'} className={cn(dividerVariants({ orientation }), className)} />;
};

export { dividerVariants };
