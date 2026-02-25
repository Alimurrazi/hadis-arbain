'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { QuoteDisplay } from './components/QuoteDisplay';
import { AboutModal } from './components/AboutModal';
import { quotePages } from './data/quotes';
import { ProgressBar } from './components/ProgressBar';
import { SeoHead } from './components/SeoHead';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [completedPages, setCompletedPages] = useState(new Set<number>());

useEffect(() => {
  const saved = localStorage.getItem('islamicWisdomCompleted');
  if (saved) {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCompletedPages(new Set(JSON.parse(saved)));
  }
}, []);

  const page = quotePages[currentPage];

    // Save completed pages to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('islamicWisdomCompleted', JSON.stringify([...completedPages]));
  }, [completedPages]);

  // Listen for About button clicks from Header
  useEffect(() => {
    const handleOpenAboutModal = () => setIsAboutModalOpen(true);
    window.addEventListener('openAboutModal', handleOpenAboutModal);
    return () => window.removeEventListener('openAboutModal', handleOpenAboutModal);
  }, []);

  // Initialize sidebar visibility based on viewport width (mobile: closed)
  useEffect(() => {
    const m = window.matchMedia('(min-width: 768px)');
    const apply = () => setIsSidebarOpen(m.matches);
    apply();
    m.addEventListener('change', apply);
    return () => m.removeEventListener('change', apply);
  }, []);

    const handleToggleComplete = (pageIndex: number) => {
    setCompletedPages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(pageIndex)) {
        newSet.delete(pageIndex);
      } else {
        newSet.add(pageIndex);
      }
      return newSet;
    });
  };

  return (
  <>
  <SeoHead/>
    <div className="size-full flex flex-col bg-theme-base">
      <Header onToggleSidebar={() => setIsSidebarOpen((s) => !s)} />
      <ProgressBar completed={completedPages.size} total={quotePages.length} />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          pages={quotePages}
          currentPage={currentPage}
          onPageChange={(idx) => {
            setCurrentPage(idx);
            // close sidebar on mobile after selecting
            if (window.matchMedia && !window.matchMedia('(min-width: 768px)').matches) {
              setIsSidebarOpen(false);
            }
          }}
          completedPages={completedPages}
          onToggleComplete={handleToggleComplete}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
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
              />

              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
            </motion.div>
          </AnimatePresence>

          {/* Quote display */}
          <div className="relative z-10 h-full flex items-center justify-center p-8">
            <QuoteDisplay
              quote={page.quote}
              source={page.source}
              onNext={() => setCurrentPage((c) => Math.min(c + 1, quotePages.length - 1))}
              onPrev={() => setCurrentPage((c) => Math.max(c - 1, 0))}
              disableNext={currentPage >= quotePages.length - 1}
              disablePrev={currentPage <= 0}
              onToggleMark={() => handleToggleComplete(currentPage)}
              isMarked={completedPages.has(currentPage)}
            />
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full text-theme-accent-bright">
              <path d="M 0 0 L 0 30 Q 0 0 30 0 Z" fill="currentColor" />
              <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20 rotate-90">
            <svg viewBox="0 0 100 100" className="w-full h-full text-theme-accent-bright">
              <path d="M 0 0 L 0 30 Q 0 0 30 0 Z" fill="currentColor" />
              <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 -rotate-90">
            <svg viewBox="0 0 100 100" className="w-full h-full text-theme-accent-bright">
              <path d="M 0 0 L 0 30 Q 0 0 30 0 Z" fill="currentColor" />
              <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 rotate-180">
            <svg viewBox="0 0 100 100" className="w-full h-full text-theme-accent-bright">
              <path d="M 0 0 L 0 30 Q 0 0 30 0 Z" fill="currentColor" />
              <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
        </main>
      </div>

      {/* About Modal */}
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </div>
    </>
  );
}
