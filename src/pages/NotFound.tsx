import React from 'react';
import { AlertCircle } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="text-center max-w-md w-full">
        <div className="flex justify-center mb-6 text-stone-300 dark:text-stone-700">
          <AlertCircle className="w-24 h-24" />
        </div>
        <h1 className="text-6xl font-bold text-stone-900 dark:text-stone-100 font-lora mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-stone-700 dark:text-stone-300 mb-4">Page Not Found</h2>
        <p className="text-stone-500 dark:text-stone-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="inline-flex justify-center items-center py-2.5 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700 transition-colors">
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
