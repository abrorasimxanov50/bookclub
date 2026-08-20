import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  error?: string;
  options: SelectOption[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && (
          <label className="text-sm font-medium text-stone-700 dark:text-stone-300">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`
              w-full appearance-none rounded-md border text-stone-900 dark:text-stone-100 bg-white dark:bg-stone-900
              focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent
              transition-colors px-3 py-2 pr-10
              ${error ? 'border-red-500 focus:ring-red-500' : 'border-stone-300 dark:border-stone-700'}
              disabled:opacity-50 disabled:bg-stone-100 dark:disabled:bg-stone-800
            `}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-stone-500">
            <ChevronDown size={16} />
          </div>
        </div>
        {error && <span className="text-sm text-red-500 dark:text-red-400">{error}</span>}
      </div>
    );
  }
);

Select.displayName = 'Select';
