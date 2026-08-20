import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && (
          <label className="text-sm font-medium text-stone-700 dark:text-stone-300">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-500 dark:text-stone-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`
              w-full rounded-md border text-stone-900 dark:text-stone-100 bg-white dark:bg-stone-900
              placeholder-stone-400 dark:placeholder-stone-500
              focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent
              transition-colors
              ${icon ? 'pl-10' : 'pl-3'} pr-3 py-2
              ${error ? 'border-red-500 focus:ring-red-500' : 'border-stone-300 dark:border-stone-700'}
              disabled:opacity-50 disabled:bg-stone-100 dark:disabled:bg-stone-800
            `}
            {...props}
          />
        </div>
        {error && <span className="text-sm text-red-500 dark:text-red-400">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
