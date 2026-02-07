import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/utils/tailwind';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-3xl font-bold text-slate-900',
      h2: 'text-2xl font-bold text-slate-900',
      h3: 'text-xl font-semibold text-slate-900',
      h4: 'text-lg font-semibold text-slate-900',
      body: 'text-sm text-slate-900',
      description: 'text-sm text-slate-500',
      label: 'text-sm font-medium text-slate-700',
      caption: 'text-xs text-slate-500',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

type TypographyVariantProps = VariantProps<typeof typographyVariants>;

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'label';

const variantElementMap: Record<
  NonNullable<TypographyVariantProps['variant']>,
  TypographyElement
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  description: 'p',
  label: 'label',
  caption: 'span',
};

export interface TypographyProps extends HTMLAttributes<HTMLElement>, TypographyVariantProps {
  as?: TypographyElement;
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body', as, children, ...props }, ref) => {
    const Component = as || variantElementMap[variant!];

    return (
      <Component
        className={cn(typographyVariants({ variant, className }))}
        ref={ref as never}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
