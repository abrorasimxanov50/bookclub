import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { Loader2 } from 'lucide-react';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { LibraryProvider } from './context/LibraryContext';

const router = createBrowserRouter(routes);

const Fallback = () => (
  <div className="h-screen w-screen flex items-center justify-center bg-stone-50 dark:bg-stone-950">
    <Loader2 className="animate-spin text-amber-500" size={40} />
  </div>
);

export const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LibraryProvider>
          <Suspense fallback={<Fallback />}>
            <RouterProvider router={router} />
          </Suspense>
        </LibraryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
