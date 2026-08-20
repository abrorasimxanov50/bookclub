import React, { useState, useEffect } from 'react';
import { Target, Trophy, Clock, CheckCircle, Plus } from 'lucide-react';
import { challengeService } from '../services/socialService';
import { Link } from 'react-router-dom';

const defaultImages = [
  'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1474932430478-367d26bef0b9?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600'
];

export const Challenges = () => {
  const [challenges, setChallenges] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    challengeService.getAll().then((data) => {
      setChallenges(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const handleJoin = async (id: string) => {
    try {
      await challengeService.join(id);
      alert('Joined challenge successfully!');
      const updated = await challengeService.getAll();
      setChallenges(updated);
    } catch (e) {
      alert('Challenge joined or login required!');
    }
  };

  const filtered = challenges.filter(c => {
    if (activeTab === 'all') return true;
    if (activeTab === 'public') return c.isPublic;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-stone-900 dark:text-stone-100 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif mb-2">Reading Challenges</h1>
          <p className="text-stone-600 dark:text-stone-400">Push your reading habits further with community challenges.</p>
        </div>
      </div>

      <div className="flex space-x-6 border-b border-stone-200 dark:border-stone-800 mb-8">
        {['all', 'public'].map(tab => (
          <button
            key={tab}
            className={`pb-3 px-1 font-medium text-sm transition-colors capitalize flex items-center space-x-2 ${activeTab === tab ? 'text-amber-600 border-b-2 border-amber-600 font-bold' : 'text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'all' && <Target className="w-4 h-4" />}
            {tab === 'public' && <Trophy className="w-4 h-4" />}
            <span>{tab === 'all' ? 'All Challenges' : 'Public Challenges'}</span>
          </button>
        ))}
      </div>

      {loading ? (
        <div className="py-12 text-center text-stone-500">Loading challenges...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? filtered.map((ch, idx) => (
            <div key={ch.id} className="bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-sm border border-stone-200 dark:border-stone-800 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-44 relative bg-stone-200 dark:bg-stone-800">
                <img src={ch.image || defaultImages[idx % defaultImages.length]} alt={ch.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">
                  <h3 className="text-xl font-bold text-white font-serif drop-shadow-md">{ch.title}</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-stone-600 dark:text-stone-400 text-sm mb-4 line-clamp-2">{ch.description}</p>

                <div className="mt-auto">
                  <div className="flex justify-between text-xs text-stone-500 dark:text-stone-400 mb-2 font-medium">
                    <span>Goal: {ch.goal} {ch.goalType || 'Books'}</span>
                    <span>{ch._count?.members || 1} members</span>
                  </div>
                  <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-full h-2.5 mb-5 overflow-hidden border border-stone-200 dark:border-stone-700">
                    <div className="h-2.5 rounded-full bg-amber-500" style={{ width: '40%' }}></div>
                  </div>

                  <button
                    onClick={() => handleJoin(ch.id)}
                    className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition-all shadow-md shadow-amber-600/20 text-sm flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> Join Challenge
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-12 text-center text-stone-500 dark:text-stone-400 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800">
              No challenges available at the moment.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Challenges;
