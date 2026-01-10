'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { QuoteDisplay } from './components/QuoteDisplay';
import { IslamicPattern } from './components/IslamicPattern';
import { quotePages } from './data/quotes';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const page = quotePages[currentPage];

  return (
    <div className="size-full flex flex-col bg-gradient-to-br from-teal-950 via-emerald-950 to-cyan-950">
      <Header />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          pages={quotePages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />

        <main className="flex-1 relative overflow-hidden">
          {/* Animated background layers with Islamic patterns */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {/* Base color gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at center, ${page.colors[0]}20, transparent 70%)`,
                }}
              />

              {/* Layered Islamic patterns */}
              {page.patterns.map((pattern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="absolute inset-0"
                >
                  <IslamicPattern
                    color={pattern.color}
                    opacity={pattern.opacity}
                    patternType={pattern.type}
                  />
                </motion.div>
              ))}

              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
            </motion.div>
          </AnimatePresence>

          {/* Quote display */}
          <div className="relative z-10 h-full flex items-center justify-center p-12">
            <QuoteDisplay
              quote={page.quote}
              author={page.author}
            />
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-400">
              <path d="M 0 0 L 0 30 Q 0 0 30 0 Z" fill="currentColor" />
              <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20 rotate-90">
            <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-400">
              <path d="M 0 0 L 0 30 Q 0 0 30 0 Z" fill="currentColor" />
              <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 -rotate-90">
            <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-400">
              <path d="M 0 0 L 0 30 Q 0 0 30 0 Z" fill="currentColor" />
              <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 rotate-180">
            <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-400">
              <path d="M 0 0 L 0 30 Q 0 0 30 0 Z" fill="currentColor" />
              <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
