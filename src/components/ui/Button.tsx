import { cva, type VariantProps } from 'class-variance-authority';
import Link, { type LinkProps } from 'next/link';
import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ComponentRef, ForwardedRef } from 'react';
import { analytics } from '@/utils/analytics-instance';
import { cn } from '@/utils/tailwind';

const buttonVariants = cva(
  'border-primary inline-flex items-center justify-center gap-2 border-2 text-sm tracking-widest uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 md:text-base',
  {
    variants: {
      variant: {
        solid: 'hover:bg-primary bg-purple-600 text-white',
        outline: 'hover:bg-primary bg-stone-950 text-purple-400 hover:text-white',
        ghost: 'hover:bg-primary/20 border-transparent text-white',
        text: 'text-muted hover:text-muted-active border-0',
        animated:
          'group relative overflow-hidden border-purple-500 px-6 py-2.5 text-sm font-normal tracking-wider text-white md:text-sm',
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

export type ButtonProps = (ButtonAsButton | ButtonAsLink) & {
  trackingProps?: Record<string, any> & {
    element: string;
  };
};

export const Button = forwardRef<ComponentRef<'button'> | ComponentRef<'a'>, ButtonProps>(
  ({ trackingProps, variant, size, fullWidth, className, children, ...props }, ref) => {
    const isAnimated = variant === 'animated';
    const classes = cn(
      buttonVariants({
        variant,
        size: isAnimated ? (null as unknown as ButtonVariantProps['size']) : size,
        fullWidth,
      }),
      className
    );

    if ('href' in props && props.href !== undefined) {
      const { href, ...linkProps } = props as ButtonAsLink;

      return (
        <Link
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...linkProps}
          onClick={(e) => {
            if (trackingProps) {
              analytics.trackClick(trackingProps.element, trackingProps);
            }
            props.onClick?.(e);
          }}
        >
          {isAnimated ? (
            <>
              <div
                aria-hidden
                className="bg-primary absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
              />
              <span className="relative">{children}</span>
            </>
          ) : (
            children
          )}
        </Link>
      );
    }

    return (
      <button
        ref={ref as ForwardedRef<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonAsButton)}
        onClick={(e) => {
          if (trackingProps) {
            analytics.trackClick(trackingProps.element, trackingProps);
          }
          props.onClick?.(e);
        }}
      >
        {isAnimated ? (
          <>
            <div
              aria-hidden
              className="bg-primary absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
            />
            <span className="relative">{children}</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { buttonVariants };
