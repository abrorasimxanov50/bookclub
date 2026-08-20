import { books } from '../data/books';
import { authors } from '../data/authors';
import type { Book, Author } from '../types';

export const searchService = {
  searchAll: async (query: string): Promise<{ books: Book[], authors: Author[] }> => {
    const q = query.toLowerCase();
    const matchedBooks = books.filter(b => b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q));
    const matchedAuthors = authors.filter(a => a.name.toLowerCase().includes(q) || a.bio.toLowerCase().includes(q));
    
    return { books: matchedBooks, authors: matchedAuthors };
  }
};
