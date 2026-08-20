import api from './api';
import type { Book } from '../types';

export interface LibraryItem {
  id: string;
  bookId: string;
  status: 'reading' | 'read' | 'want-to-read' | 'available';
  book: Book;
}

export const libraryService = {
  getLibrary: async (): Promise<LibraryItem[]> => {
    try {
      const response = await api.get('/library');
      return response.data.data.map((item: any) => ({
        ...item,
        book: {
          ...item.book,
          cover: item.book.coverUrl,
          rating: item.book.averageRating,
        }
      }));
    } catch (e) {
      console.error('Error fetching library', e);
      return [];
    }
  },

  addToLibrary: async (bookId: string, status: string): Promise<LibraryItem> => {
    const response = await api.post('/library', { bookId, status });
    return response.data.data;
  },

  removeFromLibrary: async (id: string): Promise<void> => {
    await api.delete(`/library/${id}`);
  }
};
