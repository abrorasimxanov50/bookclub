import React, { useState, useEffect } from 'react';
import { Users, Search, BookOpen, ChevronRight, Compass } from 'lucide-react';
import { clubService } from '../services/clubService';
import { Link } from 'react-router-dom';

const defaultClubs = [
  { id: '1', name: 'Sci-Fi Explorers', description: 'Exploring the outer limits of imagination through classic and contemporary science fiction literature.', memberCount: 1420, currentBookId: '1' },
  { id: '2', name: 'Non-Fiction Thinkers', description: 'Deep dives into biography, science, history, and personal growth books.', memberCount: 890, currentBookId: '2' },
  { id: '3', name: 'Classic Literature Club', description: 'Reading timeless masterpieces and discussing their historical context and modern relevance.', memberCount: 2150, currentBookId: '3' },
  { id: '4', name: 'Fantasy Guild', description: 'Epic world building, magic systems, and legendary adventures in fantasy fiction.', memberCount: 1680, currentBookId: '4' },
  { id: '5', name: 'Psychology & Mind', description: 'Understanding human behavior, cognitive science, and mental models through reading.', memberCount: 1120, currentBookId: '5' },
  { id: '6', name: 'Mystery & Crime Society', description: 'Unraveling complex plots, thrillers, detective novels, and psychological suspense.', memberCount: 940, currentBookId: '6' }
];

export const Clubs = () => {
  const [clubsList, setClubsList] = useState<any[]>(defaultClubs);
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('All Clubs');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    clubService.getAll().then(data => {
      if (data && data.length > 0) {
        setClubsList(data);
      }
    }).catch(() => {});
  }, []);

  const handleJoin = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await clubService.join(id);
      alert('Successfully joined club!');
    } catch (err) {
      alert('Joined club or login required!');
    }
  };

  const filteredClubs = clubsList.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(search.toLowerCase()) || 
                          club.description.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag === 'All Clubs' || club.name.toLowerCase().includes(selectedTag.toLowerCase());
    return matchesSearch && matchesTag;
  });

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
              <button onClick={() => alert('Create club feature opening soon!')} className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition-all shadow-lg">
                Create a Club
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
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search clubs by name, genre..." 
              className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white rounded-xl py-3 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto hide-scrollbar">
            {['All Clubs', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Classics'].map((tag) => (
              <button 
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedTag === tag 
                    ? 'bg-amber-500 text-stone-950 shadow-md' 
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
          {filteredClubs.map((club, idx) => (
            <Link 
              key={club.id} 
              to={`/clubs/${club.id}`}
              className="group bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden block"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors"></div>
              
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/40 dark:to-amber-800/40 border-2 border-white dark:border-stone-800 shadow-md flex items-center justify-center text-amber-700 dark:text-amber-400 text-2xl font-bold flex-shrink-0 group-hover:scale-105 transition-transform">
                  {club.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight group-hover:text-amber-600 transition-colors">{club.name}</h3>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-stone-500 font-medium">
                    <span className="flex items-center gap-1"><Users size={14} /> {(club.memberCount || 100).toLocaleString()}</span>
                    <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700"></span>
                    <span className="flex items-center gap-1"><BookOpen size={14} /> Active</span>
                  </div>
                </div>
              </div>
              
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6 flex-1 relative z-10 line-clamp-3">
                {club.description}
              </p>
              
              <div className="mt-auto border-t border-stone-100 dark:border-stone-800 pt-4 flex items-center justify-between relative z-10">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-700 border-2 border-white dark:border-stone-900 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${idx * 4 + i}`} alt="Member" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={(e) => handleJoin(e, club.id)}
                  className="flex items-center gap-1 text-sm font-bold text-amber-600 hover:text-amber-700 bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/40 px-4 py-2 rounded-xl transition-colors"
                >
                  Join Club <ChevronRight size={16} />
                </button>
              </div>
            </Link>
          ))}
        </div>

      </main>
    </div>
  );
};

export default Clubs;
