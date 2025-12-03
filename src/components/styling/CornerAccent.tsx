type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type Size = 'xs' | 'sm' | 'md';
type Color = 'purple' | 'fuchsia';
type ShowOn = 'always' | 'hover' | 'focus';

interface CornerAccentProps {
  position: Position;
  size?: Size;
  color?: Color;
  showOn?: ShowOn;
  className?: string;
}

const positionClasses: Record<Position, string> = {
  'top-left': '-top-1 -left-1',
  'top-right': '-top-1 -right-1',
  'bottom-left': '-bottom-1 -left-1',
  'bottom-right': '-bottom-1 -right-1',
};

const sizeClasses: Record<Size, string> = {
  xs: 'w-2 h-2',
  sm: 'w-2 md:w-3 h-2 md:h-3',
  md: 'w-3 md:w-4 h-3 md:h-4',
};

const colorClasses: Record<Color, string> = {
  purple: 'bg-purple-500',
  fuchsia: 'bg-fuchsia-500',
};

const showOnClasses: Record<ShowOn, string> = {
  always: '',
  hover: 'opacity-0 group-hover:opacity-100 transition-opacity',
  focus: 'opacity-0 group-focus-within:opacity-100 transition-opacity',
};

export const CornerAccent = ({
  position,
  size = 'sm',
  color = 'purple',
  showOn = 'hover',
  className = '',
}: CornerAccentProps) => (
  <div
    className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${colorClasses[color]} ${showOnClasses[showOn]} ${className}`}
  />
);
