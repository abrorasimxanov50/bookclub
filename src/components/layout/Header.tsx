import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  BookOpen, Search, Bell, Sun, Moon, Menu, X,
  User, Settings, LogOut, ChevronDown, BookMarked,
  Heart, BookOpenCheck, LayoutDashboard, Home,
  Compass, Layers, Users, Trophy, MessageSquare,
  Library
} from 'lucide-react';
import { SearchModal } from '../search/SearchModal';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

// ─── Nav Items ──────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Home',       path: '/',           icon: Home },
  { label: 'Discover',   path: '/discover',   icon: Compass },
  { label: 'Books',      path: '/books',      icon: BookOpen },
  { label: 'Categories', path: '/categories', icon: Layers },
  { label: 'Clubs',      path: '/clubs',      icon: Users },
  { label: 'Challenges', path: '/challenges', icon: Trophy },
  { label: 'Community',  path: '/community',  icon: MessageSquare },
];

const PROFILE_ITEMS = [
  { label: 'My Profile',   path: '/profile/alexreader', icon: User },
  { label: 'Dashboard',    path: '/dashboard',           icon: LayoutDashboard },
  { label: 'My Library',   path: '/library',             icon: Library },
  { label: 'Reading Now',  path: '/reading',             icon: BookOpenCheck },
  { label: 'Favorites',    path: '/favorites',           icon: Heart },
  { label: 'Settings',     path: '/settings',            icon: Settings },
];

// ─── Account Dropdown ────────────────────────────────────────────────────────
const AccountDropdown: React.FC<{ onLogout: () => void; user: any }> = ({ onLogout, user }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        id="account-dropdown-trigger"
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 pl-1 pr-2 py-1.5 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
          {user?.name ? user.name[0].toUpperCase() : 'U'}
        </div>
        <span className="hidden lg:block text-sm font-semibold text-stone-800 dark:text-stone-100 whitespace-nowrap">
          {user?.name || 'User'}
        </span>
        <ChevronDown
          size={14}
          className={`text-stone-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-60 z-50 rounded-2xl shadow-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden">
          {/* User info */}
          <div className="px-4 py-4 border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold shrink-0">
                {user?.name ? user.name[0].toUpperCase() : 'U'}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-stone-900 dark:text-stone-100 text-sm truncate">{user?.name || 'User'}</div>
                <div className="text-xs text-stone-500 dark:text-stone-400 truncate">{user?.email || ''}</div>
              </div>
            </div>
          </div>

          {/* Menu items */}
          <div className="py-2 px-2">
            {PROFILE_ITEMS.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-stone-700 dark:text-stone-200 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-700 dark:hover:text-amber-400 transition-colors font-medium"
              >
                <item.icon size={15} className="text-stone-400 shrink-0" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Sign out */}
          <div className="py-2 px-2 border-t border-stone-100 dark:border-stone-800">
            <button
              onClick={() => { setOpen(false); onLogout(); }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-colors font-medium"
            >
              <LogOut size={15} />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Mobile Drawer ────────────────────────────────────────────────────────────
const MobileDrawer: React.FC<{ open: boolean; onClose: () => void; onLogout: () => void; isAuthenticated: boolean }> = ({
  open, onClose, onLogout, isAuthenticated
}) => {
  // Close on escape
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-stone-950 z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200 dark:border-stone-800">
          <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
              <BookOpen size={18} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="font-serif font-bold text-lg text-stone-900 dark:text-white">BookClub</span>
          </Link>
          <button onClick={onClose} className="p-1.5 rounded-lg text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Drawer scroll area */}
        <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
          <p className="text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider px-2 pb-2">Navigation</p>
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive
                  ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900'}`
              }
            >
              <item.icon size={17} />
              {item.label}
            </NavLink>
          ))}

          <div className="pt-4">
            <p className="text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider px-2 pb-2">Personal</p>
            {PROFILE_ITEMS.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive
                    ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400'
                    : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900'}`
                }
              >
                <item.icon size={17} />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Drawer footer */}
        {isAuthenticated && (
          <div className="px-4 py-4 border-t border-stone-200 dark:border-stone-800">
            <button
              onClick={() => { onClose(); onLogout(); }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors font-medium"
            >
              <LogOut size={17} />
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

// ─── Main Header ─────────────────────────────────────────────────────────────
export const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  // Ctrl+K to open search
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, []);

  // Scroll shadow
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full h-[68px] flex items-center bg-white/95 dark:bg-stone-950/95 backdrop-blur-md border-b transition-shadow duration-200 ${
          scrolled
            ? 'border-stone-200 dark:border-stone-800 shadow-sm'
            : 'border-stone-200/60 dark:border-stone-800/60 shadow-none'
        }`}
      >
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">

          {/* ── Mobile Menu Button ── */}
          <button
            id="mobile-menu-button"
            className="lg:hidden p-2 -ml-1 rounded-lg text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors shrink-0"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          {/* ── Logo ── */}
          <Link
            to="/"
            className="flex items-center gap-2.5 shrink-0 mr-2"
            aria-label="BookClub home"
          >
            <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center shadow-sm">
              <BookOpen size={17} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="font-serif font-bold text-[17px] tracking-tight text-stone-900 dark:text-white">
              BookClub
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1">
            {NAV_ITEMS.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800/60'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* ── Right Side ── */}
          <div className="flex items-center gap-1 ml-auto shrink-0">

            {/* Search — desktop */}
            <button
              id="header-search-button"
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-500 dark:text-stone-400 hover:border-stone-300 dark:hover:border-stone-600 hover:text-stone-700 dark:hover:text-stone-300 transition-all text-sm"
              aria-label="Open search"
            >
              <Search size={14} />
              <span className="hidden lg:block">Search...</span>
              <kbd className="hidden lg:flex items-center gap-0.5 text-[10px] font-medium border border-stone-200 dark:border-stone-700 rounded px-1 py-0.5 text-stone-400">
                ⌘K
              </kbd>
            </button>

            {/* Search — mobile icon only */}
            <button
              className="md:hidden p-2 rounded-lg text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={19} />
            </button>

            {/* Dark mode */}
            <button
              id="theme-toggle-button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            {isAuthenticated ? (
              <>
                {/* Notifications */}
                <button
                  id="notifications-button"
                  className="relative p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                  aria-label="Notifications"
                >
                  <Bell size={19} />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full border-2 border-white dark:border-stone-950" />
                </button>

                {/* Account dropdown */}
                <AccountDropdown onLogout={handleLogout} user={user} />
              </>
            ) : (
              <div className="flex items-center gap-2 ml-1">
                <Link
                  to="/login"
                  className="hidden sm:block px-3 py-1.5 text-sm font-semibold text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-1.5 text-sm font-semibold bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors shadow-sm whitespace-nowrap"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onLogout={handleLogout}
        isAuthenticated={isAuthenticated}
      />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
