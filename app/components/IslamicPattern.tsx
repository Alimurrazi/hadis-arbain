interface IslamicPatternProps {
  color: string;
  opacity?: number;
  patternType?: 'geometric' | 'floral' | 'star';
}

export function IslamicPattern({ color, opacity = 0.1, patternType = 'geometric' }: IslamicPatternProps) {
  const patternId = `pattern-${patternType}-${color.replace('#', '')}`;

  const renderPattern = () => {
    if (patternType === 'geometric') {
      return (
        <pattern id={patternId} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="30" fill="none" stroke={color} strokeWidth="1"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke={color} strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="10" fill="none" stroke={color} strokeWidth="0.5"/>
          <line x1="50" y1="20" x2="50" y2="80" stroke={color} strokeWidth="0.5"/>
          <line x1="20" y1="50" x2="80" y2="50" stroke={color} strokeWidth="0.5"/>
          <line x1="28.5" y1="28.5" x2="71.5" y2="71.5" stroke={color} strokeWidth="0.5"/>
          <line x1="71.5" y1="28.5" x2="28.5" y2="71.5" stroke={color} strokeWidth="0.5"/>
        </pattern>
      );
    } else if (patternType === 'star') {
      return (
        <pattern id={patternId} x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M 60 20 L 65 45 L 90 45 L 70 60 L 80 85 L 60 70 L 40 85 L 50 60 L 30 45 L 55 45 Z"
                fill="none" stroke={color} strokeWidth="1"/>
          <circle cx="60" cy="60" r="15" fill="none" stroke={color} strokeWidth="0.5"/>
          <circle cx="60" cy="60" r="40" fill="none" stroke={color} strokeWidth="0.5"/>
        </pattern>
      );
    } else {
      return (
        <pattern id={patternId} x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 40 10 Q 30 20 40 30 Q 50 20 40 10" fill="none" stroke={color} strokeWidth="0.5"/>
          <path d="M 70 40 Q 60 30 50 40 Q 60 50 70 40" fill="none" stroke={color} strokeWidth="0.5"/>
          <path d="M 40 70 Q 50 60 40 50 Q 30 60 40 70" fill="none" stroke={color} strokeWidth="0.5"/>
          <path d="M 10 40 Q 20 50 30 40 Q 20 30 10 40" fill="none" stroke={color} strokeWidth="0.5"/>
          <circle cx="40" cy="40" r="25" fill="none" stroke={color} strokeWidth="0.5"/>
        </pattern>
      );
    }
  };

  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" style={{ opacity }}>
      <defs>
        {renderPattern()}
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`}/>
    </svg>
  );
}
