interface HeaderProps {
  onToggleSidebar?: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="relative w-full h-20 md:h-24 bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-900 border-b-4 border-teal-600 overflow-hidden">
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
      <div className="relative z-10 h-full flex items-center justify-between px-4 md:px-8">
        <div className="flex-none mr-4 md:hidden">
          <button
            onClick={() => onToggleSidebar && onToggleSidebar()}
            aria-label="Toggle sidebar"
            className="p-2 rounded-md bg-teal-800/30 hover:bg-teal-800/40 text-teal-50"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="flex-1"></div>

        <div className="text-center px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-teal-50 leading-tight break-words" style={{ fontFamily: 'Cinzel, serif' }}>
            ✦ ইমাম নববির চল্লিশ হাদিস ✦
          </h1>
        </div>

        <div className="flex-1 flex justify-end">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openAboutModal'))}
            className="px-3 py-1 sm:px-6 sm:py-2 bg-emerald-700/60 hover:bg-emerald-600/70 border border-emerald-500/50 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span className="text-teal-50 text-xs sm:text-sm" style={{ fontFamily: 'Cinzel, serif' }}>
              About
            </span>
          </button>
        </div>
      </div>

      {/* Decorative border elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
    </header>
  );
}
