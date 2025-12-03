type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type Color = 'purple' | 'fuchsia';

interface SharpAccentProps {
  position: Position;
  color?: Color;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const positionStyles: Record<Position, { placement: string; clipPath: string }> = {
  'top-left': {
    placement: 'top-0 left-0',
    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
  },
  'top-right': {
    placement: 'top-0 right-0',
    clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
  },
  'bottom-left': {
    placement: 'bottom-0 left-0',
    clipPath: 'polygon(0 100%, 100% 100%, 0 0)',
  },
  'bottom-right': {
    placement: 'bottom-0 right-0',
    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
  },
};

const sizeClasses: Record<string, string> = {
  sm: 'w-[300px] md:w-[500px] h-[300px] md:h-[500px]',
  md: 'w-[300px] md:w-[600px] h-[300px] md:h-[600px]',
  lg: 'w-[400px] md:w-[800px] h-[400px] md:h-[800px]',
};

const colorClasses: Record<Color, string> = {
  purple: 'bg-purple-600/20',
  fuchsia: 'bg-fuchsia-600/20',
};

export const SharpAccent = ({ 
  position, 
  color = 'purple', 
  size = 'md',
  className = '' 
}: SharpAccentProps) => {
  const { placement, clipPath } = positionStyles[position];
  
  return (
    <div 
      className={`absolute ${placement} ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      style={{ clipPath }}
    />
  );
};

