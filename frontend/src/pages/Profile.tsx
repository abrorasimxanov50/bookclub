import React, { useState, useEffect } from 'react';
import { Settings, MapPin, Link as LinkIcon, BookOpen, Users, Star, Shield, Heart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { libraryService, type LibraryItem } from '../services/libraryService';
import { bookService } from '../services/bookService';
import type { Book } from '../types';
import { Link } from 'react-router-dom';

export const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('currently-reading');
  const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([]);
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      libraryService.getLibrary(),
      bookService.getAll()
    ]).then(([lib, books]) => {
      setLibraryItems(lib);
      setAllBooks(books);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const displayName = user?.name || 'BookClub Reader';
  const usernameHandle = user?.username ? `@${user.username}` : (user?.email ? `@${user.email.split('@')[0]}` : '@reader');
  const userRole = user?.role || 'USER';

  const tabs = [
    { id: 'currently-reading', label: 'Currently Reading' },
    { id: 'all-books', label: 'All Books' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'favorites', label: 'Favorites' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-stone-900 dark:text-stone-100">
      <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-sm border border-stone-200 dark:border-stone-800 overflow-hidden mb-8">
        <div className="h-52 bg-gradient-to-r from-amber-700 via-amber-800 to-stone-900 relative">
          <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=2000" alt="Cover" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>
        
        <div className="px-8 pb-8 relative">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end -mt-16 mb-6 relative z-10 gap-4">
            <div className="w-32 h-32 rounded-3xl border-4 border-white dark:border-stone-900 overflow-hidden bg-stone-100 dark:bg-stone-800 shadow-xl">
              <img src={user?.avatar || `https://i.pravatar.cc/200?u=${user?.email || 'user'}`} alt="Profile Avatar" className="w-full h-full object-cover" />
            </div>
            <Link to="/settings" className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition-all shadow-md flex items-center gap-2 text-sm">
              <Settings className="w-4 h-4" />
              Edit Profile
            </Link>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold font-serif">{displayName}</h1>
              {userRole === 'ADMIN' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 rounded-full text-xs font-bold border border-amber-300 dark:border-amber-700">
                  <Shield size={12} /> ADMIN
                </span>
              )}
            </div>
            <p className="text-stone-500 dark:text-stone-400 text-base mt-1">{usernameHandle}</p>
          </div>
          
          <p className="text-stone-700 dark:text-stone-300 max-w-2xl mb-6 text-sm leading-relaxed">
            {user?.bio || 'Avid reader of fiction, sci-fi, and personal growth books. Always discovering new stories and sharing thoughts with the BookClub community.'}
          </p>
          
          <div className="flex flex-wrap gap-6 text-xs font-semibold text-stone-500 dark:text-stone-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-500" /> Tashkent, Uzbekistan
            </div>
            <div className="flex items-center gap-1.5">
              <LinkIcon className="w-4 h-4 text-amber-500" /> bookclub.uz
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 border-t border-stone-200 dark:border-stone-800 divide-x divide-stone-200 dark:divide-stone-800 bg-stone-50/50 dark:bg-stone-900/50">
          <div className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-500 mb-1">
              <BookOpen className="w-5 h-5" />
              <span className="font-bold text-2xl text-stone-900 dark:text-stone-100">{allBooks.length}</span>
            </div>
            <div className="text-xs font-semibold text-stone-500 dark:text-stone-400">Available Books</div>
          </div>
          <div className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-500 mb-1">
              <Users className="w-5 h-5" />
              <span className="font-bold text-2xl text-stone-900 dark:text-stone-100">1,240</span>
            </div>
            <div className="text-xs font-semibold text-stone-500 dark:text-stone-400">Community Rank</div>
          </div>
          <div className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-500 mb-1">
              <Star className="w-5 h-5" />
              <span className="font-bold text-2xl text-stone-900 dark:text-stone-100">4.9</span>
            </div>
            <div className="text-xs font-semibold text-stone-500 dark:text-stone-400">Rating</div>
          </div>
        </div>
      </div>

      {/* Tabs Header */}
      <div className="flex space-x-2 overflow-x-auto border-b border-stone-200 dark:border-stone-800 mb-8 pb-px">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 border-b-2 text-sm font-bold whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'border-amber-500 text-amber-600 dark:text-amber-500'
                : 'border-transparent text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Dynamic Tab Contents */}
      {loading ? (
        <div className="py-12 text-center text-stone-500">Loading user profile content...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {allBooks.slice(0, 5).map((book) => (
            <Link
              key={book.id}
              to={`/books/${book.id}`}
              className="group bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[2/3] overflow-hidden relative">
                <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100 line-clamp-1 group-hover:text-amber-600 transition-colors text-sm">{book.title}</h3>
                <p className="text-xs text-stone-500 line-clamp-1 mt-1">{typeof book.author === 'object' ? book.author.name : book.author}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
