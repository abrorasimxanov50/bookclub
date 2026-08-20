import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Button, type ButtonProps } from './Button';

export interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: ButtonProps;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ icon: Icon, title, description, action, className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-4 text-center ${className}`}>
      <div className="bg-stone-100 dark:bg-stone-800 p-4 rounded-full mb-4">
        <Icon size={32} className="text-stone-400 dark:text-stone-500" />
      </div>
      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-1">{title}</h3>
      <p className="text-sm text-stone-500 dark:text-stone-400 max-w-sm mb-6">{description}</p>
      {action && (
        <Button {...action} />
      )}
    </div>
  );
};
