import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, ChevronDown, Star, Sparkles, BookOpen } from 'lucide-react';
import { bookService } from '../services/bookService';
import type { Book } from '../types';

export const Discover = () => {
  const [search, setSearch] = useState('');
  const [activeGenres, setActiveGenres] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [allGenres, setAllGenres] = useState<string[]>([]);

  React.useEffect(() => {
    bookService.getAll().then(data => {
      setBooks(data);
      setAllGenres(Array.from(new Set(data.flatMap(b => b.genre))).sort());
    });
  }, []);

  const toggleGenre = (genre: string) => {
    setActiveGenres(prev => 
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchSearch = !search || 
        book.title.toLowerCase().includes(search.toLowerCase()) || 
        book.authorId.toLowerCase().includes(search.toLowerCase());
      
      const matchGenre = activeGenres.length === 0 || 
        activeGenres.some(g => book.genre.includes(g));
        
      return matchSearch && matchGenre;
    });
  }, [search, activeGenres]);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* Header & Search */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-amber-700 to-stone-900 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')] opacity-20 mix-blend-overlay bg-cover bg-center z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center py-16 px-4 sm:px-6 space-y-8 text-white">
            <div className="text-center space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-amber-100 text-sm font-medium border border-white/20 shadow-sm">
                <Sparkles size={16} className="text-amber-300" /> AI Recommendations
              </span>
              <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight drop-shadow-md">
                Discover Your Next Read
              </h1>
              <p className="text-amber-100/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
                Explore thousands of books across all genres and find the stories that speak to you.
              </p>
            </div>

            <div className="w-full max-w-3xl">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl overflow-hidden focus-within:ring-2 focus-within:ring-amber-400/50 transition-all">
                  <Search className="ml-5 text-amber-200" size={22} />
                  <input 
                    type="text" 
                    placeholder="Search by title, author, or keyword..." 
                    className="w-full bg-transparent text-white placeholder-amber-200/70 py-4 px-4 focus:outline-none text-lg font-light"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {search && (
                    <button onClick={() => setSearch('')} className="mr-5 text-amber-200 hover:text-white transition-colors">
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-2 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all flex-shrink-0 ${showFilters ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200 border-amber-200 dark:border-amber-800' : 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-400 shadow-sm'}`}
            >
              <Filter size={16} /> {showFilters ? 'Hide Genres' : 'Genres'}
            </button>
            
            {/* Quick Filter Pills (Static for now to show design) */}
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-full text-sm font-medium hover:border-amber-400 transition-colors shadow-sm flex-shrink-0">
              Top Rated <Star size={14} className="text-amber-500 fill-amber-500" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-full text-sm font-medium hover:border-amber-400 transition-colors shadow-sm flex-shrink-0">
              New Releases
            </button>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-stone-500 font-medium">
            <span>{filteredBooks.length} results</span>
            <button className="flex items-center gap-2 hover:text-stone-900 dark:hover:text-white transition-colors">
              <SlidersHorizontal size={16} /> Sort by: Relevance
            </button>
          </div>
        </div>

        {/* Expandable Genre Filters */}
        {showFilters && (
          <div className="p-5 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-wrap gap-2">
              {allGenres.map(genre => (
                <button
                  key={genre}
                  onClick={() => toggleGenre(genre)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                    activeGenres.includes(genre)
                      ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                      : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-amber-400'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
            {activeGenres.length > 0 && (
              <div className="mt-4 pt-4 border-t border-stone-100 dark:border-stone-800 flex justify-end">
                <button 
                  onClick={() => setActiveGenres([])}
                  className="text-sm text-stone-500 hover:text-stone-900 dark:hover:text-white underline transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Book Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 xl:gap-8">
            {filteredBooks.map((book) => (
              <Link to={`/books/${book.id}`} key={book.id} className="group flex flex-col h-full">
                <div 
                  className="relative w-full aspect-[2/3] rounded-xl mb-4 overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2"
                  style={{ backgroundColor: book.coverColor }}
                >
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                      <BookOpen size={14} /> View Details
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="font-bold text-sm md:text-base line-clamp-2 group-hover:text-amber-600 transition-colors leading-snug mb-1">
                    {book.title}
                  </h3>
                  <p className="text-stone-500 dark:text-stone-400 text-xs md:text-sm mb-2">{book.authorId}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs">
                      <Star size={14} className="fill-amber-500 text-amber-500" />
                      <span className="font-semibold text-stone-700 dark:text-stone-300">{book.rating}</span>
                    </div>
                    {book.genre[0] && (
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded">
                        {book.genre[0]}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center px-4">
            <div className="w-24 h-24 bg-stone-100 dark:bg-stone-900 rounded-full flex items-center justify-center mb-6">
              <Search className="text-stone-400" size={40} />
            </div>
            <h3 className="text-2xl font-bold font-serif mb-2">No books found</h3>
            <p className="text-stone-500 max-w-md mb-8">
              We couldn't find any books matching your search "{search}" and selected genres. Try adjusting your filters.
            </p>
            <button 
              onClick={() => { setSearch(''); setActiveGenres([]); }}
              className="bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-6 py-3 rounded-xl font-medium hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </main>
    </div>
  );
};

export default Discover;
