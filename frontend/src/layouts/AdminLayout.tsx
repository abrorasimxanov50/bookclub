import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { BookOpen, Users, Flag, Settings, ArrowLeft } from 'lucide-react';
import { ToastProvider } from '../components/ui/Toast';

export const AdminLayout: React.FC = () => {
  return (
    <ToastProvider>
      <div className="flex min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans selection:bg-amber-200 dark:selection:bg-amber-900/50">
        
        {/* Admin Sidebar */}
        <aside className="w-64 border-r border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 flex flex-col">
          <div className="p-6 border-b border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-2 mb-6 text-amber-600 dark:text-amber-500">
              <BookOpen size={24} />
              <span className="font-serif font-bold text-xl">Admin Panel</span>
            </div>
            <NavLink to="/" className="flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
              <ArrowLeft size={16} /> Back to App
            </NavLink>
          </div>
          
          <nav className="p-4 space-y-1 flex-1">
            {[
              { icon: BookOpen, label: 'Dashboard', path: '/admin', end: true },
              { icon: BookOpen, label: 'Books', path: '/admin/books' },
              { icon: Users, label: 'Users', path: '/admin/users' },
              { icon: Flag, label: 'Reviews', path: '/admin/reviews' },
              { icon: Flag, label: 'Challenges', path: '/admin/challenges' },
              { icon: Users, label: 'Clubs', path: '/admin/clubs' },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) => `
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-500' 
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-200'}
                `}
              >
                <item.icon size={18} />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 overflow-auto p-8">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </ToastProvider>
  );
};
