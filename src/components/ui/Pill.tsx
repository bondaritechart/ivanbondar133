import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwind';

const pillVariants = cva('inline-flex items-center gap-2 border transition-colors duration-200', {
  variants: {
    variant: {
      rounded: 'rounded-full',
      square: 'rounded-none',
    },
    size: {
      default: 'px-3 py-1 text-xs',
      lg: 'px-4 py-2 text-sm',
    },
    appearance: {
      default: 'border-primary/30 bg-primary/10 hover:bg-primary/20 text-purple-300',
      active: 'border-primary bg-primary hover:bg-primary text-white',
    },
  },
  defaultVariants: {
    variant: 'rounded',
    size: 'default',
    appearance: 'default',
  },
});

export type PillProps = {
  label: string;
  className?: string;
  appearance?: string;
  icon?: React.ReactNode;
} & VariantProps<typeof pillVariants>;

export const Pill = ({ label, variant, className, size, icon, appearance }: PillProps) => (
  <span className={cn(pillVariants({ variant, size, appearance }), className)}>
    {icon}
    {label}
  </span>
);

export { pillVariants };
