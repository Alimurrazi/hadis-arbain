import { QuotePage } from '../data/quotes';

interface SidebarProps {
  pages: QuotePage[];
  currentPage: number;
  onPageChange: (pageIndex: number) => void;
}

export function Sidebar({ pages, currentPage, onPageChange }: SidebarProps) {
  return (
    <aside className="w-72 bg-teal-900/40 backdrop-blur-sm border-r-2 border-teal-700/50 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl text-teal-50 mb-6 pb-2 border-b border-teal-600" style={{ fontFamily: 'Cinzel, serif' }}>
          Pages
        </h2>

        <div className="space-y-3">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-300 border-2 ${
                currentPage === index
                  ? 'bg-teal-700/60 border-emerald-500 shadow-lg scale-105'
                  : 'bg-teal-800/30 border-teal-800/50 hover:bg-teal-800/50 hover:border-teal-700'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                    currentPage === index ? 'bg-emerald-500 text-emerald-950' : 'bg-teal-800 text-teal-200'
                  }`}
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {index + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-sm mb-1 ${
                      currentPage === index ? 'text-teal-50' : 'text-teal-100'
                    }`}
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {page.theme}
                  </h3>
                  <p
                    className={`text-xs line-clamp-2 ${
                      currentPage === index ? 'text-teal-100' : 'text-teal-300'
                    }`}
                    style={{ fontFamily: 'Amiri, serif' }}
                  >
                    {page.highlight}
                  </p>
                </div>
              </div>

              {/* Color indicator */}
              <div className="mt-3 flex gap-1">
                {page.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="h-1.5 flex-1 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
