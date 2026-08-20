import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Book } from '../../types';
import { BookCover } from './BookCover';
import { RatingStars, Badge, ProgressBar } from '../ui';

export interface BookCardProps {
  book: Book;
  variant?: 'grid' | 'list' | 'compact';
  showProgress?: boolean;
  progress?: number;
  onFavorite?: (bookId: string, isFav: boolean) => void;
  isFavorite?: boolean;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  variant = 'grid',
  showProgress = false,
  progress = 0,
  onFavorite,
  isFavorite = false,
}) => {
  const [fav, setFav] = useState(isFavorite);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFav(!fav);
    onFavorite?.(book.id, !fav);
  };

  if (variant === 'compact') {
    return (
      <div className="flex gap-3 p-2 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors group cursor-pointer">
        <BookCover book={book} size="sm" />
        <div className="flex flex-col justify-center py-1 overflow-hidden">
          <h4 className="font-semibold text-stone-900 dark:text-stone-100 truncate">{book.title}</h4>
          <p className="text-sm text-stone-500 dark:text-stone-400 truncate mb-1">Author {book.authorId}</p>
          <RatingStars rating={book.rating} size="sm" />
        </div>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:shadow-md transition-shadow group cursor-pointer relative">
        <BookCover book={book} size="md" />
        <div className="flex flex-col flex-1 py-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 line-clamp-1">{book.title}</h3>
              <p className="text-stone-600 dark:text-stone-400 mb-2">Author {book.authorId}</p>
            </div>
            <button onClick={handleFavorite} className="p-2 -mr-2 -mt-2 text-stone-400 hover:text-red-500 transition-colors z-10">
              <Heart className={fav ? 'fill-red-500 text-red-500' : ''} size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <RatingStars rating={book.rating} size="sm" />
            <span className="text-xs text-stone-500">({book.reviewCount})</span>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-auto">
            {book.genres.slice(0, 3).map(g => (
              <Badge key={g} variant="default">{g}</Badge>
            ))}
          </div>

          {showProgress && (
            <div className="mt-4">
              <ProgressBar value={progress} size="sm" showLabel />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Grid variant
  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="relative mb-3 inline-block">
        <BookCover book={book} size="lg" className="w-full h-auto aspect-[2/3]" />
        <button 
          onClick={handleFavorite} 
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 dark:bg-stone-900/80 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
        >
          <Heart className={fav ? 'fill-red-500 text-red-500' : 'text-stone-700 dark:text-stone-300'} size={18} />
        </button>
      </div>
      <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100 line-clamp-1 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
        {book.title}
      </h3>
      <p className="text-sm text-stone-600 dark:text-stone-400 truncate mb-1">Author {book.authorId}</p>
      <div className="flex items-center gap-1.5">
        <RatingStars rating={book.rating} size="sm" />
        <span className="text-xs text-stone-500">({book.reviewCount})</span>
      </div>
    </div>
  );
};
