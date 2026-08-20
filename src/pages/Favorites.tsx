import React from 'react';
import { Heart, Trash2 } from 'lucide-react';

const mockFavorites = [
  { id: '1', title: 'The Name of the Wind', author: 'Patrick Rothfuss', cover: 'https://images.unsplash.com/photo-1629196914275-81691a5666db?auto=format&fit=crop&q=80&w=300' },
  { id: '2', title: 'Dune', author: 'Frank Herbert', cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=300' },
  { id: '3', title: 'Project Hail Mary', author: 'Andy Weir', cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=300' },
  { id: '4', title: 'The Midnight Library', author: 'Matt Haig', cover: 'https://images.unsplash.com/photo-1511108690759-009324a5033d?auto=format&fit=crop&q=80&w=300' },
];

export const Favorites = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-inter">
      <div className="mb-8 flex items-center gap-3">
        <Heart className="w-8 h-8 text-amber-500 fill-amber-500" />
        <div>
          <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100 font-lora">Favorite Books</h1>
          <p className="text-stone-600 dark:text-stone-400 mt-1">The stories that stayed with you</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {mockFavorites.map((book) => (
          <div key={book.id} className="group relative bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div className="relative aspect-[2/3] overflow-hidden">
              <img src={book.cover} alt={book.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 hover:text-red-400 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-lora font-semibold text-stone-900 dark:text-stone-100 line-clamp-1 mb-1">{book.title}</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-1">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
