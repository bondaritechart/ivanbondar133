import { cn } from '@/utils/tailwind';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={cn('container mx-auto max-w-7xl px-4', className)}>{children}</div>;
