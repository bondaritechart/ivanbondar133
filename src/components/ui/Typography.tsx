import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/utils/tailwind';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-8xl leading-none font-bold tracking-[1px] uppercase',
      h2: 'text-6xl font-bold tracking-[1px] uppercase',
      h3: 'text-4l font-semibold uppercase',
      h4: 'text-2xl font-semibold uppercase',
      body: 'lg:text-md text-sm leading-normal tracking-[1px]',
      description: 'text-muted text-sm leading-relaxed uppercase md:tracking-[0.1em] lg:text-lg',
      label: 'text-sm font-medium text-slate-700',
      caption:
        'text-primary-active text-xs tracking-[0.2em] uppercase md:text-sm md:tracking-[0.3em]',
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
