import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ToastProvider } from '../components/ui/Toast';

export const MainLayout: React.FC = () => {
  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans selection:bg-amber-200 dark:selection:bg-amber-900/50">
        <Header />

        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8 pb-8">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </ToastProvider>
  );
};
