import { reviews } from '../data/reviews';
import type { Review } from '../types';

export const reviewService = {
  getAll: async (): Promise<Review[]> => [...reviews],
  getByBookId: async (bookId: string): Promise<Review[]> => reviews.filter(r => r.bookId === bookId),
  getByUserId: async (userId: string): Promise<Review[]> => reviews.filter(r => r.userId === userId),
};
