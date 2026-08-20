const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\azam\\Documents\\NovaMind AI\\exam-backend';

function writeFile(filePath, content) {
  const fullPath = path.join(rootDir, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
}

writeFile('vite.config.ts', `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
`);

writeFile('index.html', `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <title>BookClub — Read. Discover. Connect.</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`);

writeFile('src/index.css', `
@import "tailwindcss";

@theme {
  --font-sans: 'Inter', sans-serif;
  --font-serif: 'Lora', serif;

  --color-amber-accent: #C8923C;
  --color-amber-dark: #A67828;
  --color-amber-light: #E8B05C;
}

@layer base {
  body {
    @apply font-sans antialiased text-stone-900 bg-stone-50;
  }
}
`);

writeFile('src/types/index.ts', `
export interface Book {
  id: string;
  title: string;
  authorId: string;
  description: string;
  cover: string;
  coverColor: string;
  genre: string[];
  rating: number;
  reviewCount: number;
  pageCount: number;
  language: string;
  publishedYear: number;
  publisher: string;
  isbn: string;
  status: 'available' | 'reading' | 'read' | 'want-to-read';
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  bookCount: number;
  nationality: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  booksRead: number;
  readingStreak: number;
  followers: number;
  following: number;
  joinedDate: string;
  xp: number;
}

export interface Review {
  id: string;
  bookId: string;
  userId: string;
  rating: number;
  content: string;
  date: string;
  likes: number;
}

export interface Club {
  id: string;
  name: string;
  description: string;
  banner: string;
  memberCount: number;
  currentBookId: string;
  createdBy: string;
  isPublic: boolean;
  members: string[]; // user ids
  activity: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  participants: number;
  deadline: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: string;
  reward: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  bookCount: number;
  icon: string;
}

export interface Activity {
  id: string;
  userId: string;
  type: 'finished_book' | 'wrote_review' | 'joined_challenge' | 'created_club' | 'joined_club';
  bookId?: string;
  clubId?: string;
  challengeId?: string;
  content?: string;
  date: string;
}

export interface ReaderSettings {
  fontSize: number;
  lineSpacing: 'tight' | 'comfortable' | 'loose';
  theme: 'light' | 'dark' | 'sepia';
  width: 'narrow' | 'medium' | 'wide';
}

export interface ReadingProgress {
  bookId: string;
  currentPage: number;
  totalPages: number;
  percentage: number;
  lastRead: string;
  chapterId?: string;
}
`);

writeFile('src/utils/constants.ts', `
export const APP_NAME = 'BookClub';
export const APP_TAGLINE = 'Read. Discover. Connect.';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Discover', path: '/discover' },
  { label: 'Clubs', path: '/clubs' },
  { label: 'Challenges', path: '/challenges' },
];
`);

writeFile('src/utils/helpers.ts', `
export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const truncateText = (text: string, length: number) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

export const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
};

export const calculateReadingTime = (pageCount: number, pagesPerMinute: number = 1) => {
  return Math.ceil(pageCount / pagesPerMinute);
};

export const formatNumber = (num: number) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'm';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
};

export const getProgressColor = (percentage: number) => {
  if (percentage < 25) return 'text-red-500';
  if (percentage < 50) return 'text-amber-500';
  if (percentage < 75) return 'text-yellow-500';
  return 'text-green-500';
};
`);

writeFile('src/contexts/AuthContext.tsx', `
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';
import { users } from '../data/users';

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
  register: (user: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(users[0]);

  const login = (email: string) => {
    const user = users.find(u => u.email === email);
    if (user) setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const register = (userData: Partial<User>) => {
    // Mock registration
    setCurrentUser(users[0]);
  };

  return (
    <AuthContext.Provider value={{ currentUser, isAuthenticated: !!currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
`);

writeFile('src/contexts/ThemeContext.tsx', `
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<Theme>('bookclub-theme', 'system');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
`);

writeFile('src/hooks/useLocalStorage.ts', `
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn('Error reading localStorage key “' + key + '”:', error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn('Error setting localStorage key “' + key + '”:', error);
    }
  };

  return [storedValue, setValue] as const;
}
`);

writeFile('src/hooks/useReaderSettings.ts', `
import { useLocalStorage } from './useLocalStorage';
import { ReaderSettings } from '../types';

const defaultSettings: ReaderSettings = {
  fontSize: 18,
  lineSpacing: 'comfortable',
  theme: 'light',
  width: 'medium',
};

export function useReaderSettings() {
  const [settings, setSettings] = useLocalStorage<ReaderSettings>('bookclub-reader-settings', defaultSettings);
  return { settings, setSettings };
}
`);

writeFile('src/hooks/useReadingProgress.ts', `
import { useLocalStorage } from './useLocalStorage';
import { ReadingProgress } from '../types';

export function useReadingProgress(bookId: string) {
  const [progressData, setProgressData] = useLocalStorage<Record<string, ReadingProgress>>('bookclub-reading-progress', {});

  const progress = progressData[bookId] || null;

  const updateProgress = (updates: Partial<ReadingProgress>) => {
    setProgressData(prev => ({
      ...prev,
      [bookId]: {
        ...prev[bookId],
        ...updates,
        bookId,
        lastRead: new Date().toISOString(),
      } as ReadingProgress
    }));
  };

  return { progress, updateProgress };
}
`);

writeFile('src/hooks/useFavorites.ts', `
import { useLocalStorage } from './useLocalStorage';

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<string[]>('bookclub-favorites', []);

  const toggleFavorite = (bookId: string) => {
    setFavorites(prev => 
      prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]
    );
  };

  const isFavorite = (bookId: string) => favorites.includes(bookId);

  return { favorites, toggleFavorite, isFavorite };
}
`);

writeFile('src/hooks/useSearch.ts', `
import { useState, useEffect } from 'react';
import { Book } from '../types';
import { bookService } from '../services/bookService';

export function useSearch(initialQuery: string = '') {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Book[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const searchBooks = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      setIsSearching(true);
      try {
        const data = await bookService.search(query);
        setResults(data);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsSearching(false);
      }
    };

    const debounceTimer = setTimeout(searchBooks, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return { query, setQuery, results, isSearching };
}
`);

writeFile('src/hooks/useTheme.ts', `
// Re-exporting from context for simplicity, though they could be separate
import { useThemeContext } from '../contexts/ThemeContext';

export function useTheme() {
  return useThemeContext();
}
`);
