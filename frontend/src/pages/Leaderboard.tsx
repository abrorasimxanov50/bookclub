import React, { useState } from 'react';
import { Trophy, Medal, Flame, BookOpen, Star } from 'lucide-react';

const mockLeaderboard = [
  { id: '1', rank: 1, name: 'Alice Smith', username: '@alice_reads', avatar: 'https://i.pravatar.cc/150?img=1', xp: 12500, books: 45, streak: 112 },
  { id: '2', rank: 2, name: 'Bob Johnson', username: '@bobj', avatar: 'https://i.pravatar.cc/150?img=2', xp: 11200, books: 42, streak: 85 },
  { id: '3', rank: 3, name: 'Charlie Davis', username: '@charlie_d', avatar: 'https://i.pravatar.cc/150?img=3', xp: 10800, books: 40, streak: 45 },
  { id: '4', rank: 4, name: 'Diana Prince', username: '@diana', avatar: 'https://i.pravatar.cc/150?img=4', xp: 9500, books: 35, streak: 20 },
  { id: '5', rank: 5, name: 'Evan Wright', username: '@evanw', avatar: 'https://i.pravatar.cc/150?img=5', xp: 8200, books: 30, streak: 12 },
  { id: '6', rank: 6, name: 'Fiona Gallagher', username: '@fiona_g', avatar: 'https://i.pravatar.cc/150?img=6', xp: 7900, books: 28, streak: 5 },
];

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState('weekly');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-stone-900 dark:text-stone-100">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold font-serif mb-4 flex items-center justify-center">
          <Trophy className="w-8 h-8 mr-3 text-[#C8923C]" />
          Leaderboard
        </h1>
        <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          See how you stack up against the community. Read books, write reviews, and maintain your streak to climb the ranks.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-stone-100 dark:bg-stone-800 p-1 rounded-lg border border-stone-200 dark:border-stone-700">
          {['weekly', 'monthly', 'yearly'].map(tab => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-md font-medium text-sm capitalize transition-colors ${
                activeTab === tab 
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-sm' 
                  : 'text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-8 mb-12 mt-8">
        {/* Rank 2 */}
        <div className="order-2 md:order-1 flex flex-col items-center">
          <div className="relative mb-3">
            <img src={mockLeaderboard[1].avatar} alt={mockLeaderboard[1].name} className="w-20 h-20 rounded-full border-4 border-stone-300 dark:border-stone-500 object-cover" />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-stone-300 text-stone-800 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-stone-900 shadow-sm">2</div>
          </div>
          <div className="text-center bg-stone-100 dark:bg-stone-800 px-6 py-4 rounded-t-xl border border-b-0 border-stone-200 dark:border-stone-700 w-40 h-32 flex flex-col justify-end">
            <h3 className="font-bold text-sm truncate w-full">{mockLeaderboard[1].name}</h3>
            <p className="text-stone-500 text-xs mb-2">{mockLeaderboard[1].xp.toLocaleString()} XP</p>
          </div>
        </div>

        {/* Rank 1 */}
        <div className="order-1 md:order-2 flex flex-col items-center">
          <div className="relative mb-3">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-yellow-500">
              <Medal className="w-8 h-8 drop-shadow-md" />
            </div>
            <img src={mockLeaderboard[0].avatar} alt={mockLeaderboard[0].name} className="w-28 h-28 rounded-full border-4 border-yellow-400 object-cover shadow-lg" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-white dark:border-stone-900 shadow-sm">1</div>
          </div>
          <div className="text-center bg-stone-100 dark:bg-stone-800 px-6 py-4 rounded-t-xl border border-b-0 border-yellow-200 dark:border-yellow-900/30 w-44 h-40 flex flex-col justify-end relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent"></div>
            <h3 className="font-bold text-base truncate w-full relative z-10">{mockLeaderboard[0].name}</h3>
            <p className="text-yellow-600 dark:text-yellow-500 text-sm font-medium mb-2 relative z-10">{mockLeaderboard[0].xp.toLocaleString()} XP</p>
          </div>
        </div>

        {/* Rank 3 */}
        <div className="order-3 flex flex-col items-center">
          <div className="relative mb-3">
            <img src={mockLeaderboard[2].avatar} alt={mockLeaderboard[2].name} className="w-20 h-20 rounded-full border-4 border-amber-700 object-cover" />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-stone-900 shadow-sm">3</div>
          </div>
          <div className="text-center bg-stone-100 dark:bg-stone-800 px-6 py-4 rounded-t-xl border border-b-0 border-stone-200 dark:border-stone-700 w-40 h-24 flex flex-col justify-end">
            <h3 className="font-bold text-sm truncate w-full">{mockLeaderboard[2].name}</h3>
            <p className="text-stone-500 text-xs mb-2">{mockLeaderboard[2].xp.toLocaleString()} XP</p>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 dark:bg-stone-900/50 border-b border-stone-200 dark:border-stone-700 text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium">
                <th className="px-6 py-4">Rank</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Books Read</th>
                <th className="px-6 py-4">Streak</th>
                <th className="px-6 py-4 text-right">Total XP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 dark:divide-stone-700">
              {mockLeaderboard.slice(3).map((user) => (
                <tr key={user.id} className="hover:bg-stone-50 dark:hover:bg-stone-700/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-stone-500 font-medium">#{user.rank}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                      <div>
                        <div className="font-medium text-stone-900 dark:text-stone-100">{user.name}</div>
                        <div className="text-xs text-stone-500">{user.username}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-stone-600 dark:text-stone-300">
                      <BookOpen className="w-4 h-4 mr-2 text-stone-400" />
                      {user.books}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-stone-600 dark:text-stone-300">
                      <Flame className="w-4 h-4 mr-2 text-orange-500" />
                      {user.streak} days
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-bold text-[#C8923C]">
                    {user.xp.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
