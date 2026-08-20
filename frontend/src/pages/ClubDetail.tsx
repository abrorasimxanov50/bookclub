import React, { useState } from 'react';
import { Users, BookOpen, Calendar, MessageSquare, ChevronRight } from 'lucide-react';

const mockClub = {
  id: '1',
  name: 'Sci-Fi Explorers',
  members: 120,
  description: 'Exploring the outer limits of imagination through classic and contemporary science fiction literature. We meet weekly to discuss themes, characters, and the scientific concepts presented in our reading.',
  currentBook: {
    title: 'Dune',
    author: 'Frank Herbert',
    cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=200',
    progress: 45
  },
  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
};

const discussions = [
  { id: '1', author: 'Alex Rivera', avatar: 'https://i.pravatar.cc/150?u=alex', title: 'Thoughts on Chapter 5?', replies: 12, time: '2 hours ago' },
  { id: '2', author: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?u=sarah', title: 'The ecological themes in Dune', replies: 34, time: '1 day ago' },
];

export default function ClubDetail() {
  const [activeTab, setActiveTab] = useState('discussion');

  return (
    <div className="bg-stone-50 dark:bg-stone-900 min-h-screen text-stone-900 dark:text-stone-100">
      {/* Banner */}
      <div className="h-64 md:h-80 w-full relative">
        <img src={mockClub.image} alt={mockClub.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-2">{mockClub.name}</h1>
            <div className="flex items-center text-stone-300 space-x-4">
              <span className="flex items-center"><Users className="h-4 w-4 mr-1" /> {mockClub.members} members</span>
              <span className="flex items-center"><BookOpen className="h-4 w-4 mr-1" /> Sci-Fi</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white dark:bg-stone-800 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700 p-6 mb-8">
            <h2 className="text-xl font-bold font-serif mb-4">About</h2>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{mockClub.description}</p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-6 border-b border-stone-200 dark:border-stone-700 mb-6">
            {['discussion', 'members', 'schedule'].map((tab) => (
              <button
                key={tab}
                className={`pb-3 font-medium text-sm transition-colors capitalize ${activeTab === tab ? 'text-[#C8923C] border-b-2 border-[#C8923C]' : 'text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-4">
            {activeTab === 'discussion' && discussions.map(disc => (
              <div key={disc.id} className="bg-white dark:bg-stone-800 p-5 rounded-xl border border-stone-200 dark:border-stone-700 flex items-start space-x-4 hover:shadow-md transition-shadow cursor-pointer">
                <img src={disc.avatar} alt={disc.author} className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{disc.title}</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">Started by {disc.author} • {disc.time}</p>
                </div>
                <div className="flex items-center text-stone-500 text-sm">
                  <MessageSquare className="h-4 w-4 mr-1" /> {disc.replies}
                </div>
              </div>
            ))}
            
            {activeTab === 'members' && (
              <div className="bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 divide-y divide-stone-200 dark:divide-stone-700">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="p-4 flex items-center space-x-4">
                    <img src={`https://i.pravatar.cc/150?img=${i}`} alt="Member" className="w-10 h-10 rounded-full" />
                    <div>
                      <h4 className="font-medium">Member {i}</h4>
                      <p className="text-sm text-stone-500 dark:text-stone-400">Joined 2 months ago</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 divide-y divide-stone-200 dark:divide-stone-700">
                <div className="p-5 flex items-start space-x-4">
                  <div className="bg-stone-100 dark:bg-stone-700 p-3 rounded-lg text-center min-w-[4rem]">
                    <span className="block text-xs font-bold text-[#C8923C] uppercase">Oct</span>
                    <span className="block text-xl font-bold">12</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Chapters 1-5 Discussion</h4>
                    <p className="text-stone-600 dark:text-stone-400 text-sm mt-1">We will cover the initial setup of Arrakis and meet the Atreides family.</p>
                  </div>
                </div>
                <div className="p-5 flex items-start space-x-4">
                  <div className="bg-stone-100 dark:bg-stone-700 p-3 rounded-lg text-center min-w-[4rem]">
                    <span className="block text-xs font-bold text-[#C8923C] uppercase">Oct</span>
                    <span className="block text-xl font-bold">19</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Chapters 6-10 Discussion</h4>
                    <p className="text-stone-600 dark:text-stone-400 text-sm mt-1">The journey into the deep desert begins.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 space-y-6">
          <button className="w-full py-3 bg-[#C8923C] hover:bg-[#b07d30] text-white font-bold rounded-lg shadow-sm transition-colors">
            Join Club
          </button>

          <div className="bg-white dark:bg-stone-800 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700 p-6">
            <h3 className="text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-4">Current Reading</h3>
            <div className="flex space-x-4 mb-4">
              <img src={mockClub.currentBook.cover} alt="Cover" className="w-20 h-28 object-cover rounded shadow-sm" />
              <div>
                <h4 className="font-bold text-lg font-serif leading-tight mb-1">{mockClub.currentBook.title}</h4>
                <p className="text-stone-600 dark:text-stone-400 text-sm">{mockClub.currentBook.author}</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-stone-500 dark:text-stone-400 mb-1">
                <span>Group Progress</span>
                <span>{mockClub.currentBook.progress}%</span>
              </div>
              <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-2">
                <div className="bg-[#C8923C] h-2 rounded-full" style={{ width: `${mockClub.currentBook.progress}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
