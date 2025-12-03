interface GridPatternProps {
  opacity?: 'light' | 'medium';
  className?: string;
}

export function GridPattern({ opacity = 'light', className = '' }: GridPatternProps) {
  const opacityClass = opacity === 'medium' ? 'opacity-20' : 'opacity-10';
  const gradientOpacity = opacity === 'medium' ? '0.3' : '0.5';

  return (
    <div 
      className={`absolute inset-0 ${opacityClass} ${className}`} 
      style={{
        backgroundImage: `linear-gradient(rgba(168,85,247,${gradientOpacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,${gradientOpacity}) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}
    />
  );
}

