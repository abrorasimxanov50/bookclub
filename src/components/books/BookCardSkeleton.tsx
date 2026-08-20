import React from 'react';
import { Skeleton } from '../ui';

export interface BookCardSkeletonProps {
  variant?: 'grid' | 'list' | 'compact';
}

export const BookCardSkeleton: React.FC<BookCardSkeletonProps> = ({ variant = 'grid' }) => {
  if (variant === 'compact') {
    return (
      <div className="flex gap-3 p-2 rounded-lg">
        <Skeleton variant="rectangular" className="w-16 h-24 shrink-0" />
        <div className="flex flex-col justify-center gap-2 flex-1">
          <Skeleton variant="text" className="w-3/4 h-4" />
          <Skeleton variant="text" className="w-1/2 h-3" />
          <Skeleton variant="text" className="w-1/3 h-3 mt-1" />
        </div>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className="flex gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
        <Skeleton variant="rectangular" className="w-32 h-48 shrink-0" />
        <div className="flex flex-col flex-1 gap-3 py-2">
          <Skeleton variant="text" className="w-2/3 h-6" />
          <Skeleton variant="text" className="w-1/3 h-4" />
          <Skeleton variant="text" className="w-1/4 h-4 mt-2" />
          <div className="flex gap-2 mt-auto">
            <Skeleton variant="rectangular" className="w-16 h-6 rounded-full" />
            <Skeleton variant="rectangular" className="w-16 h-6 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  // Grid variant
  return (
    <div className="flex flex-col gap-2">
      <Skeleton variant="rectangular" className="w-full aspect-[2/3] rounded-md mb-1" />
      <Skeleton variant="text" className="w-full h-5" />
      <Skeleton variant="text" className="w-2/3 h-4" />
      <Skeleton variant="text" className="w-1/3 h-4" />
    </div>
  );
};
