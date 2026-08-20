import React, { useState } from 'react';
import { MessageCircle, Heart, Share2, Star, BookOpen, Target, Users } from 'lucide-react';

const mockActivities = [
  {
    id: '1',
    user: { name: 'Emma Wilson', avatar: 'https://i.pravatar.cc/150?u=emma' },
    type: 'review',
    time: '2 hours ago',
    content: 'Just finished "The Midnight Library". What a beautiful exploration of regrets and the infinite possibilities of life. Highly recommend to anyone feeling stuck.',
    book: { title: 'The Midnight Library', author: 'Matt Haig', cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100' },
    rating: 5,
    likes: 24,
    comments: 5
  },
  {
    id: '2',
    user: { name: 'David Chen', avatar: 'https://i.pravatar.cc/150?u=david' },
    type: 'completion',
    time: '5 hours ago',
    content: 'Finished reading "Dune"!',
    book: { title: 'Dune', author: 'Frank Herbert', cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=100' },
    likes: 42,
    comments: 8
  },
  {
    id: '3',
    user: { name: 'Sarah Miller', avatar: 'https://i.pravatar.cc/150?u=sarah' },
    type: 'challenge',
    time: '1 day ago',
    content: 'Joined the "52 Books in 52 Weeks" challenge. Wish me luck!',
    likes: 112,
    comments: 15
  },
  {
    id: '4',
    user: { name: 'James Rodriguez', avatar: 'https://i.pravatar.cc/150?u=james' },
    type: 'club',
    time: '2 days ago',
    content: 'Started a new discussion in Sci-Fi Explorers: "The role of AI in contemporary sci-fi". Come join the conversation!',
    likes: 18,
    comments: 22
  }
];

export default function Community() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Activity' },
    { id: 'review', label: 'Reviews', icon: Star },
    { id: 'completion', label: 'Completions', icon: BookOpen },
    { id: 'challenge', label: 'Challenges', icon: Target },
    { id: 'club', label: 'Clubs', icon: Users },
  ];

  const filteredActivities = activeFilter === 'all' 
    ? mockActivities 
    : mockActivities.filter(a => a.type === activeFilter);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-stone-900 dark:text-stone-100">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-serif mb-2">Community Feed</h1>
        <p className="text-stone-600 dark:text-stone-400">See what other readers are up to.</p>
      </div>

      {/* Filters */}
      <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide space-x-2">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors border ${
              activeFilter === filter.id
                ? 'bg-stone-900 text-white border-stone-900 dark:bg-stone-100 dark:text-stone-900 dark:border-stone-100'
                : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-700'
            }`}
          >
            {filter.icon && <filter.icon className="w-4 h-4" />}
            <span>{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Feed */}
      <div className="space-y-6">
        {filteredActivities.map(activity => (
          <div key={activity.id} className="bg-white dark:bg-stone-800 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700 p-5">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <img src={activity.user.avatar} alt={activity.user.name} className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="font-semibold">{activity.user.name}</h4>
                <p className="text-xs text-stone-500 dark:text-stone-400">{activity.time}</p>
              </div>
              <div className="ml-auto">
                {activity.type === 'review' && <span className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-xs px-2.5 py-1 rounded-full font-medium">Review</span>}
                {activity.type === 'completion' && <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs px-2.5 py-1 rounded-full font-medium">Finished Book</span>}
                {activity.type === 'challenge' && <span className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 text-xs px-2.5 py-1 rounded-full font-medium">Challenge</span>}
                {activity.type === 'club' && <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs px-2.5 py-1 rounded-full font-medium">Club</span>}
              </div>
            </div>

            {/* Content */}
            <div className="mb-4 text-stone-800 dark:text-stone-200">
              {activity.rating && (
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < activity.rating! ? 'fill-[#C8923C] text-[#C8923C]' : 'text-stone-300 dark:text-stone-600'}`} />
                  ))}
                </div>
              )}
              <p className="whitespace-pre-line leading-relaxed">{activity.content}</p>
            </div>

            {/* Attached Book/Item */}
            {activity.book && (
              <div className="flex space-x-4 mb-4 p-3 bg-stone-50 dark:bg-stone-900/50 rounded-lg border border-stone-100 dark:border-stone-700/50">
                <img src={activity.book.cover} alt={activity.book.title} className="w-12 h-16 object-cover rounded shadow-sm" />
                <div className="flex flex-col justify-center">
                  <h5 className="font-bold font-serif text-sm">{activity.book.title}</h5>
                  <p className="text-xs text-stone-500 dark:text-stone-400">{activity.book.author}</p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center space-x-6 text-sm text-stone-500 dark:text-stone-400 border-t border-stone-100 dark:border-stone-700/50 pt-4 mt-2">
              <button className="flex items-center space-x-1.5 hover:text-[#C8923C] transition-colors">
                <Heart className="w-4 h-4" />
                <span>{activity.likes}</span>
              </button>
              <button className="flex items-center space-x-1.5 hover:text-[#C8923C] transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>{activity.comments}</span>
              </button>
              <button className="flex items-center space-x-1.5 hover:text-[#C8923C] transition-colors ml-auto">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {filteredActivities.length === 0 && (
          <div className="py-12 text-center text-stone-500 dark:text-stone-400 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
            No activity found for this filter.
          </div>
        )}
      </div>
    </div>
  );
}
