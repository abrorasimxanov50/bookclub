import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Book } from '../../types';
import { BookCard } from './BookCard';
import { Button } from '../ui';

export interface BookCarouselProps {
  title: string;
  books: Book[];
  viewAllLink?: string;
}

export const BookCarousel: React.FC<BookCarouselProps> = ({ title, books, viewAllLink }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative">
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">{title}</h2>
        <div className="flex items-center gap-2">
          {viewAllLink && (
            <a href={viewAllLink} className="text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-500 mr-4">
              View All
            </a>
          )}
          <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full" onClick={() => scroll('left')}>
            <ChevronLeft size={16} />
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full" onClick={() => scroll('right')}>
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {books.map(book => (
          <div key={book.id} className="w-[160px] sm:w-[200px] shrink-0 snap-start">
            <BookCard book={book} variant="grid" />
          </div>
        ))}
      </div>
    </div>
  );
};
