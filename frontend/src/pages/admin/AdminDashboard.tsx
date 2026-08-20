import React, { useEffect, useState } from 'react';
import { Users, BookOpen, Star, Target, TrendingUp, Compass, MessageSquare } from 'lucide-react';
import { adminService } from '../../services/adminService';

export const AdminDashboard = () => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    adminService.getStats().then(setStats);
  }, []);

  if (!stats) return <div className="p-8">Loading stats...</div>;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-inter">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100 font-lora">Admin Dashboard</h1>
        <p className="text-stone-600 dark:text-stone-400 mt-1">Platform overview and statistics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6 flex items-center gap-4">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-500 rounded-lg">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-stone-500 dark:text-stone-400">Total Users</p>
            <p className="text-2xl font-bold text-stone-900 dark:text-stone-100">{stats.totalUsers}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6 flex items-center gap-4">
          <div className="p-3 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-500 rounded-lg">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-stone-500 dark:text-stone-400">Total Books</p>
            <p className="text-2xl font-bold text-stone-900 dark:text-stone-100">{stats.totalBooks}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6 flex items-center gap-4">
          <div className="p-3 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-500 rounded-lg">
            <Star className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-stone-500 dark:text-stone-400">Total Reviews</p>
            <p className="text-2xl font-bold text-stone-900 dark:text-stone-100">{stats.totalReviews}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6 flex items-center gap-4">
          <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-500 rounded-lg">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-stone-500 dark:text-stone-400">Active Challenges</p>
            <p className="text-2xl font-bold text-stone-900 dark:text-stone-100">{stats.totalChallenges}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6">
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-lora mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-4 p-3 hover:bg-stone-50 dark:hover:bg-stone-800/50 rounded-lg transition-colors">
                <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-700 flex-shrink-0 flex items-center justify-center">
                  <UserIcon />
                </div>
                <div>
                  <p className="text-sm text-stone-900 dark:text-stone-100"><span className="font-semibold">User{i}</span> posted a new review on <span className="font-semibold text-amber-600 dark:text-amber-500">The Martian</span></p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">{i * 2} hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6">
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-lora mb-4">System Alerts</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm font-medium text-red-800 dark:text-red-400">High API latency detected in Book search service.</p>
              <p className="text-xs text-red-600 dark:text-red-500 mt-1">10 minutes ago</p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-400">New challenge "Summer Reading" starts in 2 days.</p>
              <p className="text-xs text-yellow-600 dark:text-yellow-500 mt-1">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

export default AdminDashboard;
