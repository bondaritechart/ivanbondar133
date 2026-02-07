import React from 'react';
import { CornerAccent } from '@/components/styling';
import { cn } from '@/utils/tailwind';

export const ValuePropCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'group border-primary/30 relative flex h-full flex-col border-2 p-4 transition-all duration-300 md:p-6',
        className
      )}
    >
      <CornerAccent position="top-left" />
      <CornerAccent position="bottom-right" color="accent" />
      <div className="bg-primary absolute top-0.5 -left-0.5 h-0 w-0.5 transition-all duration-300 group-hover:h-full" />
      <div className="bg-primary absolute -top-0.5 right-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />

      <div className="bg-accent absolute -right-0.5 bottom-0.5 h-0 w-0.5 transition-all duration-300 group-hover:h-full" />
      <div className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
      {children}
    </div>
  );
};
