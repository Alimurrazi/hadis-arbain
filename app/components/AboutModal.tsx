import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-teal-900 to-emerald-900 border-2 border-emerald-600/50 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none rounded-2xl overflow-hidden">
                <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="modal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <path d="M 50 10 L 55 35 L 80 35 L 60 50 L 70 75 L 50 60 L 30 75 L 40 50 L 20 35 L 45 35 Z"
                            fill="none" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#modal-pattern)" className="text-teal-300"/>
                </svg>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-teal-800/50 hover:bg-teal-700/70 transition-colors border border-emerald-600/30"
              >
                <X className="w-5 h-5 text-teal-100" />
              </button>

              {/* Content */}
              <div className="relative p-8 md:p-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400"></div>
                    <div className="mx-4 text-emerald-400 text-3xl">✦</div>
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-400"></div>
                  </div>
                  <h2 className="text-3xl text-teal-50 mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                    About Islamic Wisdom
                  </h2>
                  <p className="text-sm text-emerald-300" style={{ fontFamily: 'Amiri, serif' }}>
                    A Journey Through Timeless Islamic Teachings
                  </p>
                </div>

                {/* Content sections */}
                <div className="space-y-6 text-teal-100">
                  {/* Our Purpose */}
                  <div>
                    <h3 className="text-xl text-emerald-300 mb-3 flex items-center gap-2" style={{ fontFamily: 'Cinzel, serif' }}>
                      <span className="text-emerald-400">✦</span> Our Purpose
                    </h3>
                    <p className="leading-relaxed" style={{ fontFamily: 'Amiri, serif' }}>
                      This website is dedicated to sharing the profound wisdom and beauty of Islamic teachings.
                      Our intention is to inspire reflection, provide spiritual guidance, and showcase the timeless
                      principles that have guided millions of believers for over 1,400 years.
                    </p>
                  </div>

                  {/* Source of Quotes */}
                  <div>
                    <h3 className="text-xl text-emerald-300 mb-3 flex items-center gap-2" style={{ fontFamily: 'Cinzel, serif' }}>
                      <span className="text-emerald-400">✦</span> Source of Quotes
                    </h3>
                    <p className="leading-relaxed mb-3" style={{ fontFamily: 'Amiri, serif' }}>
                      All quotes featured on this site are carefully selected from two primary sources:
                    </p>
                    <ul className="space-y-2 ml-6" style={{ fontFamily: 'Amiri, serif' }}>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span><strong className="text-emerald-200">The Holy Quran:</strong> The divine revelation sent to Prophet Muhammad (ﷺ),
                        serving as the primary source of Islamic guidance and wisdom.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span><strong className="text-emerald-200">Hadith:</strong> The authentic sayings and teachings of Prophet Muhammad (ﷺ),
                        which complement and explain the Quranic verses.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Design Inspiration */}
                  <div>
                    <h3 className="text-xl text-emerald-300 mb-3 flex items-center gap-2" style={{ fontFamily: 'Cinzel, serif' }}>
                      <span className="text-emerald-400">✦</span> Design Inspiration
                    </h3>
                    <p className="leading-relaxed" style={{ fontFamily: 'Amiri, serif' }}>
                      The visual aesthetics draw inspiration from traditional Islamic art and architecture, particularly
                      Persian motifs, geometric patterns, and the stunning turquoise tiles found in historic mosques.
                      Each page features unique color schemes and layered Islamic geometric patterns to create a
                      spiritually uplifting experience.
                    </p>
                  </div>

                  {/* Sharing the Message */}
                  <div>
                    <h3 className="text-xl text-emerald-300 mb-3 flex items-center gap-2" style={{ fontFamily: 'Cinzel, serif' }}>
                      <span className="text-emerald-400">✦</span> Our Hope
                    </h3>
                    <p className="leading-relaxed" style={{ fontFamily: 'Amiri, serif' }}>
                      We hope these quotes bring peace to your heart, clarity to your mind, and inspiration to your soul.
                      May they serve as gentle reminders of faith, patience, compassion, and the eternal wisdom that
                      transcends time and place.
                    </p>
                  </div>
                </div>

                {/* Footer decoration */}
                <div className="flex items-center justify-center mt-8 pt-6 border-t border-teal-700/50">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400"></div>
                  <div className="mx-4 text-emerald-400 text-2xl">✦</div>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-400"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
