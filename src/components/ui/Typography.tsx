import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/utils/tailwind';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-6xl leading-none font-bold tracking-[1px] uppercase lg:text-8xl',
      h2: 'text-4xl font-bold tracking-[1px] uppercase lg:text-6xl',
      h3: 'text-4l font-semibold uppercase',
      h4: 'text-2xl font-semibold uppercase',
      h5: 'text-lg font-semibold tracking-[0.5px] uppercase',
      body: 'text-md leading-normal tracking-[1px] md:text-base',
      description: 'text-muted text-sm leading-relaxed uppercase md:tracking-[0.1em] lg:text-lg',
      label: 'text-label text-sm font-medium tracking-[1px]',
      caption:
        'text-primary-active text-xs tracking-[0.2em] uppercase md:text-sm md:tracking-[0.3em]',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

type TypographyVariantProps = VariantProps<typeof typographyVariants>;

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'label';

const variantElementMap: Record<
  NonNullable<TypographyVariantProps['variant']>,
  TypographyElement
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
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
