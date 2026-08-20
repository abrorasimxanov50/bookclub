import React, { useState } from 'react';
import { User, Book, Bell, Monitor, Save } from 'lucide-react';

export const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-inter">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100 font-lora">Settings</h1>
        <p className="text-stone-600 dark:text-stone-400 mt-1">Manage your account and preferences</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-64 flex-shrink-0">
          <nav className="space-y-1">
            {[
              { id: 'account', label: 'Account', icon: User },
              { id: 'reading', label: 'Reading', icon: Book },
              { id: 'notifications', label: 'Notifications', icon: Bell },
              { id: 'appearance', label: 'Appearance', icon: Monitor },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-500'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800/50 dark:hover:text-stone-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </aside>

        <main className="flex-1 bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6 md:p-8">
          {activeTab === 'account' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-lora border-b border-stone-200 dark:border-stone-800 pb-4">Account Profile</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Display Name</label>
                  <input type="text" defaultValue="Sarah Jenkins" className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-transparent text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Username</label>
                  <input type="text" defaultValue="sarahreads" className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-transparent text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Email</label>
                  <input type="email" defaultValue="sarah@example.com" className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-transparent text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Bio</label>
                  <textarea rows={4} defaultValue="Avid reader of sci-fi, fantasy, and historical fiction..." className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-transparent text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                </div>
              </div>
              
              <div className="pt-4 flex justify-end">
                <button className="flex items-center gap-2 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors">
                  <Save className="w-4 h-4" /> Save Changes
                </button>
              </div>
            </div>
          )}
          
          {activeTab !== 'account' && (
            <div className="py-12 text-center text-stone-500 dark:text-stone-400">
              Settings for {activeTab} will appear here.
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Settings;
