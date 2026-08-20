import type { Book } from '../types';

export const books: Book[] = [
  {
    id: '1', title: 'Atomic Habits', authorId: 'James Clear', description: 'No matter your goals, Atomic Habits offers a proven framework for improving every day.',
    cover: 'https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg', coverColor: '#eab308',
    genre: ['Self-Help', 'Psychology'], rating: 4.8, reviewCount: 15420, pageCount: 320, language: 'English', publishedYear: 2018, publisher: 'Avery', isbn: '9780735211292', status: 'available'
  },
  {
    id: '2', title: 'The Alchemist', authorId: 'Paulo Coelho', description: 'A magical story about a shepherd boy who journeys to the pyramids in search of treasure.',
    cover: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg', coverColor: '#d97706',
    genre: ['Fiction', 'Philosophy'], rating: 4.6, reviewCount: 22100, pageCount: 208, language: 'English', publishedYear: 1988, publisher: 'HarperOne', isbn: '9780062315007', status: 'available'
  },
  {
    id: '3', title: "Harry Potter & Sorcerer's Stone", authorId: 'J.K. Rowling', description: 'A young boy discovers he is a wizard and attends a magical school.',
    cover: 'https://m.media-amazon.com/images/I/81q7528h8tL._AC_UF1000,1000_QL80_.jpg', coverColor: '#b91c1c',
    genre: ['Fantasy', 'Young-Adult'], rating: 4.9, reviewCount: 54300, pageCount: 309, language: 'English', publishedYear: 1997, publisher: 'Scholastic', isbn: '9780590353427', status: 'available'
  },
  {
    id: '4', title: 'The Hobbit', authorId: 'J.R.R. Tolkien', description: 'A hobbit sets off on an epic adventure to reclaim a stolen treasure from a dragon.',
    cover: 'https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg', coverColor: '#15803d',
    genre: ['Fantasy', 'Classic'], rating: 4.7, reviewCount: 31200, pageCount: 310, language: 'English', publishedYear: 1937, publisher: 'Houghton Mifflin', isbn: '9780547928227', status: 'available'
  },
  {
    id: '5', title: 'The Lord of the Rings', authorId: 'J.R.R. Tolkien', description: 'The epic fantasy saga of the One Ring and the fellowship formed to destroy it.',
    cover: 'https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg', coverColor: '#3f6212',
    genre: ['Fantasy', 'Classic'], rating: 4.9, reviewCount: 45000, pageCount: 1178, language: 'English', publishedYear: 1954, publisher: 'Houghton Mifflin', isbn: '9780544003415', status: 'available'
  },
  {
    id: '6', title: 'Pride and Prejudice', authorId: 'Jane Austen', description: 'A romantic clash between Elizabeth Bennet and Mr. Darcy.',
    cover: 'https://m.media-amazon.com/images/I/71Q1tPupKFL._AC_UF1000,1000_QL80_.jpg', coverColor: '#9333ea',
    genre: ['Romance', 'Classic'], rating: 4.6, reviewCount: 32000, pageCount: 432, language: 'English', publishedYear: 1813, publisher: 'Penguin Classics', isbn: '9780141439518', status: 'available'
  },
  {
    id: '7', title: '1984', authorId: 'George Orwell', description: 'A dystopian social science fiction novel and cautionary tale about the future.',
    cover: 'https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg', coverColor: '#1e3a8a',
    genre: ['Sci-Fi', 'Classic'], rating: 4.7, reviewCount: 38000, pageCount: 328, language: 'English', publishedYear: 1949, publisher: 'Signet Classic', isbn: '9780451524935', status: 'available'
  },
  {
    id: '8', title: 'The Great Gatsby', authorId: 'F. Scott Fitzgerald', description: 'A story of wealthy Jay Gatsby and his love for Daisy Buchanan.',
    cover: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg', coverColor: '#b45309',
    genre: ['Classic', 'Fiction'], rating: 4.4, reviewCount: 29000, pageCount: 180, language: 'English', publishedYear: 1925, publisher: 'Scribner', isbn: '9780743273565', status: 'available'
  },
  {
    id: '9', title: 'To Kill a Mockingbird', authorId: 'Harper Lee', description: 'Compassionate, dramatic, and deeply moving story taking readers to the roots of human behavior.',
    cover: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg', coverColor: '#8b5cf6',
    genre: ['Classic', 'Fiction'], rating: 4.8, reviewCount: 41000, pageCount: 324, language: 'English', publishedYear: 1960, publisher: 'Harper Perennial', isbn: '9780060935467', status: 'available'
  },
  {
    id: '10', title: 'The Little Prince', authorId: 'Antoine de Saint-Exupéry', description: 'A poetic tale in which a pilot stranded in the desert meets a young prince.',
    cover: 'https://m.media-amazon.com/images/I/71Ozy5B3pBL._AC_UF1000,1000_QL80_.jpg', coverColor: '#fbbf24',
    genre: ['Fantasy', 'Classic'], rating: 4.7, reviewCount: 21000, pageCount: 96, language: 'English', publishedYear: 1943, publisher: 'Harcourt', isbn: '9780156012195', status: 'available'
  },
  {
    id: '11', title: 'The Psychology of Money', authorId: 'Morgan Housel', description: 'Timeless lessons on wealth, greed, and happiness.',
    cover: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg', coverColor: '#047857',
    genre: ['Non-Fiction', 'Psychology'], rating: 4.6, reviewCount: 18500, pageCount: 252, language: 'English', publishedYear: 2020, publisher: 'Harriman House', isbn: '9780857197689', status: 'available'
  },
  {
    id: '12', title: 'Rich Dad Poor Dad', authorId: 'Robert Kiyosaki', description: 'What the rich teach their kids about money that the poor and middle class do not!',
    cover: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg', coverColor: '#6366f1',
    genre: ['Non-Fiction', 'Self-Help'], rating: 4.5, reviewCount: 25000, pageCount: 336, language: 'English', publishedYear: 1997, publisher: 'Plata Publishing', isbn: '9781612680194', status: 'available'
  }
];
