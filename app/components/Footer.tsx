export function Footer() {
  return (
    <footer className="relative w-full h-20 bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-900 border-t-4 border-teal-600 overflow-hidden">
      {/* Decorative border elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

      {/* Persian motif pattern */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,10 40,25 30,28 20,25" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <polygon points="30,50 20,35 30,32 40,35" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <polygon points="10,30 25,20 28,30 25,40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <polygon points="50,30 35,40 32,30 35,20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" className="text-teal-300"/>
        </svg>
      </div>

      {/* Footer content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <p className="text-teal-100 text-sm" style={{ fontFamily: 'Amiri, serif' }}>
          © 2026 • Inspired by the Beauty of Islamic Art and Architecture
        </p>
      </div>
    </footer>
  );
}
