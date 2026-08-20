import React from 'react';
import { Book } from '../../types';
import { BookCard } from './BookCard';
import { BookCardSkeleton } from './BookCardSkeleton';

export interface BookGridProps {
  books: Book[];
  loading?: boolean;
  columns?: 2 | 3 | 4 | 5 | 6;
  variant?: 'grid' | 'list';
}

const colClasses = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
};

export const BookGrid: React.FC<BookGridProps> = ({ books, loading = false, columns = 4, variant = 'grid' }) => {
  if (loading) {
    return (
      <div className={`grid gap-6 ${variant === 'grid' ? colClasses[columns] : 'grid-cols-1 md:grid-cols-2'}`}>
        {Array.from({ length: columns * 2 }).map((_, i) => (
          <BookCardSkeleton key={i} variant={variant} />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${variant === 'grid' ? colClasses[columns] : 'grid-cols-1 md:grid-cols-2'}`}>
      {books.map(book => (
        <BookCard key={book.id} book={book} variant={variant} />
      ))}
    </div>
  );
};
