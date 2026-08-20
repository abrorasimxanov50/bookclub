import React, { useState } from 'react';
import { Settings, MapPin, BookOpen, Users, Star, Edit2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('currently-reading');

  const tabs = [
    { id: 'currently-reading', label: 'Currently Reading' },
    { id: 'finished', label: 'Finished' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'clubs', label: 'Clubs' },
  ];

  const initial = user?.name ? user.name[0].toUpperCase() : 'U';
  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : 'Recently';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-inter">
      {/* Profile Card */}
      <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 overflow-hidden mb-8">
        {/* Cover */}
        <div className="h-48 relative">
          <img
            src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=2000"
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="px-6 sm:px-8 pb-8 relative">
          <div className="flex justify-between items-end -mt-16 mb-6 relative z-10">
            {/* Avatar */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-stone-900 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-5xl">{initial}</span>
            </div>

            {/* Edit Button */}
            <Link
              to="/settings"
              className="px-4 py-2 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-xl font-medium hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors flex items-center gap-2 text-sm border border-stone-200 dark:border-stone-700"
            >
              <Edit2 className="w-4 h-4" />
              Edit Profile
            </Link>
          </div>

          {/* User Info */}
          <div className="mb-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 font-serif">
              {user?.name || 'User'}
            </h1>
            <p className="text-stone-500 dark:text-stone-400 mt-1">
              @{user?.username || user?.email?.split('@')[0] || 'user'}
            </p>
          </div>

          <p className="text-stone-600 dark:text-stone-400 mb-5 text-sm">
            {user?.bio || 'Book lover and avid reader. Welcome to my reading profile!'}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-stone-500 dark:text-stone-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-500" />
              {user?.location || 'Earth'}
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-500" />
              Joined {joinedDate}
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold"
              style={{ background: user?.role === 'ADMIN' ? '#fef3c7' : '#f0fdf4', color: user?.role === 'ADMIN' ? '#92400e' : '#166534' }}>
              {user?.role === 'ADMIN' ? '👑 Admin' : '📚 Reader'}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 border-t border-stone-200 dark:border-stone-800 divide-x divide-stone-200 dark:divide-stone-800">
          {[
            { icon: BookOpen, label: 'Books Read', value: user?.booksRead || 0 },
            { icon: Users, label: 'Followers', value: user?.followers || 0 },
            { icon: Star, label: 'Reviews', value: user?.reviewCount || 0 },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="p-4 text-center hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
              <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-500 mb-1">
                <Icon className="w-5 h-5" />
                <span className="font-bold text-xl text-stone-900 dark:text-stone-100">{value}</span>
              </div>
              <div className="text-sm text-stone-500 dark:text-stone-400">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 overflow-x-auto mb-6 bg-stone-100 dark:bg-stone-800/50 rounded-xl p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-white dark:bg-stone-900 text-amber-600 dark:text-amber-400 shadow-sm'
                : 'text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-16 text-center bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 border-dashed">
        <BookOpen className="w-12 h-12 text-stone-300 dark:text-stone-600 mx-auto mb-3" />
        <p className="text-stone-500 dark:text-stone-400 font-medium">
          {tabs.find(t => t.id === activeTab)?.label} bo'limi tez orada...
        </p>
      </div>
    </div>
  );
};

export default Profile;
