import React, { useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onClear, className = '', ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`relative flex items-center w-full ${className}`}>
      <Search className="absolute left-4 text-stone-400" size={20} />
      <input
        ref={inputRef}
        type="text"
        className="w-full bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 pl-12 pr-20 py-3 rounded-full border-none focus:ring-2 focus:ring-amber-500 placeholder-stone-500 transition-shadow"
        {...props}
      />
      <div className="absolute right-4 flex items-center gap-2">
        {props.value && onClear && (
          <button 
            onClick={onClear}
            className="p-1 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-500"
          >
            <X size={16} />
          </button>
        )}
        <div className="hidden sm:flex items-center gap-1 text-xs text-stone-400 border border-stone-300 dark:border-stone-700 rounded px-1.5 py-0.5">
          <kbd>Ctrl</kbd>+<kbd>K</kbd>
        </div>
      </div>
    </div>
  );
};
