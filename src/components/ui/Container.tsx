import { cn } from '@/utils/tailwind';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => <div className={cn('container mx-auto px-4', className)}>{children}</div>;
