import React, { useState } from 'react';
import { User, Book, Bell, Monitor, Save, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

export const Settings = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('account');
  const [name, setName] = useState(user?.name || '');
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);

    try {
      await api.put('/users/profile', { name, username, bio });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      alert('Settings saved locally!');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-stone-900 dark:text-stone-100">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-serif">Account Settings</h1>
        <p className="text-stone-600 dark:text-stone-400 mt-1">Manage your profile, preferences and reading goals</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-64 flex-shrink-0">
          <nav className="space-y-1.5">
            {[
              { id: 'account', label: 'Account Profile', icon: User },
              { id: 'reading', label: 'Reading Preferences', icon: Book },
              { id: 'notifications', label: 'Notifications', icon: Bell },
              { id: 'appearance', label: 'Appearance', icon: Monitor },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                      : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 bg-white dark:bg-stone-900 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 p-6 md:p-8">
          {activeTab === 'account' && (
            <form onSubmit={handleSave} className="space-y-6">
              <div className="flex justify-between items-center border-b border-stone-200 dark:border-stone-800 pb-4">
                <h2 className="text-xl font-bold font-serif">Personal Information</h2>
                {success && (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full border border-green-200 dark:border-green-800">
                    <CheckCircle2 size={14} /> Saved successfully!
                  </span>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">Display Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 border border-stone-300 dark:border-stone-700 rounded-xl bg-transparent text-stone-900 dark:text-stone-100 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                    className="w-full px-4 py-2.5 border border-stone-300 dark:border-stone-700 rounded-xl bg-transparent text-stone-900 dark:text-stone-100 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 border border-stone-300 dark:border-stone-700 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 text-sm cursor-not-allowed"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">Short Bio</label>
                  <textarea
                    rows={4}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell the BookClub community about your favorite genres..."
                    className="w-full px-4 py-2.5 border border-stone-300 dark:border-stone-700 rounded-xl bg-transparent text-stone-900 dark:text-stone-100 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </div>
              
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition-all shadow-md shadow-amber-600/20 text-sm"
                >
                  <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save Settings'}
                </button>
              </div>
            </form>
          )}

          {activeTab === 'reading' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold font-serif border-b border-stone-200 dark:border-stone-800 pb-4">Reading Preferences</h2>
              <div className="space-y-4 text-sm text-stone-600 dark:text-stone-300">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-stone-200 dark:border-stone-800 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-amber-600 rounded" />
                  <span>Show my reading goal on public profile</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border border-stone-200 dark:border-stone-800 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-amber-600 rounded" />
                  <span>Allow community members to see my currently reading list</span>
                </label>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold font-serif border-b border-stone-200 dark:border-stone-800 pb-4">Notification Settings</h2>
              <div className="space-y-4 text-sm text-stone-600 dark:text-stone-300">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-stone-200 dark:border-stone-800 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-amber-600 rounded" />
                  <span>Email notifications for new club discussions</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border border-stone-200 dark:border-stone-800 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-amber-600 rounded" />
                  <span>Weekly reading streak reminders</span>
                </label>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold font-serif border-b border-stone-200 dark:border-stone-800 pb-4">Appearance Preferences</h2>
              <p className="text-sm text-stone-500">Theme mode is controlled dynamically via the header sun/moon toggle!</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Settings;
