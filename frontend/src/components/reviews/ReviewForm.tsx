import React, { useState } from 'react';
import { Button, RatingStars } from '../ui';

export interface ReviewFormProps {
  bookId: string;
  onSubmit: (rating: number, content: string) => Promise<void> | void;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ bookId, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || !content.trim()) return;
    
    setIsSubmitting(true);
    try {
      await onSubmit(rating, content);
      setRating(0);
      setContent('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-stone-50 dark:bg-stone-800/50 p-4 rounded-xl border border-stone-200 dark:border-stone-700">
      <h3 className="font-medium text-stone-900 dark:text-stone-100 mb-3">Write a Review</h3>
      
      <div className="mb-4">
        <label className="block text-sm text-stone-600 dark:text-stone-400 mb-1">Your Rating</label>
        <RatingStars rating={rating} size="lg" interactive onChange={setRating} />
      </div>
      
      <div className="mb-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What did you think about this book?"
          className="w-full h-24 p-3 rounded-md border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
        />
      </div>
      
      <div className="flex justify-end">
        <Button 
          type="submit" 
          disabled={rating === 0 || !content.trim() || isSubmitting}
          loading={isSubmitting}
        >
          Submit Review
        </Button>
      </div>
    </form>
  );
};
