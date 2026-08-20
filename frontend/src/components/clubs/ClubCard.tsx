import React from 'react';
import { Users, ChevronRight } from 'lucide-react';
import { Club } from '../../types';
import { Button } from '../ui';
import { BookCover } from '../books/BookCover';

export interface ClubCardProps {
  club: Club;
}

export const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  return (
    <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5 hover:shadow-md transition-shadow group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-1 group-hover:text-amber-600 transition-colors">
            {club.name}
          </h3>
          <div className="flex items-center gap-1.5 text-sm text-stone-500">
            <Users size={14} />
            <span>{club.memberCount} members</span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-5">
        {club.description}
      </p>

      {club.currentBook && (
        <div className="bg-stone-50 dark:bg-stone-800/50 rounded-lg p-3 flex gap-3 mb-5 border border-stone-100 dark:border-stone-800">
          <BookCover book={club.currentBook} size="sm" className="w-12 h-18" />
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold text-amber-600 dark:text-amber-500 uppercase tracking-wider mb-0.5">Currently Reading</span>
            <h4 className="text-sm font-medium text-stone-900 dark:text-stone-100 line-clamp-1">{club.currentBook.title}</h4>
          </div>
        </div>
      )}

      <Button variant="outline" className="w-full justify-between group-hover:border-amber-500 group-hover:text-amber-600">
        <span>View Club</span>
        <ChevronRight size={16} />
      </Button>
    </div>
  );
};
