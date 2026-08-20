import React from 'react';

export interface ProgressBarProps {
  value: number;
  size?: 'sm' | 'md' | 'lg';
  color?: string; // Tailwind class
  showLabel?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  size = 'md', 
  color = 'bg-amber-500', 
  showLabel = false,
  className = '' 
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-1 text-xs font-medium text-stone-600 dark:text-stone-400">
          <span>Progress</span>
          <span>{Math.round(clampedValue)}%</span>
        </div>
      )}
      <div className={`w-full bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div 
          className={`${color} h-full rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
};
