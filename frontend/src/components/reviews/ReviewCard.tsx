import React from 'react';
import { ThumbsUp } from 'lucide-react';
import { Review } from '../../types';
import { Avatar, RatingStars } from '../ui';

export interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl mb-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <Avatar src={review.avatarUrl} alt={review.username} size="md" />
          <div>
            <h4 className="font-medium text-stone-900 dark:text-stone-100">{review.username}</h4>
            <div className="flex items-center gap-2">
              <RatingStars rating={review.rating} size="sm" />
              <span className="text-xs text-stone-500">{new Date(review.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed mb-4">
        {review.content}
      </p>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-amber-600 transition-colors">
          <ThumbsUp size={14} />
          <span>{review.likes} Helpful</span>
        </button>
      </div>
    </div>
  );
};
