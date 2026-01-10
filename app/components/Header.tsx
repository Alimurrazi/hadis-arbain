export function Header() {
  return (
    <header className="relative w-full h-24 bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-900 border-b-4 border-teal-600 overflow-hidden">
      {/* Persian motif pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="header-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Eight-pointed star - classic Islamic motif */}
              <path d="M 60 20 L 65 45 L 90 40 L 75 60 L 95 75 L 70 70 L 75 95 L 60 80 L 45 95 L 50 70 L 25 75 L 45 60 L 30 40 L 55 45 Z"
                    fill="none" stroke="currentColor" strokeWidth="1.5"/>
              {/* Inner decorative circle */}
              <circle cx="60" cy="60" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
              {/* Outer decorative circle */}
              <circle cx="60" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              {/* Small accent circles at cardinal points */}
              <circle cx="60" cy="15" r="3" fill="currentColor"/>
              <circle cx="105" cy="60" r="3" fill="currentColor"/>
              <circle cx="60" cy="105" r="3" fill="currentColor"/>
              <circle cx="15" cy="60" r="3" fill="currentColor"/>
              {/* Connecting lines */}
              <line x1="60" y1="35" x2="60" y2="45" stroke="currentColor" strokeWidth="0.5"/>
              <line x1="85" y1="60" x2="75" y2="60" stroke="currentColor" strokeWidth="0.5"/>
              <line x1="60" y1="85" x2="60" y2="75" stroke="currentColor" strokeWidth="0.5"/>
              <line x1="35" y1="60" x2="45" y2="60" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#header-pattern)" className="text-teal-300"/>
        </svg>
      </div>

      {/* Header content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-teal-50" style={{ fontFamily: 'Cinzel, serif' }}>
            ✦ Islamic Wisdom ✦
          </h1>
          <p className="text-sm text-teal-200 mt-1" style={{ fontFamily: 'Amiri, serif' }}>
            Timeless Quotes from the Heart of Islam
          </p>
        </div>
      </div>

      {/* Decorative border elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
    </header>
  );
}
