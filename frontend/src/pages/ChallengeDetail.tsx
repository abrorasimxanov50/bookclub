import React from 'react';
import { Target, Users, BookOpen, Trophy, ChevronRight, BookMarked } from 'lucide-react';

const mockChallenge = {
  id: '1',
  title: '52 Books in 52 Weeks',
  description: 'The ultimate reading challenge. Push your limits and expand your horizons by reading one book every week for a full year. Any book format counts: physical, ebook, or audiobook.',
  rules: [
    'Read 52 books within the calendar year.',
    'Books must be at least 150 pages to count.',
    'Audiobooks and graphic novels are allowed.',
    'Rereads count towards the goal.'
  ],
  progress: 12,
  target: 52,
  participants: 4521,
  image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=1200'
};

const topParticipants = [
  { rank: 1, name: 'Alice Smith', books: 45, avatar: 'https://i.pravatar.cc/150?img=1' },
  { rank: 2, name: 'Bob Johnson', books: 42, avatar: 'https://i.pravatar.cc/150?img=2' },
  { rank: 3, name: 'Charlie Davis', books: 40, avatar: 'https://i.pravatar.cc/150?img=3' },
];

const eligibleBooks = [
  { id: '1', title: 'The Midnight Library', author: 'Matt Haig', cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200' },
  { id: '2', title: 'Atomic Habits', author: 'James Clear', cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=200' },
  { id: '3', title: 'Project Hail Mary', author: 'Andy Weir', cover: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=200' },
];

export default function ChallengeDetail() {
  const percentComplete = Math.round((mockChallenge.progress / mockChallenge.target) * 100);

  return (
    <div className="bg-stone-50 dark:bg-stone-900 min-h-screen text-stone-900 dark:text-stone-100">
      {/* Banner */}
      <div className="h-64 md:h-80 w-full relative">
        <img src={mockChallenge.image} alt={mockChallenge.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-3">{mockChallenge.title}</h1>
            <div className="flex items-center text-stone-300 space-x-6 font-medium text-sm">
              <span className="flex items-center"><Target className="h-4 w-4 mr-1.5" /> Annual Challenge</span>
              <span className="flex items-center"><Users className="h-4 w-4 mr-1.5" /> {mockChallenge.participants.toLocaleString()} joined</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-8">
          <div className="bg-white dark:bg-stone-800 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700 p-6 sm:p-8">
            <h2 className="text-2xl font-bold font-serif mb-4 flex items-center">
               <BookMarked className="w-5 h-5 mr-2 text-[#C8923C]" />
               About this Challenge
            </h2>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-8 text-lg">{mockChallenge.description}</p>
            
            <h3 className="text-lg font-bold mb-4 flex items-center">
               <Target className="w-5 h-5 mr-2 text-[#C8923C]" />
               Rules & Guidelines
            </h3>
            <ul className="space-y-3">
              {mockChallenge.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start text-stone-600 dark:text-stone-300">
                  <span className="text-[#C8923C] mr-3 font-bold">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-stone-800 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700 p-6 sm:p-8">
             <h2 className="text-xl font-bold font-serif mb-6 flex items-center">
               <BookOpen className="w-5 h-5 mr-2 text-[#C8923C]" />
               Books that count
             </h2>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
               {eligibleBooks.map(book => (
                 <div key={book.id} className="group cursor-pointer">
                   <div className="aspect-[2/3] overflow-hidden rounded-lg mb-2 border border-stone-200 dark:border-stone-700 shadow-sm">
                     <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                   </div>
                   <h4 className="font-semibold text-sm line-clamp-1">{book.title}</h4>
                   <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-1">{book.author}</p>
                 </div>
               ))}
               <div className="aspect-[2/3] rounded-lg border-2 border-dashed border-stone-300 dark:border-stone-600 flex flex-col items-center justify-center text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-700/50 transition-colors cursor-pointer">
                  <span className="text-sm font-medium text-center px-2">View All<br/>Eligible Books</span>
               </div>
             </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 space-y-6">
          <div className="bg-white dark:bg-stone-800 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700 p-6">
            <h3 className="text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-4">Your Progress</h3>
            
            <div className="flex items-end justify-between mb-2">
              <div className="text-3xl font-bold font-serif text-[#C8923C]">{mockChallenge.progress}<span className="text-lg text-stone-500 dark:text-stone-400 font-sans font-normal"> / {mockChallenge.target}</span></div>
              <div className="text-stone-500 font-medium mb-1">{percentComplete}%</div>
            </div>
            
            <div className="w-full bg-stone-100 dark:bg-stone-700 rounded-full h-3 mb-6 overflow-hidden border border-stone-200 dark:border-stone-600 shadow-inner">
              <div className="bg-[#C8923C] h-3 rounded-full transition-all duration-1000" style={{ width: `${percentComplete}%` }}></div>
            </div>

            <button className="w-full py-3 bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-200 font-bold rounded-lg transition-colors border border-stone-200 dark:border-stone-600">
              Leave Challenge
            </button>
          </div>

          <div className="bg-white dark:bg-stone-800 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700 p-6">
            <h3 className="text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-4 flex items-center">
              <Trophy className="w-4 h-4 mr-2" /> Leaderboard
            </h3>
            
            <div className="space-y-4">
              {topParticipants.map((p, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className={`font-bold w-5 text-center ${p.rank === 1 ? 'text-yellow-500' : p.rank === 2 ? 'text-stone-400' : p.rank === 3 ? 'text-amber-700' : 'text-stone-500'}`}>
                    #{p.rank}
                  </div>
                  <img src={p.avatar} alt={p.name} className="w-8 h-8 rounded-full border border-stone-200 dark:border-stone-700" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{p.name}</div>
                  </div>
                  <div className="font-semibold text-sm text-[#C8923C]">{p.books} <span className="text-stone-500 font-normal text-xs">bks</span></div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-2 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 font-medium transition-colors flex items-center justify-center">
              View Full Leaderboard <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
