import { books as staticBooks } from '../data/books';
import type { Book } from '../types';
import api from './api';

export const bookService = {
  getAll: async (): Promise<Book[]> => {
    try {
      const response = await api.get('/books');
      return response.data.data.map((b: any) => ({
        ...b,
        cover: b.coverUrl,
        genre: b.category ? [b.category.name] : [],
        rating: b.averageRating,
      }));
    } catch (e) {
      console.error('Failed to fetch books, falling back to mock data', e);
      return staticBooks;
    }
  },
  getById: async (id: string): Promise<Book | undefined> => {
    try {
      const response = await api.get(`/books/${id}`);
      const b = response.data.data;
      return {
        ...b,
        cover: b.coverUrl,
        genre: b.category ? [b.category.name] : [],
        rating: b.averageRating,
      };
    } catch (e) {
      console.error('Failed to fetch book, falling back to mock data', e);
      return staticBooks.find(b => b.id === id);
    }
  },
  getByGenre: async (genre: string): Promise<Book[]> => staticBooks.filter(b => b.genre.includes(genre)),
  getTrending: async (): Promise<Book[]> => [...staticBooks].sort((a, b) => b.rating - a.rating).slice(0, 8),
  getPopular: async (): Promise<Book[]> => [...staticBooks].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 8),
  getFeaturedBooks: async (): Promise<Book[]> => {
    try {
      const response = await api.get('/books');
      return response.data.data.map((b: any) => ({
        ...b,
        cover: b.coverUrl,
        genre: b.category ? [b.category.name] : [],
        rating: b.averageRating,
      }));
    } catch (e) {
      console.error('Failed to fetch books, falling back to mock data', e);
      return staticBooks.slice(0, 5);
    }
  },
  search: async (query: string): Promise<Book[]> => staticBooks.filter(b => b.title.toLowerCase().includes(query.toLowerCase()) || b.description.toLowerCase().includes(query.toLowerCase())),
};
