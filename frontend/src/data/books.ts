import type { Book } from '../types';

export const books: Book[] = [
  {
    id: '1', title: 'Atomic Habits', authorId: 'James Clear', description: 'No matter your goals, Atomic Habits offers a proven framework for improving every day.',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80', coverColor: '#eab308',
    genre: ['Self-Help', 'Psychology'], rating: 4.8, reviewCount: 15420, pageCount: 320, language: 'English', publishedYear: 2018, publisher: 'Avery', isbn: '9780735211292', status: 'available'
  },
  {
    id: '2', title: 'The Alchemist', authorId: 'Paulo Coelho', description: 'A magical story about a shepherd boy who journeys to the pyramids in search of treasure.',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80', coverColor: '#d97706',
    genre: ['Fiction', 'Philosophy'], rating: 4.6, reviewCount: 22100, pageCount: 208, language: 'English', publishedYear: 1988, publisher: 'HarperOne', isbn: '9780062315007', status: 'available'
  },
  {
    id: '3', title: "Harry Potter & Sorcerer's Stone", authorId: 'J.K. Rowling', description: 'A young boy discovers he is a wizard and attends a magical school.',
    cover: 'https://images.unsplash.com/photo-1618666012174-83b441c0bc76?w=600&auto=format&fit=crop&q=80', coverColor: '#b91c1c',
    genre: ['Fantasy', 'Young-Adult'], rating: 4.9, reviewCount: 54300, pageCount: 309, language: 'English', publishedYear: 1997, publisher: 'Scholastic', isbn: '9780590353427', status: 'available'
  },
  {
    id: '4', title: 'The Hobbit', authorId: 'J.R.R. Tolkien', description: 'A hobbit sets off on an epic adventure to reclaim a stolen treasure from a dragon.',
    cover: 'https://images.unsplash.com/photo-1629196914275-81691a5666db?w=600&auto=format&fit=crop&q=80', coverColor: '#15803d',
    genre: ['Fantasy', 'Classic'], rating: 4.7, reviewCount: 31200, pageCount: 310, language: 'English', publishedYear: 1937, publisher: 'Houghton Mifflin', isbn: '9780547928227', status: 'available'
  },
  {
    id: '5', title: 'The Lord of the Rings', authorId: 'J.R.R. Tolkien', description: 'The epic fantasy saga of the One Ring and the fellowship formed to destroy it.',
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80', coverColor: '#3f6212',
    genre: ['Fantasy', 'Classic'], rating: 4.9, reviewCount: 45000, pageCount: 1178, language: 'English', publishedYear: 1954, publisher: 'Houghton Mifflin', isbn: '9780544003415', status: 'available'
  },
  {
    id: '6', title: 'Pride and Prejudice', authorId: 'Jane Austen', description: 'A romantic clash between Elizabeth Bennet and Mr. Darcy.',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600&auto=format&fit=crop&q=80', coverColor: '#9333ea',
    genre: ['Romance', 'Classic'], rating: 4.6, reviewCount: 32000, pageCount: 432, language: 'English', publishedYear: 1813, publisher: 'Penguin Classics', isbn: '9780141439518', status: 'available'
  },
  {
    id: '7', title: '1984', authorId: 'George Orwell', description: 'A dystopian social science fiction novel and cautionary tale about the future.',
    cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&auto=format&fit=crop&q=80', coverColor: '#1e3a8a',
    genre: ['Sci-Fi', 'Classic'], rating: 4.7, reviewCount: 38000, pageCount: 328, language: 'English', publishedYear: 1949, publisher: 'Signet Classic', isbn: '9780451524935', status: 'available'
  },
  {
    id: '8', title: 'The Great Gatsby', authorId: 'F. Scott Fitzgerald', description: 'A story of wealthy Jay Gatsby and his love for Daisy Buchanan.',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=80', coverColor: '#b45309',
    genre: ['Classic', 'Fiction'], rating: 4.4, reviewCount: 29000, pageCount: 180, language: 'English', publishedYear: 1925, publisher: 'Scribner', isbn: '9780743273565', status: 'available'
  },
  {
    id: '9', title: 'To Kill a Mockingbird', authorId: 'Harper Lee', description: 'Compassionate, dramatic, and deeply moving story taking readers to the roots of human behavior.',
    cover: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80', coverColor: '#8b5cf6',
    genre: ['Classic', 'Fiction'], rating: 4.8, reviewCount: 41000, pageCount: 324, language: 'English', publishedYear: 1960, publisher: 'Harper Perennial', isbn: '9780060935467', status: 'available'
  },
  {
    id: '10', title: 'The Little Prince', authorId: 'Antoine de Saint-Exupéry', description: 'A poetic tale in which a pilot stranded in the desert meets a young prince.',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80', coverColor: '#fbbf24',
    genre: ['Fantasy', 'Classic'], rating: 4.7, reviewCount: 21000, pageCount: 96, language: 'English', publishedYear: 1943, publisher: 'Harcourt', isbn: '9780156012195', status: 'available'
  },
  {
    id: '11', title: 'The Psychology of Money', authorId: 'Morgan Housel', description: 'Timeless lessons on wealth, greed, and happiness.',
    cover: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80', coverColor: '#047857',
    genre: ['Non-Fiction', 'Psychology'], rating: 4.6, reviewCount: 18500, pageCount: 252, language: 'English', publishedYear: 2020, publisher: 'Harriman House', isbn: '9780857197689', status: 'available'
  },
  {
    id: '12', title: 'Rich Dad Poor Dad', authorId: 'Robert Kiyosaki', description: 'What the rich teach their kids about money that the poor and middle class do not!',
    cover: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop&q=80', coverColor: '#6366f1',
    genre: ['Non-Fiction', 'Self-Help'], rating: 4.5, reviewCount: 25000, pageCount: 336, language: 'English', publishedYear: 1997, publisher: 'Plata Publishing', isbn: '9781612680194', status: 'available'
  }
];
