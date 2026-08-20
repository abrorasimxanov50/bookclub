import React, { useState, useEffect } from 'react';
import { Users, Search, BookOpen, MessageSquare, ChevronRight, Compass } from 'lucide-react';
import { clubService } from '../services/socialService';

export const Clubs = () => {
  const [clubs, setClubs] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    clubService.getAll().then(setClubs);
  }, []);
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* Header */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-xl bg-stone-900">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-800 via-stone-800 to-stone-900 z-10 opacity-90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577563908411-50cb98976fea?q=80&w=2000&auto=format&fit=crop')] opacity-20 mix-blend-overlay bg-cover bg-center z-0" />
          
          <div className="relative z-20 flex flex-col md:flex-row items-center justify-between p-8 md:p-14 gap-8 text-white">
            <div className="space-y-4 max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-amber-200 text-sm font-medium border border-white/20">
                <Compass size={16} /> Community
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-serif leading-tight">
                Read Together, Grow Together
              </h1>
              <p className="text-stone-300 text-lg">
                Join book clubs, participate in discussions, and connect with readers who share your interests.
              </p>
            </div>
            
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-semibold transition-colors shadow-lg">
                Create a Club
              </button>
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-xl font-semibold transition-colors">
                My Clubs
              </button>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-500 transition-colors" size={20} />
            <input 
              type="text" 
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search clubs by name, genre..." 
              className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white rounded-xl py-3 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto hide-scrollbar">
            {['All Clubs', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Classics'].map((tag, i) => (
              <button 
                key={tag}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                  i === 0 
                    ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 shadow-md' 
                    : 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-amber-400'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.filter(c => !search || c.name.toLowerCase().includes(search.toLowerCase())).map(club => (
            <div key={club.id} className="group bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors"></div>
              
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/40 dark:to-amber-800/40 border-2 border-white dark:border-stone-800 shadow-md flex items-center justify-center text-amber-700 dark:text-amber-400 text-2xl font-bold flex-shrink-0 group-hover:scale-105 transition-transform">
                  {club.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight group-hover:text-amber-600 transition-colors">{club.name}</h3>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-stone-500 font-medium">
                    <span className="flex items-center gap-1"><Users size={14} /> {club._count?.members || 0} members</span>
                    <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700"></span>
                    <span className="flex items-center gap-1"><MessageSquare size={14} /> {club._count?.discussions || 0} discussions</span>
                  </div>
                </div>
              </div>
              
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6 flex-1 relative z-10">
                {club.description}
              </p>
              
              <div className="mt-auto border-t border-stone-100 dark:border-stone-800 pt-4 flex items-center justify-between relative z-10">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${club.isPublic ? 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400' : 'bg-stone-100 text-stone-500'}`}>
                  {club.isPublic ? '🌐 Public' : '🔒 Private'}
                </span>
                <button
                  onClick={() => clubService.join(club.id)}
                  className="flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700 bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/40 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Join Club <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default Clubs;
