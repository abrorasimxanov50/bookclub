import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Library, Trophy, User } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const items = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Compass, label: 'Discover', path: '/discover' },
    { icon: Library, label: 'Library', path: '/library' },
    { icon: Trophy, label: 'Challenges', path: '/challenges' },
    { icon: User, label: 'Profile', path: '/profile/me' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 flex items-center justify-around px-2 z-50 pb-safe">
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `
            flex flex-col items-center justify-center w-full h-full gap-1 transition-colors
            ${isActive ? 'text-amber-600 dark:text-amber-500' : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-300'}
          `}
        >
          <item.icon size={20} strokeWidth={2.5} />
          <span className="text-[10px] font-medium">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};
