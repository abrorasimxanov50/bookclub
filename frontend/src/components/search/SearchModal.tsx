import React, { useState, useEffect } from 'react';
import { Search, X, Book, User, Clock, TrendingUp } from 'lucide-react';
import { Input, Badge } from '../ui';

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-stone-900/50 backdrop-blur-sm flex justify-center items-start pt-16 sm:pt-24 px-4 transition-all">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] border border-stone-200 dark:border-stone-800 animate-in fade-in slide-in-from-top-10 duration-200"
      >
        <div className="relative border-b border-stone-200 dark:border-stone-800 p-4">
          <Search className="absolute left-7 top-1/2 -translate-y-1/2 text-stone-400" size={24} />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books, authors, clubs..."
            className="w-full pl-12 pr-10 py-3 bg-transparent text-xl font-medium text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none"
          />
          <button 
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
          {!query ? (
            <div className="space-y-8">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-stone-500 mb-3 uppercase tracking-wider">
                  <Clock size={16} /> Recent Searches
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Dune', 'Brandon Sanderson', 'Sci-fi Classics'].map((term) => (
                    <Badge key={term} variant="default" className="cursor-pointer hover:bg-stone-200 dark:hover:bg-stone-700 px-3 py-1.5 text-sm">
                      {term}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-stone-500 mb-3 uppercase tracking-wider">
                  <TrendingUp size={16} /> Popular Genres
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Fantasy', 'Science Fiction', 'Mystery', 'Romance', 'Non-fiction', 'Historical'].map((term) => (
                    <Badge key={term} variant="info" className="cursor-pointer hover:opacity-80 px-3 py-1.5 text-sm">
                      {term}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Mock Results */}
              <div>
                <h4 className="text-sm font-semibold text-stone-500 mb-3 uppercase tracking-wider">Books</h4>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer transition-colors">
                      <div className="w-10 h-14 bg-stone-200 dark:bg-stone-700 rounded flex items-center justify-center text-stone-400">
                        <Book size={20} />
                      </div>
                      <div>
                        <h5 className="font-medium text-stone-900 dark:text-stone-100">Sample Book Title {i}</h5>
                        <p className="text-sm text-stone-500">Author Name</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
