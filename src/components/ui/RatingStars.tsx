import React, { useState } from 'react';
import { Star } from 'lucide-react';

export interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}

const sizeClasses = {
  sm: 14,
  md: 18,
  lg: 24,
};

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  interactive = false,
  onChange,
  className = '',
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const starSize = sizeClasses[size];
  const displayRating = hoverRating !== null ? hoverRating : rating;

  return (
    <div className={`flex items-center gap-1 ${className}`} onMouseLeave={() => setHoverRating(null)}>
      {Array.from({ length: maxRating }).map((_, i) => {
        const starValue = i + 1;
        const isFilled = starValue <= displayRating;
        const isHalf = !isFilled && starValue - 0.5 <= displayRating;

        return (
          <button
            key={i}
            type="button"
            className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}`}
            disabled={!interactive}
            onClick={() => interactive && onChange?.(starValue)}
            onMouseEnter={() => interactive && setHoverRating(starValue)}
          >
            <Star
              size={starSize}
              className={`${
                isFilled
                  ? 'fill-amber-500 text-amber-500'
                  : isHalf
                  ? 'fill-amber-500/50 text-amber-500' // Simple half-star approximation via opacity
                  : 'fill-stone-200 text-stone-200 dark:fill-stone-700 dark:text-stone-700'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};
