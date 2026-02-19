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
              className="relative bg-theme-base border-2 border-theme-accent rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
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
                  <rect width="100%" height="100%" fill="url(#modal-pattern)" className="text-theme-accent"/>
                </svg>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-theme-surface hover:bg-theme-surface-med transition-colors border border-theme-border-med"
              >
                <X className="w-5 h-5 text-theme-text-secondary" />
              </button>

              {/* Content */}
              <div className="relative p-8 md:p-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-theme-accent"></div>
                    <div className="mx-4 text-theme-accent text-3xl">✦</div>
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-theme-accent"></div>
                  </div>
                  <h2 className="text-3xl text-theme-accent-darker mb-2 font-bold" style={{ fontFamily: 'Cinzel, serif' }}>
                    ইমাম নববির চল্লিশ হাদিস
                  </h2>
                </div>

                {/* Content sections */}
                <div className="space-y-6 text-theme-text-primary">
                  {/* Our Purpose */}
                  <div>
                    {/* <h3 className="text-xl text-theme-accent-dark mb-3 flex items-center gap-2 font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>
                      <span className="text-theme-accent">✦</span> Our Purpose
                    </h3> */}
                    <p className="leading-relaxed" style={{ fontFamily: 'Amiri, serif' }}>
যুগে যুগে আলিমগণ হাদীসের ভাণ্ডার থেকে নির্দিষ্ট কিছু হাদীস চয়ন করে স্বতন্ত্র গ্রন্থে সংকলিত করেছেন। এমনই একটি জনপ্রিয় ধারা ছিল ৪০টি নির্বাচিত হাদীসের সংকলন। অসংখ্য উলামায়ে কিরাম তাঁদের নিজস্ব পছন্দানুযায়ী ৪০ হাদীসের সংকলন বের করলেও ইমাম নববীর আল আরবাঊন বা ইমাম নববীর চল্লিশ হাদিস সর্বাধিক জনপ্রিয়তা ও প্রসিদ্ধি লাভ করেছে। আর তাইতো যুগে যুগে লাখো আলিম-উলামা ও আওয়ামদের দরসে ও মুযাকারায় প্রতিনিয়ত এর চর্চা হচ্ছে।

কিন্তু সংকলনটি কেন এত খ্যাতি ও গ্রহণযোগ্যতা পেল? কারণ, সংকলনটি সমগ্র ইসলামের একটা খোলাসা তুলে ধরে। কেউ যদি হাদীসগুলো পড়ে ও নিজের জীবনে বাস্তবায়ন করে তবে আশা করা যায়, ইসলামের সামগ্রিক রূপটাই তার জীবনে প্রতিফলিত হবে। এছাড়াও হাদীসগুলো সহজবোধ্য এবং প্রতিটি মুসলিমের বাস্তব জীবনের সাথে সম্পর্কিত। তাই এই সংকলনের প্রাসঙ্গিকতা শুধু আলিমগণের তাদরীসের মধ্যেই সীমাবদ্ধ নয়; বরং প্রতিটি সাধারণ মুসলিমদের জীবনের সাথেও অঙ্গাঙ্গিভাবে জড়িত। আর একারণেই বহু স্কলার ৪০ হাদীস সংকলন করলেও ইমাম নববীর মতো প্রসিদ্ধি অন্য কোনোটি পায়নি। <a href='https://itqaan.org/course/40-hadis-grsther-bzakhza' target='_blank'> Source</a>
                    </p>
                  </div>

                  {/* Source of Quotes */}
                  <div>
                    <h3 className="text-xl text-theme-accent-dark mb-3 flex items-center gap-2 font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>
                      <span className="text-theme-accent">✦</span> Source of Quotes
                    </h3>
                    <p className="leading-relaxed mb-3" style={{ fontFamily: 'Amiri, serif' }}>
                      All contents featured on this site are carefully selected from below sources:
                    </p>
                    <ul className="space-y-2 ml-6" style={{ fontFamily: 'Amiri, serif' }}>
                      <li className="flex gap-2">
                        <span className="text-theme-accent flex-shrink-0">•</span>
                        <span><strong className="text-theme-accent-darker">hadithbd:</strong>
                        <a href='https://www.hadithbd.com/hadith/detail/?book=14&section=194' target='_blank'> Link</a></span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-theme-accent flex-shrink-0">•</span>
                        <span><strong className="text-theme-accent-darker">ইমাম নববীর চল্লিশ হাদিস (মাকতাবাতুন নূর)</strong></span>
                      </li>

                      <li className="flex gap-2">
                        <span className="text-theme-accent flex-shrink-0">•</span>
                        <span><strong className="text-theme-accent-darker">হাদিসে আরবাইন (মাকতাবাতুল আসলাফ)</strong> </span>
                      </li>

                    </ul>
                  </div>

                  {/* Design Inspiration */}
                  {/* <div>
                    <h3 className="text-xl text-theme-accent-dark mb-3 flex items-center gap-2 font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>
                      <span className="text-theme-accent">✦</span> Design Inspiration
                    </h3>
                    <p className="leading-relaxed" style={{ fontFamily: 'Amiri, serif' }}>
                      The visual aesthetics draw inspiration from traditional Islamic art and architecture, particularly
                      Persian motifs, geometric patterns, and the stunning turquoise tiles found in historic mosques.
                      Each page features unique color schemes and layered Islamic geometric patterns to create a
                      spiritually uplifting experience.
                    </p>
                  </div> */}

                  {/* Sharing the Message */}
                  {/* <div>
                    <h3 className="text-xl text-theme-accent-dark mb-3 flex items-center gap-2 font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>
                      <span className="text-theme-accent">✦</span> Our Hope
                    </h3>
                    <p className="leading-relaxed" style={{ fontFamily: 'Amiri, serif' }}>
                      We hope these quotes bring peace to your heart, clarity to your mind, and inspiration to your soul.
                      May they serve as gentle reminders of faith, patience, compassion, and the eternal wisdom that
                      transcends time and place.
                    </p>
                  </div> */}
                </div>

                {/* Footer decoration */}
                <div className="flex items-center justify-center mt-8 pt-6 border-t border-theme-border">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-theme-accent"></div>
                  <div className="mx-4 text-theme-accent text-2xl">✦</div>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-theme-accent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
