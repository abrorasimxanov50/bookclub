import React from 'react';
import { Book } from '../../types';

export interface BookCoverProps {
  book: Book;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-24 h-36',
  md: 'w-32 h-48',
  lg: 'w-48 h-72',
  xl: 'w-64 h-96',
};

export const BookCover: React.FC<BookCoverProps> = ({ book, size = 'md', className = '' }) => {
  return (
    <div 
      className={`relative rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 shrink-0 ${sizeClasses[size]} ${className}`}
      style={{ backgroundColor: book.coverColor || '#c8923c' }}
    >
      {book.coverUrl ? (
        <img 
          src={book.coverUrl} 
          alt={`Cover of ${book.title}`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-black/10 to-black/40">
          <h3 className="text-white font-serif font-bold text-sm line-clamp-3 mb-2 drop-shadow-md">
            {book.title}
          </h3>
          <p className="text-white/80 text-xs font-medium drop-shadow-md line-clamp-2">
            By Author {book.authorId}
          </p>
        </div>
      )}
      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-md" />
    </div>
  );
};
