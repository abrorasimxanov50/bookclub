import { books as staticBooks } from '../data/books';
import type { Book } from '../types';
import api from './api';

// Real authentic Amazon book covers mapped by slug/title keywords
const COVER_MAP: Record<string, string> = {
  '1984': 'https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg',
  'animal-farm': 'https://m.media-amazon.com/images/I/71gXqPHBe3L._AC_UF1000,1000_QL80_.jpg',
  'the-hobbit': 'https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg',
  'the-lord-of-the-rings': 'https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg',
  'the-great-gatsby': 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg',
  'pride-and-prejudice': 'https://m.media-amazon.com/images/I/71Q1tPupKFL._AC_UF1000,1000_QL80_.jpg',
  'crime-and-punishment': 'https://m.media-amazon.com/images/I/81JdSN9moxL._AC_UF1000,1000_QL80_.jpg',
  'norwegian-wood': 'https://m.media-amazon.com/images/I/81WcnNQ-TBL._AC_UF1000,1000_QL80_.jpg',
  'one-hundred-years-of-solitude': 'https://m.media-amazon.com/images/I/81qzTFfDq6L._AC_UF1000,1000_QL80_.jpg',
  'the-count-of-monte-cristo': 'https://m.media-amazon.com/images/I/81YQMdT6xbL._AC_UF1000,1000_QL80_.jpg',
  'mans-search-for-meaning': 'https://m.media-amazon.com/images/I/71r6fGHarEL._AC_UF1000,1000_QL80_.jpg',
  'atomic-habits': 'https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg',
  'war-and-peace': 'https://m.media-amazon.com/images/I/81Z5ePIh7ZL._AC_UF1000,1000_QL80_.jpg',
  'the-stranger': 'https://m.media-amazon.com/images/I/71LpVEyLjrL._AC_UF1000,1000_QL80_.jpg',
  'anna-karenina': 'https://m.media-amazon.com/images/I/71KHSvvEfrL._AC_UF1000,1000_QL80_.jpg',
  'kafka-on-the-shore': 'https://m.media-amazon.com/images/I/81W-PVpz7+L._AC_UF1000,1000_QL80_.jpg',
  'the-brothers-karamazov': 'https://m.media-amazon.com/images/I/71RGfhVxbRL._AC_UF1000,1000_QL80_.jpg',
  'love-in-the-time-of-cholera': 'https://m.media-amazon.com/images/I/81k2GxHBVJL._AC_UF1000,1000_QL80_.jpg',
};

function pickCover(b: any): string {
  // 1. Try slug map
  if (b.slug && COVER_MAP[b.slug]) return COVER_MAP[b.slug];
  // 2. Try title keyword map
  const title = (b.title || '').toLowerCase();
  for (const [key, url] of Object.entries(COVER_MAP)) {
    if (title.includes(key.replace(/-/g, ' '))) return url;
  }
  // 3. Fall back to API coverUrl only if it looks valid (not openlibrary/goodreads)
  if (b.coverUrl && !b.coverUrl.includes('openlibrary') && !b.coverUrl.includes('goodreads') && !b.coverUrl.includes('ssl-images-amazon')) {
    return b.coverUrl;
  }
  // 4. Fall back to static books cover
  const staticBook = staticBooks.find(s => s.title === b.title);
  if (staticBook) return staticBook.cover;
  // 5. Generic fallback
  return 'https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg';
}

export const bookService = {
  getAll: async (): Promise<Book[]> => {
    try {
      const response = await api.get('/books');
      return response.data.data.map((b: any) => ({
        ...b,
        cover: pickCover(b),
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
        cover: pickCover(b),
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
        cover: pickCover(b),
        genre: b.category ? [b.category.name] : [],
        rating: b.averageRating,
      }));
    } catch (e) {
      return staticBooks.slice(0, 5);
    }
  },
  search: async (query: string): Promise<Book[]> =>
    staticBooks.filter(b =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.description.toLowerCase().includes(query.toLowerCase())
    ),
};
