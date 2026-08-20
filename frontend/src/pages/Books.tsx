import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, LayoutGrid, List as ListIcon, Library, Clock, Heart, CheckCircle2 } from 'lucide-react';
import { bookService } from '../services/bookService';
import type { Book } from '../types';
import { useLibrary } from '../context/LibraryContext';

export const Books = () => {
  const [activeTab, setActiveTab] = useState('All Books');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const { favorites } = useLibrary();

  useEffect(() => {
    bookService.getAll().then(setAllBooks);
  }, []);

  const tabs = [
    { name: 'All Books', icon: <Library size={18} /> },
    { name: 'Want to Read', icon: <BookmarkIcon /> },
    { name: 'Currently Reading', icon: <Clock size={18} /> },
    { name: 'Read', icon: <CheckCircle2 size={18} /> },
    { name: 'Favorites', icon: <Heart size={18} /> }
  ];

  const filteredBooks = allBooks.filter(b => {
    if (activeTab === 'All Books') return true;
    if (activeTab === 'Want to Read') return b.rating >= 4.4 && b.rating < 4.7;
    if (activeTab === 'Currently Reading') return false;
    if (activeTab === 'Read') return b.rating < 4.4;
    if (activeTab === 'Favorites') return favorites.includes(b.id);
    return true;
  });

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8 lg:gap-12">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
          <div className="bg-white dark:bg-stone-900 rounded-2xl p-5 border border-stone-200 dark:border-stone-800 sticky top-20 shadow-sm">
            <h2 className="text-xl font-bold font-serif mb-6 flex items-center gap-2 px-2">
              <BookOpen className="text-amber-600" /> My Library
            </h2>
            
            <nav className="space-y-1.5">
              {tabs.map(tab => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === tab.name 
                      ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30' 
                      : 'text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 border border-transparent'
                  }`}
                >
                  <span className={activeTab === tab.name ? 'text-amber-600 dark:text-amber-400' : 'text-stone-400'}>
                    {tab.icon}
                  </span>
                  {tab.name}
                </button>
              ))}
            </nav>

            <div className="mt-10 px-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest">Custom Shelves</h3>
                <button className="text-amber-600 text-xs font-semibold hover:underline">+ Add</button>
              </div>
              <div className="space-y-3 text-sm font-medium text-stone-600 dark:text-stone-400">
                <button className="w-full flex items-center justify-between group hover:text-amber-600 transition-colors">
                  <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Sci-Fi</span>
                  <span className="text-xs bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded-full group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 group-hover:text-amber-700">12</span>
                </button>
                <button className="w-full flex items-center justify-between group hover:text-amber-600 transition-colors">
                  <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Non-fiction</span>
                  <span className="text-xs bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded-full group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 group-hover:text-amber-700">8</span>
                </button>
                <button className="w-full flex items-center justify-between group hover:text-amber-600 transition-colors">
                  <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500"></div> To buy</span>
                  <span className="text-xs bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded-full group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 group-hover:text-amber-700">5</span>
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold font-serif">{activeTab}</h1>
              <p className="text-stone-500 mt-1">{filteredBooks.length} books</p>
            </div>
            
            <div className="flex items-center gap-2 bg-white dark:bg-stone-900 p-1 rounded-lg border border-stone-200 dark:border-stone-800">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' : 'text-stone-400 hover:text-stone-600 dark:hover:text-stone-300'}`}
              >
                <LayoutGrid size={18} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' : 'text-stone-400 hover:text-stone-600 dark:hover:text-stone-300'}`}
              >
                <ListIcon size={18} />
              </button>
            </div>
          </div>
          
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'}`}>
            {filteredBooks.map((book) => (
              <Link 
                key={book.id} 
                to={`/books/${book.id}`}
                className={`group flex ${viewMode === 'grid' ? 'flex-col' : 'flex-row gap-5 bg-white dark:bg-stone-900 p-4 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-all'}`}
              >
                <div 
                  className={`relative rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 ${viewMode === 'grid' ? 'w-full aspect-[2/3] mb-4 group-hover:-translate-y-1' : 'w-24 sm:w-32 flex-shrink-0 aspect-[2/3]'}`}
                  style={{ backgroundColor: book.coverColor }}
                >
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="absolute inset-0 w-full h-full object-cover" 
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                
                <div className={`flex flex-col ${viewMode === 'list' ? 'justify-center' : ''}`}>
                  <h3 className="font-bold text-base line-clamp-2 group-hover:text-amber-600 transition-colors leading-snug mb-1">{book.title}</h3>
                  <p className="text-stone-500 dark:text-stone-400 text-sm mb-2">{book.authorId}</p>
                  
                  {viewMode === 'list' && (
                    <p className="text-stone-600 dark:text-stone-300 text-sm line-clamp-2 mb-3 max-w-2xl">{book.description}</p>
                  )}
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-amber-500 text-amber-500" />
                      <span className="font-semibold text-sm">{book.rating}</span>
                      {viewMode === 'list' && <span className="text-stone-400 text-xs ml-1">({book.reviewCount.toLocaleString()})</span>}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

// SVG Icon Helper
function BookmarkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
    </svg>
  );
}

export default Books;
