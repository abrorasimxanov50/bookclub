import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Flame, BookOpen } from 'lucide-react';
import { socialService } from '../services/socialService';

export const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('weekly');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    socialService.getLeaderboard().then(data => {
      setLeaderboard(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const top1 = leaderboard[0] || { name: 'Alice Smith', username: '@alice', avatar: 'https://i.pravatar.cc/150?img=1', xp: 12500, booksRead: 45, streakDays: 112 };
  const top2 = leaderboard[1] || { name: 'Bob Johnson', username: '@bobj', avatar: 'https://i.pravatar.cc/150?img=2', xp: 11200, booksRead: 42, streakDays: 85 };
  const top3 = leaderboard[2] || { name: 'Charlie Davis', username: '@charlie', avatar: 'https://i.pravatar.cc/150?img=3', xp: 10800, booksRead: 40, streakDays: 45 };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-stone-900 dark:text-stone-100 font-sans">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold font-serif mb-4 flex items-center justify-center gap-3">
          <Trophy className="w-9 h-9 text-amber-500" />
          Community Leaderboard
        </h1>
        <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          See how you stack up against top readers. Read books, write reviews, and maintain your streak to climb the ranks.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-stone-100 dark:bg-stone-800 p-1.5 rounded-xl border border-stone-200 dark:border-stone-700">
          {['weekly', 'monthly', 'all-time'].map(tab => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-lg font-semibold text-sm capitalize transition-all ${
                activeTab === tab 
                  ? 'bg-amber-500 text-stone-950 shadow-md' 
                  : 'text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-8 mb-12 mt-8">
        {/* Rank 2 */}
        <div className="order-2 md:order-1 flex flex-col items-center">
          <div className="relative mb-3">
            <img src={top2.avatar || 'https://i.pravatar.cc/150?img=2'} alt={top2.name} className="w-20 h-20 rounded-full border-4 border-stone-300 dark:border-stone-500 object-cover" />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-stone-300 text-stone-800 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-stone-900 shadow-sm">2</div>
          </div>
          <div className="text-center bg-white dark:bg-stone-900 px-6 py-4 rounded-2xl border border-stone-200 dark:border-stone-800 w-40 h-32 flex flex-col justify-end shadow-sm">
            <h3 className="font-bold text-sm truncate w-full">{top2.name}</h3>
            <p className="text-stone-500 text-xs mb-2">{top2.xp?.toLocaleString() || 11200} XP</p>
          </div>
        </div>

        {/* Rank 1 */}
        <div className="order-1 md:order-2 flex flex-col items-center">
          <div className="relative mb-3">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-amber-500">
              <Medal className="w-8 h-8 drop-shadow-md" />
            </div>
            <img src={top1.avatar || 'https://i.pravatar.cc/150?img=1'} alt={top1.name} className="w-28 h-28 rounded-full border-4 border-amber-500 object-cover shadow-lg" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-white dark:border-stone-900 shadow-md">1</div>
          </div>
          <div className="text-center bg-white dark:bg-stone-900 px-6 py-4 rounded-2xl border border-amber-200 dark:border-amber-900/30 w-44 h-40 flex flex-col justify-end relative overflow-hidden shadow-md">
            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent"></div>
            <h3 className="font-bold text-base truncate w-full relative z-10">{top1.name}</h3>
            <p className="text-amber-600 dark:text-amber-500 text-sm font-bold mb-2 relative z-10">{top1.xp?.toLocaleString() || 12500} XP</p>
          </div>
        </div>

        {/* Rank 3 */}
        <div className="order-3 flex flex-col items-center">
          <div className="relative mb-3">
            <img src={top3.avatar || 'https://i.pravatar.cc/150?img=3'} alt={top3.name} className="w-20 h-20 rounded-full border-4 border-amber-700 object-cover" />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-stone-900 shadow-sm">3</div>
          </div>
          <div className="text-center bg-white dark:bg-stone-900 px-6 py-4 rounded-2xl border border-stone-200 dark:border-stone-800 w-40 h-24 flex flex-col justify-end shadow-sm">
            <h3 className="font-bold text-sm truncate w-full">{top3.name}</h3>
            <p className="text-stone-500 text-xs mb-2">{top3.xp?.toLocaleString() || 10800} XP</p>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 dark:bg-stone-800/50 border-b border-stone-200 dark:border-stone-800 text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold">
                <th className="px-6 py-4">Rank</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Books Read</th>
                <th className="px-6 py-4">Streak</th>
                <th className="px-6 py-4 text-right">Total XP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
              {loading ? (
                <tr><td colSpan={5} className="px-6 py-8 text-center text-stone-500">Loading leaderboard...</td></tr>
              ) : (
                leaderboard.map((user, idx) => (
                  <tr key={user.id || idx} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-stone-500 font-bold">#{idx + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={user.avatar || `https://i.pravatar.cc/150?img=${idx+1}`} alt={user.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <div className="font-bold text-stone-900 dark:text-stone-100">{user.name}</div>
                          <div className="text-xs text-stone-500">{user.username}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-stone-600 dark:text-stone-300 font-semibold text-sm">
                        <BookOpen className="w-4 h-4 mr-2 text-amber-500" />
                        {user.booksRead || user.books || 20}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-stone-600 dark:text-stone-300 font-semibold text-sm">
                        <Flame className="w-4 h-4 mr-2 text-amber-500" />
                        {user.streakDays || user.streak || 14} days
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right font-bold text-amber-600">
                      {(user.xp || 5000).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
