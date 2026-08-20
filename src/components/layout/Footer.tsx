import React from 'react';
import { BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 py-12 px-4 sm:px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <BookOpen className="text-amber-600 dark:text-amber-500" size={24} />
          <span className="font-serif font-bold text-xl text-stone-900 dark:text-white">BookClub</span>
        </div>
        
        <p className="text-sm text-stone-500 text-center md:text-left">
          © {new Date().getFullYear()} BookClub Platform. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-stone-500 font-medium">
          <a href="#" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">About</a>
          <a href="#" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">Privacy</a>
          <a href="#" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};
