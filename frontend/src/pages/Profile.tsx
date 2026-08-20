import React, { useState } from 'react';
import { Settings, MapPin, Link as LinkIcon, BookOpen, Users, Star } from 'lucide-react';

export const Profile = () => {
  const [activeTab, setActiveTab] = useState('currently-reading');

  const tabs = [
    { id: 'currently-reading', label: 'Currently Reading' },
    { id: 'finished', label: 'Finished' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'clubs', label: 'Clubs' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-inter">
      <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 overflow-hidden mb-8">
        <div className="h-48 bg-stone-200 dark:bg-stone-800 relative">
          <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=2000" alt="Cover" className="w-full h-full object-cover" />
        </div>
        
        <div className="px-8 pb-8 relative">
          <div className="flex justify-between items-end -mt-16 mb-6 relative z-10">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-stone-900 overflow-hidden bg-stone-100 dark:bg-stone-800">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="Profile Avatar" className="w-full h-full object-cover" />
            </div>
            <button className="px-4 py-2 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-lg font-medium hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Edit Profile
            </button>
          </div>
          
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100 font-lora">Sarah Jenkins</h1>
            <p className="text-stone-500 dark:text-stone-400 text-lg">@sarahreads</p>
          </div>
          
          <p className="text-stone-700 dark:text-stone-300 max-w-2xl mb-6">
            Avid reader of sci-fi, fantasy, and historical fiction. Always looking for the next great adventure. Coffee enthusiast and library lover.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-stone-600 dark:text-stone-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> Portland, OR
            </div>
            <div className="flex items-center gap-1.5">
              <LinkIcon className="w-4 h-4" /> sarahreads.com
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 border-t border-stone-200 dark:border-stone-800 divide-x divide-stone-200 dark:divide-stone-800">
          <div className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-500 mb-1">
              <BookOpen className="w-5 h-5" />
              <span className="font-bold text-xl text-stone-900 dark:text-stone-100">142</span>
            </div>
            <div className="text-sm text-stone-500 dark:text-stone-400">Books Read</div>
          </div>
          <div className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-500 mb-1">
              <Users className="w-5 h-5" />
              <span className="font-bold text-xl text-stone-900 dark:text-stone-100">890</span>
            </div>
            <div className="text-sm text-stone-500 dark:text-stone-400">Followers</div>
          </div>
          <div className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-500 mb-1">
              <Star className="w-5 h-5" />
              <span className="font-bold text-xl text-stone-900 dark:text-stone-100">56</span>
            </div>
            <div className="text-sm text-stone-500 dark:text-stone-400">Reviews</div>
          </div>
        </div>
      </div>

      <div className="flex space-x-2 overflow-x-auto border-b border-stone-200 dark:border-stone-800 mb-8 pb-px">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 border-b-2 text-sm font-medium whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-amber-500 text-amber-600 dark:text-amber-500'
                : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300 dark:text-stone-400 dark:hover:text-stone-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="py-8 text-center text-stone-500 dark:text-stone-400 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 border-dashed">
        Content for {tabs.find(t => t.id === activeTab)?.label} will appear here.
      </div>
    </div>
  );
};

export default Profile;
