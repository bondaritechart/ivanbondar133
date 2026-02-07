import { cva, type VariantProps } from 'class-variance-authority';
import Link, { type LinkProps } from 'next/link';
import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ComponentRef, ForwardedRef } from 'react';
import { cn } from '@/utils/tailwind';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 border-2 border-purple-500 text-sm tracking-widest uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 md:text-base',
  {
    variants: {
      variant: {
        solid: 'bg-purple-600 text-white hover:bg-purple-500',
        outline: 'bg-stone-950 text-purple-400 hover:bg-purple-500 hover:text-white',
        ghost: 'border-transparent text-white hover:bg-purple-500/20',
        subtle: 'border-purple-500/50 text-zinc-400 hover:border-purple-500 hover:text-white',
        text: 'text-muted hover:text-muted-active border-0',
      },
      size: {
        sm: 'px-6 py-2.5',
        md: 'px-8 py-3 md:px-10 md:py-4',
        lg: 'px-8 py-4 md:px-10 md:py-5',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      fullWidth: false,
    },
  }
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonAsButton = ButtonVariantProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonVariantProps &
  LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: LinkProps['href'];
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<ComponentRef<'button'> | ComponentRef<'a'>, ButtonProps>(
  ({ variant, size, fullWidth, className, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, fullWidth }), className);

    if ('href' in props && props.href !== undefined) {
      const { href, ...linkProps } = props as ButtonAsLink;

      return (
        <Link
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...linkProps}
        />
      );
    }

    return (
      <button
        ref={ref as ForwardedRef<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonAsButton)}
      />
    );
  }
);

Button.displayName = 'Button';

export { buttonVariants };
