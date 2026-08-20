import React, { useState } from 'react';
import { Target, Trophy, Clock, CheckCircle } from 'lucide-react';

const mockChallenges = [
  { id: '1', title: '52 Books in 52 Weeks', description: 'Read a book a week for a year.', progress: 12, target: 52, status: 'active', image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=300' },
  { id: '2', title: 'Sci-Fi September', description: 'Read 3 sci-fi novels this month.', progress: 1, target: 3, status: 'active', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=300' },
  { id: '3', title: 'Classic Literature Challenge', description: 'Read 5 classics.', progress: 5, target: 5, status: 'completed', image: 'https://images.unsplash.com/photo-1474932430478-367d26bef0b9?auto=format&fit=crop&q=80&w=300' },
  { id: '4', title: 'Non-Fiction November', description: 'Read 4 non-fiction books.', progress: 0, target: 4, status: 'available', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=300' }
];

export default function Challenges() {
  const [activeTab, setActiveTab] = useState('active');

  const filteredChallenges = mockChallenges.filter(c => c.status === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-stone-900 dark:text-stone-100">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-serif mb-2">Reading Challenges</h1>
        <p className="text-stone-600 dark:text-stone-400">Push your reading habits further with community challenges.</p>
      </div>

      <div className="flex space-x-6 border-b border-stone-200 dark:border-stone-800 mb-8">
        {['active', 'completed', 'available'].map(tab => (
          <button
            key={tab}
            className={`pb-2 px-1 font-medium text-sm transition-colors capitalize flex items-center space-x-2 ${activeTab === tab ? 'text-[#C8923C] border-b-2 border-[#C8923C]' : 'text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'active' && <Target className="w-4 h-4" />}
            {tab === 'completed' && <Trophy className="w-4 h-4" />}
            {tab === 'available' && <Clock className="w-4 h-4" />}
            <span>{tab}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChallenges.length > 0 ? filteredChallenges.map(challenge => (
          <div key={challenge.id} className="bg-white dark:bg-stone-800 rounded-xl overflow-hidden shadow-sm border border-stone-200 dark:border-stone-700 flex flex-col hover:shadow-md transition-shadow">
            <div className="h-40 bg-stone-200 dark:bg-stone-700 relative">
              <img src={challenge.image} alt={challenge.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-xl font-bold text-white drop-shadow-md">{challenge.title}</h3>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <p className="text-stone-600 dark:text-stone-400 text-sm mb-4 line-clamp-2">{challenge.description}</p>
              
              <div className="mt-auto">
                <div className="flex justify-between text-xs text-stone-500 dark:text-stone-400 mb-2 font-medium">
                  <span>{challenge.progress} / {challenge.target} Books</span>
                  <span>{Math.round((challenge.progress / challenge.target) * 100)}%</span>
                </div>
                <div className="w-full bg-stone-100 dark:bg-stone-700 rounded-full h-2.5 mb-4 overflow-hidden border border-stone-200 dark:border-stone-600">
                  <div className={`h-2.5 rounded-full ${challenge.status === 'completed' ? 'bg-green-500' : 'bg-[#C8923C]'}`} style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}></div>
                </div>
                
                {challenge.status === 'active' && (
                   <button className="w-full py-2 bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-200 font-medium rounded-lg transition-colors text-sm">
                     View Challenge
                   </button>
                )}
                {challenge.status === 'available' && (
                   <button className="w-full py-2 bg-[#C8923C] hover:bg-[#b07d30] text-white font-medium rounded-lg transition-colors text-sm shadow-sm">
                     Join Challenge
                   </button>
                )}
                {challenge.status === 'completed' && (
                   <div className="w-full py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-medium rounded-lg text-sm flex items-center justify-center">
                     <CheckCircle className="w-4 h-4 mr-2" />
                     Completed
                   </div>
                )}
              </div>
            </div>
          </div>
        )) : (
          <div className="col-span-full py-12 text-center text-stone-500 dark:text-stone-400 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
            No challenges found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
