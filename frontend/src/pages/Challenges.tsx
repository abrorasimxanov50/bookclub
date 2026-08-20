import React, { useState, useEffect } from 'react';
import { Target, Trophy, Clock, CheckCircle, Plus } from 'lucide-react';
import { challengeService } from '../services/challengeService';
import { Link } from 'react-router-dom';

export const Challenges = () => {
  const [challenges, setChallenges] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);

  const fetchChallenges = () => {
    setLoading(true);
    challengeService.getAll().then((data) => {
      setChallenges(data || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchChallenges();
  }, []);

  const handleJoin = async (id: string) => {
    try {
      await challengeService.join(id);
      fetchChallenges();
    } catch (e) {
      alert('Failed to join challenge. Please make sure you are logged in.');
    }
  };

  const images = [
    'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1474932430478-367d26bef0b9?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-stone-900 dark:text-stone-100 font-sans">
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden mb-10 bg-gradient-to-r from-amber-600 to-amber-800 p-8 md:p-12 text-white shadow-lg">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-4">
            <Trophy size={14} /> Community Reading Goals
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Reading Challenges</h1>
          <p className="text-amber-100 text-base md:text-lg">
            Challenge yourself and join thousands of readers achieving their annual reading milestones together.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
          <Trophy size={400} />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-4 border-b border-stone-200 dark:border-stone-800 mb-8 pb-px">
        {[
          { id: 'all', label: 'All Challenges', icon: Target },
          { id: 'public', label: 'Public', icon: Clock },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-2 font-medium text-sm transition-all flex items-center space-x-2 border-b-2 ${
                activeTab === tab.id
                  ? 'text-amber-600 dark:text-amber-400 border-amber-500 font-bold'
                  : 'text-stone-500 border-transparent hover:text-stone-700 dark:hover:text-stone-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Challenges Grid */}
      {loading ? (
        <div className="py-20 text-center text-stone-400 font-medium">Loading challenges from API...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.length > 0 ? (
            challenges.map((challenge, idx) => {
              const bgImg = images[idx % images.length];
              const goal = challenge.goal || 12;
              const current = challenge._count?.members || 0;
              const percent = Math.min(100, Math.round((current / goal) * 100));

              return (
                <div
                  key={challenge.id}
                  className="bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-sm border border-stone-200 dark:border-stone-800 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="h-44 relative overflow-hidden">
                    <img src={bgImg} alt={challenge.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">
                      <h3 className="text-xl font-serif font-bold text-white leading-tight drop-shadow-md">
                        {challenge.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {challenge.description}
                    </p>

                    <div>
                      <div className="flex justify-between text-xs text-stone-500 dark:text-stone-400 mb-2 font-semibold">
                        <span>Goal: {goal} {challenge.goalType || 'Books'}</span>
                        <span className="text-amber-600 dark:text-amber-400 font-bold">{current} Members</span>
                      </div>

                      <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-full h-2 mb-6 overflow-hidden">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500"
                          style={{ width: `${Math.max(10, percent)}%` }}
                        ></div>
                      </div>

                      <button
                        onClick={() => handleJoin(challenge.id)}
                        className="w-full py-3 bg-stone-900 hover:bg-amber-600 dark:bg-stone-800 dark:hover:bg-amber-600 text-white font-bold rounded-xl transition-all text-sm shadow-md flex items-center justify-center gap-2"
                      >
                        <Plus size={16} /> Join Challenge
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-16 text-center text-stone-500 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 border-dashed">
              No challenges available at the moment.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Challenges;
