import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Users, BookOpen, MessageSquare, ArrowLeft, Send } from 'lucide-react';
import { clubService } from '../services/clubService';

export const ClubDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [club, setClub] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('discussion');
  const [discussions, setDiscussions] = useState<any[]>([
    { id: '1', author: 'Alex Rivera', avatar: 'https://i.pravatar.cc/150?u=alex', title: 'Thoughts on Chapter 5?', replies: 12, time: '2 hours ago' },
    { id: '2', author: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?u=sarah', title: 'The main themes in our current book', replies: 34, time: '1 day ago' },
  ]);
  const [newTopic, setNewTopic] = useState('');

  useEffect(() => {
    if (id) {
      clubService.getById(id).then(data => {
        if (data) setClub(data);
      }).catch(() => {});
    }
  }, [id]);

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTopic.trim()) return;
    setDiscussions([
      {
        id: Date.now().toString(),
        author: 'You',
        avatar: 'https://i.pravatar.cc/150?img=12',
        title: newTopic,
        replies: 0,
        time: 'Just now'
      },
      ...discussions
    ]);
    setNewTopic('');
  };

  const currentClub = club || {
    id: id || '1',
    name: 'Sci-Fi Explorers',
    memberCount: 120,
    description: 'Exploring the outer limits of imagination through classic and contemporary literature. We meet weekly to discuss themes, characters, and concepts.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
  };

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-screen text-stone-900 dark:text-stone-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link to="/clubs" className="inline-flex items-center text-sm font-semibold text-stone-500 hover:text-amber-600 transition-colors mb-4">
          <ArrowLeft size={16} className="mr-1" /> Back to Clubs
        </Link>
      </div>

      {/* Banner */}
      <div className="h-64 md:h-80 w-full relative overflow-hidden">
        <img src={currentClub.image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'} alt={currentClub.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white font-serif mb-2">{currentClub.name}</h1>
            <div className="flex items-center text-stone-300 space-x-4 text-sm font-medium">
              <span className="flex items-center"><Users className="h-4 w-4 mr-1 text-amber-400" /> {(currentClub.memberCount || 120).toLocaleString()} members</span>
              <span className="flex items-center"><BookOpen className="h-4 w-4 mr-1 text-amber-400" /> Active Club</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 p-6 mb-8">
            <h2 className="text-xl font-bold font-serif mb-3">About this Club</h2>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm">{currentClub.description}</p>
          </div>

          {/* New Discussion Input */}
          <form onSubmit={handleAddPost} className="bg-white dark:bg-stone-900 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 p-4 mb-6 flex gap-3">
            <input
              type="text"
              value={newTopic}
              onChange={(e) => setNewTopic(e.target.value)}
              placeholder="Start a new discussion in this club..."
              className="flex-1 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-2.5 text-sm text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button type="submit" className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2 text-sm">
              <Send size={16} /> Post
            </button>
          </form>

          {/* Tabs */}
          <div className="flex space-x-6 border-b border-stone-200 dark:border-stone-800 mb-6">
            {['discussion', 'members', 'schedule'].map((tab) => (
              <button
                key={tab}
                className={`pb-3 font-semibold text-sm transition-colors capitalize ${activeTab === tab ? 'text-amber-600 border-b-2 border-amber-600' : 'text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-4">
            {activeTab === 'discussion' && discussions.map(disc => (
              <div key={disc.id} className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 flex items-start space-x-4 hover:shadow-md transition-shadow">
                <img src={disc.avatar} alt={disc.author} className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">{disc.title}</h3>
                  <p className="text-xs text-stone-500 mt-1">Started by {disc.author} • {disc.time}</p>
                </div>
                <div className="flex items-center text-amber-600 font-semibold text-xs bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full">
                  <MessageSquare className="h-3.5 w-3.5 mr-1" /> {disc.replies} replies
                </div>
              </div>
            ))}
            
            {activeTab === 'members' && (
              <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 divide-y divide-stone-100 dark:divide-stone-800">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="p-4 flex items-center space-x-4">
                    <img src={`https://i.pravatar.cc/150?img=${i+5}`} alt="Member" className="w-10 h-10 rounded-full" />
                    <div>
                      <h4 className="font-bold text-sm">Community Member #{i}</h4>
                      <p className="text-xs text-stone-500">Active Reader</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 divide-y divide-stone-100 dark:divide-stone-800">
                <div className="p-5 flex items-start space-x-4">
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl text-center min-w-[4rem]">
                    <span className="block text-xs font-bold text-amber-600 uppercase">Oct</span>
                    <span className="block text-xl font-bold text-stone-900 dark:text-white">12</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base">Chapters 1-5 Discussion</h4>
                    <p className="text-stone-600 dark:text-stone-400 text-xs mt-1">We will cover the initial chapters and main character developments.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 space-y-6">
          <button onClick={() => alert('Successfully joined club!')} className="w-full py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-2xl shadow-lg shadow-amber-600/20 transition-all">
            Join Club
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClubDetail;
