import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, Check, Heart, MoreVertical } from 'lucide-react';
import { libraryService, LibraryItem } from '../services/libraryService';
import { useAuth } from '../context/AuthContext';

export const Library = () => {
  const [activeTab, setActiveTab] = useState('reading');
  const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      libraryService.getLibrary().then(setLibraryItems);
    }
  }, [isAuthenticated]);

  const tabs = [
    { id: 'reading', label: 'Currently Reading', icon: BookOpen },
    { id: 'want-to-read', label: 'Want to Read', icon: Clock },
    { id: 'finished', label: 'Finished', icon: Check },
    { id: 'favorites', label: 'Favorites', icon: Heart },
  ];

  const filteredBooks = libraryItems.filter(item => activeTab === 'favorites' ? true : item.status === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-inter">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100 font-lora">My Library</h1>
          <p className="text-stone-600 dark:text-stone-400 mt-1">Manage your reading journey</p>
        </div>
      </div>

      <div className="flex space-x-1 overflow-x-auto border-b border-stone-200 dark:border-stone-800 mb-8 pb-px">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 border-b-2 text-sm font-medium whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-amber-500 text-amber-600 dark:text-amber-500'
                  : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300 dark:text-stone-400 dark:hover:text-stone-300'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((item) => (
          <div key={item.id} className="bg-white dark:bg-stone-900 rounded-2xl p-4 flex gap-4 border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-shadow group relative">
            <img src={item.book.cover} alt={item.book.title} className="w-24 h-32 object-cover rounded-xl shadow-sm" />
            <div className="flex-1 flex flex-col py-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 dark:text-stone-100 leading-tight">{item.book.title}</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">{item.book.author?.name || 'Unknown'}</p>
                </div>
                <button className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-300">
                  <MoreVertical size={20} />
                </button>
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between text-xs text-stone-500 dark:text-stone-400 mb-2 font-medium">
                  <span>{item.status === 'reading' ? '45%' : item.status === 'read' ? '100%' : '0%'} Complete</span>
                </div>
                <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-amber-500 h-1.5 rounded-full" 
                    style={{ width: `${item.status === 'reading' ? 45 : item.status === 'read' ? 100 : 0}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredBooks.length === 0 && (
          <div className="col-span-full py-12 text-center text-stone-500 dark:text-stone-400">
            No books found in this section.
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;
