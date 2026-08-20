import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Compass, BookOpen, Layers, Users, Trophy, MessageSquare, 
  Library, Book, Heart, User, Settings, ShieldCheck,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const navSections = [
    {
      title: 'MAIN',
      items: [
        { icon: Home, label: 'Home', path: '/' },
        { icon: Compass, label: 'Discover', path: '/discover' },
        { icon: BookOpen, label: 'Books', path: '/books' },
        { icon: Layers, label: 'Categories', path: '/categories' },
        { icon: Users, label: 'Clubs', path: '/clubs' },
        { icon: Trophy, label: 'Challenges', path: '/challenges' },
        { icon: MessageSquare, label: 'Community', path: '/community' },
        { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
      ]
    },
    {
      title: 'PERSONAL',
      items: [
        { icon: Library, label: 'My Library', path: '/library' },
        { icon: Book, label: 'Reading Now', path: '/reading' },
        { icon: Heart, label: 'Favorites', path: '/favorites' },
      ]
    }
  ];

  return (
    <aside className="w-64 h-screen hidden md:flex flex-col bg-white dark:bg-stone-950 border-r border-stone-200 dark:border-stone-800 sticky top-0 overflow-y-auto custom-scrollbar">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3 shrink-0">
        <div className="bg-amber-600 text-white p-2 rounded-lg">
          <BookOpen size={24} strokeWidth={2.5} />
        </div>
        <span className="font-serif font-bold text-xl tracking-tight text-stone-900 dark:text-white">
          BookClub
        </span>
      </div>

      {/* Nav Sections */}
      <div className="flex-1 px-4 space-y-8">
        {navSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-3 px-2">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-500' 
                      : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-200'}
                  `}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Nav */}
      <div className="p-4 mt-auto border-t border-stone-200 dark:border-stone-800 space-y-1">
        <NavLink to="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors">
          <Settings size={18} />
          <span>Settings</span>
        </NavLink>
        
        {/* Account card */}
        <div className="pt-3 mt-1">
          <NavLink 
            to="/profile"
            className="flex items-center gap-3 px-3 py-3 rounded-xl bg-stone-50 dark:bg-stone-900 hover:bg-amber-50 dark:hover:bg-amber-900/20 border border-stone-200 dark:border-stone-800 hover:border-amber-200 dark:hover:border-amber-800 transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
              {user?.name ? user.name[0].toUpperCase() : 'U'}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold text-stone-900 dark:text-stone-100 truncate group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">{user?.name || 'User'}</span>
              <span className="text-xs text-stone-400 dark:text-stone-500 truncate">{user?.email || ''}</span>
            </div>
            <User size={15} className="ml-auto shrink-0 text-stone-400 group-hover:text-amber-500 transition-colors" />
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
