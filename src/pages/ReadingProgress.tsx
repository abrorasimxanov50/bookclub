import React from 'react';
import { Target, Book, Calendar, Flame, TrendingUp } from 'lucide-react';

export const ReadingProgress = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-inter">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100 font-lora">Reading Progress</h1>
        <p className="text-stone-600 dark:text-stone-400 mt-1">Track your reading habits and goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6 flex items-center gap-4">
          <div className="p-3 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-500 rounded-lg">
            <Book className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-stone-500 dark:text-stone-400">Books Read</p>
            <p className="text-2xl font-bold text-stone-900 dark:text-stone-100">24</p>
          </div>
        </div>
        <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6 flex items-center gap-4">
          <div className="p-3 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-500 rounded-lg">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-stone-500 dark:text-stone-400">Pages Read</p>
            <p className="text-2xl font-bold text-stone-900 dark:text-stone-100">7,420</p>
          </div>
        </div>
        <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6 flex items-center gap-4">
          <div className="p-3 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-500 rounded-lg">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-stone-500 dark:text-stone-400">Yearly Goal</p>
            <p className="text-2xl font-bold text-stone-900 dark:text-stone-100">40</p>
          </div>
        </div>
        <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6 flex items-center gap-4">
          <div className="p-3 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-500 rounded-lg">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-stone-500 dark:text-stone-400">Day Streak</p>
            <p className="text-2xl font-bold text-stone-900 dark:text-stone-100">14</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6">
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-lora mb-6">2026 Reading Goal</h2>
          <div className="flex flex-col items-center justify-center p-8">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" className="text-stone-100 dark:text-stone-800" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" strokeDasharray="283" strokeDashoffset="113" className="text-amber-500" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-stone-900 dark:text-stone-100">60%</span>
                <span className="text-sm text-stone-500 dark:text-stone-400 mt-1">24 of 40 books</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6">
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-lora mb-6">Reading Activity</h2>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 text-sm text-stone-500 dark:text-stone-400">Aug {10 - i}</div>
                <div className="flex-1 bg-stone-100 dark:bg-stone-800 rounded-full h-3">
                  <div className="bg-amber-500 h-3 rounded-full" style={{ width: `${Math.max(10, Math.random() * 100)}%` }}></div>
                </div>
                <div className="w-16 text-sm text-right text-stone-500 dark:text-stone-400">{Math.floor(Math.random() * 50) + 10} pgs</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingProgress;
