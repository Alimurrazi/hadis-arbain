import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface QuoteDisplayProps {
  quote: string;
  author: string;
  onNext?: () => void;
  onPrev?: () => void;
  disableNext?: boolean;
  disablePrev?: boolean;
  onToggleMark?: () => void;
  isMarked?: boolean;
}

export function QuoteDisplay({ quote, author, onNext, onPrev, disableNext, disablePrev, onToggleMark, isMarked }: QuoteDisplayProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={quote}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto px-4 h-full flex flex-col max-h-full overflow-y-auto"
      >
        <div className="flex-1 overflow-y-auto py-4 px-2">
          {/* Decorative top border */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-emerald-600"></div>
            <div className="mx-4 text-emerald-600 text-2xl">✦</div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-emerald-600"></div>
          </div>

          {/* Quote */}
          <blockquote className="relative">
            <div className="absolute -left-2 -top-2 text-4xl text-emerald-600/20" style={{ fontFamily: 'Cinzel, serif' }}>"</div>
            <p
              className="text-base md:text-l lg:text-xl text-gray-800 leading-relaxed relative z-10 px-4"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, whiteSpace: "pre-line" }}
            >
              {quote}
            </p>
            <div className="absolute -right-2 -bottom-2 text-4xl text-emerald-600/20" style={{ fontFamily: 'Cinzel, serif' }}>"</div>
          </blockquote>

          {/* Author */}
          <div className="mt-8 text-center">
            <div className="inline-block">
              <p
                className="text-lg md:text-xl text-emerald-700 italic font-semibold"
                style={{ fontFamily: 'Amiri, serif' }}
              >
                — {author}
              </p>
              <div className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>
            </div>
          </div>

          {/* Decorative bottom border */}
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-emerald-600"></div>
            <div className="mx-4 text-emerald-600 text-2xl">✦</div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-emerald-600"></div>
          </div>
          {/* Prev / Next controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={onPrev}
              disabled={disablePrev}
              className={`p-2 rounded-full border transition disabled:opacity-40 disabled:cursor-not-allowed ${disablePrev ? 'bg-white/60 border-gray-200' : 'bg-emerald-50 border-emerald-300 hover:scale-105'}`}
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-emerald-700" />
            </button>

            <button
              onClick={onToggleMark}
              aria-pressed={isMarked}
              className={`flex items-center gap-2 px-3 py-2 rounded-md border transition ${isMarked ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white border-gray-200 text-emerald-700 hover:bg-emerald-50'}`}
            >
              <Check className="w-4 h-4" />
              {/* <span className="text-sm font-medium">{isMarked ? 'Marked' : 'Mark'}</span> */}
            </button>

            <button
              onClick={onNext}
              disabled={disableNext}
              className={`p-2 rounded-full border transition disabled:opacity-40 disabled:cursor-not-allowed ${disableNext ? 'bg-white/60 border-gray-200' : 'bg-emerald-50 border-emerald-300 hover:scale-105'}`}
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-emerald-700" />
            </button>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
