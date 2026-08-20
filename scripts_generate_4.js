const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\azam\\Documents\\NovaMind AI\\exam-backend';

function writeFile(filePath, content) {
  const fullPath = path.join(rootDir, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
}

writeFile('src/services/bookService.ts', `
import { books } from '../data/books';
import { Book } from '../types';

export const bookService = {
  getAll: async (): Promise<Book[]> => [...books],
  getById: async (id: string): Promise<Book | undefined> => books.find(b => b.id === id),
  getByGenre: async (genre: string): Promise<Book[]> => books.filter(b => b.genre.includes(genre)),
  getTrending: async (): Promise<Book[]> => [...books].sort((a, b) => b.rating - a.rating).slice(0, 8),
  getPopular: async (): Promise<Book[]> => [...books].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 8),
  search: async (query: string): Promise<Book[]> => books.filter(b => b.title.toLowerCase().includes(query.toLowerCase()) || b.description.toLowerCase().includes(query.toLowerCase())),
};
`);

writeFile('src/services/userService.ts', `
import { users } from '../data/users';
import { User } from '../types';

export const userService = {
  getAll: async (): Promise<User[]> => [...users],
  getById: async (id: string): Promise<User | undefined> => users.find(u => u.id === id),
  getTopReaders: async (): Promise<User[]> => [...users].sort((a, b) => b.booksRead - a.booksRead).slice(0, 5),
};
`);

writeFile('src/services/reviewService.ts', `
import { reviews } from '../data/reviews';
import { Review } from '../types';

export const reviewService = {
  getAll: async (): Promise<Review[]> => [...reviews],
  getByBookId: async (bookId: string): Promise<Review[]> => reviews.filter(r => r.bookId === bookId),
  getByUserId: async (userId: string): Promise<Review[]> => reviews.filter(r => r.userId === userId),
};
`);

writeFile('src/services/challengeService.ts', `
import { challenges } from '../data/challenges';
import { Challenge } from '../types';

export const challengeService = {
  getAll: async (): Promise<Challenge[]> => [...challenges],
  getById: async (id: string): Promise<Challenge | undefined> => challenges.find(c => c.id === id),
  getActive: async (): Promise<Challenge[]> => challenges.filter(c => new Date(c.deadline) > new Date()),
};
`);

writeFile('src/services/clubService.ts', `
import { clubs } from '../data/clubs';
import { Club } from '../types';

export const clubService = {
  getAll: async (): Promise<Club[]> => [...clubs],
  getById: async (id: string): Promise<Club | undefined> => clubs.find(c => c.id === id),
  getPopular: async (): Promise<Club[]> => [...clubs].sort((a, b) => b.memberCount - a.memberCount).slice(0, 5),
};
`);

writeFile('src/services/searchService.ts', `
import { books } from '../data/books';
import { authors } from '../data/authors';
import { Book, Author } from '../types';

export const searchService = {
  searchAll: async (query: string): Promise<{ books: Book[], authors: Author[] }> => {
    const q = query.toLowerCase();
    const matchedBooks = books.filter(b => b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q));
    const matchedAuthors = authors.filter(a => a.name.toLowerCase().includes(q) || a.bio.toLowerCase().includes(q));
    
    return { books: matchedBooks, authors: matchedAuthors };
  }
};
`);
