import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastProvider } from '../components/ui/Toast';

export const ReaderLayout: React.FC = () => {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-serif selection:bg-amber-200 dark:selection:bg-amber-900/50">
        <Outlet />
      </div>
    </ToastProvider>
  );
};
