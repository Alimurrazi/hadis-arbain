import { motion } from 'motion/react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="w-full bg-theme-base border-b-2 border-theme-border px-8 py-4">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-sm text-theme-text-primary" style={{ fontFamily: 'Cinzel, serif' }}>
            Reading Progress
          </h3>
        </div>
        <div className="text-right">
          <span className="text-lg text-theme-accent" style={{ fontFamily: 'Cinzel, serif' }}>
            {completed} / {total}
          </span>
          <span className="text-xs text-theme-text-muted ml-2" style={{ fontFamily: 'Amiri, serif' }}>
            ({percentage.toFixed(0)}%)
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative h-3 bg-theme-surface rounded-full overflow-hidden border border-theme-border">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="progress-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="currentColor" className="text-theme-text-disabled"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#progress-pattern)"/>
          </svg>
        </div>

        {/* Progress fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative h-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 shadow-lg"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Decorative dots on progress */}
          {percentage > 0 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
          )}
        </motion.div>
      </div>

      {/* Milestone indicators */}
      <div className="flex justify-between mt-1 px-0.5">
        {[0, 25, 50, 75, 100].map((milestone) => (
          <div key={milestone} className="flex flex-col items-center">
            <div className={`w-0.5 h-1.5 ${percentage >= milestone ? 'bg-theme-accent-bright' : 'bg-theme-border-med'}`}></div>
            <span className={`text-[10px] mt-0.5 ${percentage >= milestone ? 'text-theme-accent' : 'text-theme-text-muted'}`} style={{ fontFamily: 'Amiri, serif' }}>
              {milestone}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
