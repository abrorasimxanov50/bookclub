import React from 'react';
import { Outlet } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { ToastProvider } from '../components/ui/Toast';

export const AuthLayout: React.FC = () => {
  return (
    <ToastProvider>
      <Outlet />
    </ToastProvider>
  );
};
