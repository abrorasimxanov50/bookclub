import { useLocalStorage } from './useLocalStorage';
import type { ReadingProgress } from '../types';

export function useReadingProgress(bookId: string) {
  const [progressData, setProgressData] = useLocalStorage<Record<string, ReadingProgress>>('bookclub-reading-progress', {});

  const progress = progressData[bookId] || null;

  const updateProgress = (updates: Partial<ReadingProgress>) => {
    setProgressData(prev => ({
      ...prev,
      [bookId]: {
        ...prev[bookId],
        ...updates,
        bookId,
        lastRead: new Date().toISOString(),
      } as ReadingProgress
    }));
  };

  return { progress, updateProgress };
}
