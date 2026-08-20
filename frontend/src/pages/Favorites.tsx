import React, { useState, useEffect } from 'react';
import { Heart, Trash2 } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';
import { bookService } from '../services/bookService';
import type { Book } from '../types';
import { Link } from 'react-router-dom';

export const Favorites = () => {
  const { favorites, toggleFavorite } = useLibrary();
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    bookService.getAll().then(books => {
      setAllBooks(books);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const favoriteBooks = allBooks.filter(b => favorites.includes(b.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <div className="mb-8 flex items-center gap-3">
        <Heart className="w-8 h-8 text-amber-500 fill-amber-500" />
        <div>
          <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100 font-serif">Favorite Books</h1>
          <p className="text-stone-600 dark:text-stone-400 mt-1">The stories that stayed with you</p>
        </div>
      </div>

      {loading ? (
        <div className="py-12 text-center text-stone-500">Loading favorites...</div>
      ) : favoriteBooks.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {favoriteBooks.map((book) => (
            <div key={book.id} className="group relative bg-white dark:bg-stone-900 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[2/3] overflow-hidden">
                <img src={book.cover} alt={book.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => toggleFavorite(book.id)}
                    title="Remove from favorites"
                    className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-red-500 transition-colors shadow-md"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <Link to={`/books/${book.id}`} className="p-4 flex-1 flex flex-col">
                <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100 line-clamp-1 mb-1 group-hover:text-amber-600 transition-colors">{book.title}</h3>
                <p className="text-xs text-stone-500 line-clamp-1">{typeof book.author === 'object' ? book.author.name : book.author}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-stone-500 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800">
          <Heart className="w-12 h-12 mx-auto text-stone-300 dark:text-stone-700 mb-3" />
          <p className="text-base font-semibold text-stone-700 dark:text-stone-300">No favorite books added yet</p>
          <p className="text-xs text-stone-500 mt-1 mb-4">Click the heart icon on any book to add it to your favorites list.</p>
          <Link to="/books" className="inline-block px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-amber-600/20">
            Browse Books
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
