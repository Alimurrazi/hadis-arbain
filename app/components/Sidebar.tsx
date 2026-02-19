import { QuotePage } from '../data/quotes';
import { Check } from 'lucide-react';

interface SidebarProps {
  pages: QuotePage[];
  currentPage: number;
  onPageChange: (pageIndex: number) => void;
  completedPages: Set<number>;
  onToggleComplete: (pageIndex: number) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ pages, currentPage, onPageChange, completedPages, onToggleComplete, isOpen = true, onClose }: SidebarProps) {
  return (
    <>
      {/* Backdrop for mobile when sidebar is open */}
      <div
        className={`fixed inset-0 bg-black/30 z-20 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isOpen}
        onClick={() => onClose && onClose()}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-72 transform transition-transform duration-300 z-30 bg-theme-base/95 md:bg-gradient-to-b md:from-teal-900/8 md:via-emerald-800/6 md:to-teal-900/8 border-r-2 border-theme-border md:border-teal-800/10 overflow-y-auto shadow-xl md:shadow-sm text-theme-text-primary ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:static md:translate-x-0`}
      >
        <div className="p-6">
          {/* Close button for mobile */}
          <div className="flex justify-end md:hidden mb-2">
            <button
              onClick={() => onClose && onClose()}
              className="p-1 rounded bg-theme-base/90 hover:bg-theme-base text-teal-900 shadow-sm"
              aria-label="Close sidebar"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            {pages.map((page, index) => (
              <div key={index} className="relative">
              <button onClick={() => onPageChange(index)}
              className={`w-full text-left p-4 pr-12 rounded-lg transition-all duration-300 border-2 ${
                currentPage === index
                ? 'bg-theme-surface-med border-theme-accent shadow-lg scale-105'
                : 'bg-theme-base border-theme-border hover:bg-theme-surface hover:border-theme-accent-dark'
              }`}
  >
    <div className="flex items-center gap-3">
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
          currentPage === index
            ? 'bg-theme-accent text-white'
            : 'bg-theme-surface text-theme-text-secondary'
        }`}
        style={{ fontFamily: 'Cinzel, serif' }}
      >
        {page.id}
      </div>

      <div className="flex-1 min-w-0">
        <h3
          className={`text-xs font-medium break-words ${
            currentPage === index ? 'text-theme-accent-darker' : 'text-theme-text-secondary'
          }`}
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          {page.theme}
        </h3>
      </div>
    </div>
  </button>

  <button
    onClick={(e) => {
      e.stopPropagation();
      onToggleComplete(index);
    }}
    className={`absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-300 ${
      completedPages.has(index)
        ? 'bg-theme-accent border-theme-accent shadow-lg'
        : 'bg-theme-base border-theme-border-med hover:border-theme-accent'
    }`}
    title={completedPages.has(index) ? 'Mark as unread' : 'Mark as completed'}
  >
    {completedPages.has(index) && (
      <Check className="w-4 h-4 text-white" strokeWidth={3} />
    )}
  </button>

</div>
          ))}
        </div>
      </div>
      </aside>
    </>
  );
}
