import type { Book } from '../types';

export const books: Book[] = [
  {
    id: '1', title: 'Atomic Habits', authorId: 'a1', description: 'No matter your goals, Atomic Habits offers a proven framework for improving--every day.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg', coverColor: '#eab308',
    genre: ['self-help', 'psychology'], rating: 4.8, reviewCount: 15420, pageCount: 320, language: 'English', publishedYear: 2018, publisher: 'Avery', isbn: '9780735211292', status: 'available'
  },
  {
    id: '2', title: 'The Alchemist', authorId: 'a2', description: 'A magical story about a shepherd boy who journeys to the pyramids in search of treasure.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg', coverColor: '#d97706',
    genre: ['fiction', 'philosophy'], rating: 4.6, reviewCount: 22100, pageCount: 208, language: 'English', publishedYear: 1988, publisher: 'HarperOne', isbn: '9780062315007', status: 'available'
  },
  {
    id: '3', title: "Harry Potter and the Sorcerer's Stone", authorId: 'a3', description: 'A young boy discovers he is a wizard and attends a magical school.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg', coverColor: '#b91c1c',
    genre: ['fantasy', 'young-adult'], rating: 4.9, reviewCount: 54300, pageCount: 309, language: 'English', publishedYear: 1997, publisher: 'Scholastic', isbn: '9780590353427', status: 'available'
  },
  {
    id: '4', title: 'The Hobbit', authorId: 'a4', description: 'A hobbit sets off on an epic adventure to reclaim a stolen treasure from a dragon.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg', coverColor: '#15803d',
    genre: ['fantasy', 'classic-literature'], rating: 4.7, reviewCount: 31200, pageCount: 310, language: 'English', publishedYear: 1937, publisher: 'Houghton Mifflin', isbn: '9780547928227', status: 'available'
  },
  {
    id: '5', title: 'The Lord of the Rings', authorId: 'a4', description: 'The epic fantasy saga of the One Ring and the fellowship formed to destroy it.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780544003415-L.jpg', coverColor: '#3f6212',
    genre: ['fantasy', 'classic-literature'], rating: 4.9, reviewCount: 45000, pageCount: 1178, language: 'English', publishedYear: 1954, publisher: 'Houghton Mifflin', isbn: '9780544003415', status: 'available'
  },
  {
    id: '6', title: 'Pride and Prejudice', authorId: 'a5', description: 'A romantic clash between the opinionated Elizabeth Bennet and her proud beau, Mr. Darcy.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg', coverColor: '#9333ea',
    genre: ['romance', 'classic-literature'], rating: 4.6, reviewCount: 32000, pageCount: 432, language: 'English', publishedYear: 1813, publisher: 'Penguin Classics', isbn: '9780141439518', status: 'available'
  },
  {
    id: '7', title: '1984', authorId: 'a6', description: 'A dystopian social science fiction novel and cautionary tale about the future.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg', coverColor: '#1e3a8a',
    genre: ['science-fiction', 'classic-literature'], rating: 4.7, reviewCount: 38000, pageCount: 328, language: 'English', publishedYear: 1949, publisher: 'Signet Classic', isbn: '9780451524935', status: 'available'
  },
  {
    id: '8', title: 'The Great Gatsby', authorId: 'a7', description: 'A story of the wealthy Jay Gatsby and his obsessive love for the beautiful Daisy Buchanan.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg', coverColor: '#b45309',
    genre: ['classic-literature', 'fiction'], rating: 4.4, reviewCount: 29000, pageCount: 180, language: 'English', publishedYear: 1925, publisher: 'Scribner', isbn: '9780743273565', status: 'available'
  },
  {
    id: '9', title: 'To Kill a Mockingbird', authorId: 'a8', description: 'Compassionate, dramatic, and deeply moving, taking readers to the roots of human behavior.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780060935467-L.jpg', coverColor: '#8b5cf6',
    genre: ['classic-literature', 'fiction'], rating: 4.8, reviewCount: 41000, pageCount: 324, language: 'English', publishedYear: 1960, publisher: 'Harper Perennial', isbn: '9780060935467', status: 'available'
  },
  {
    id: '10', title: 'The Little Prince', authorId: 'a9', description: 'A poetic tale, with watercolor illustrations by the author, in which a pilot stranded in the desert meets a young prince.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780156012195-L.jpg', coverColor: '#fbbf24',
    genre: ['fantasy', 'classic-literature', 'children'], rating: 4.7, reviewCount: 21000, pageCount: 96, language: 'English', publishedYear: 1943, publisher: 'Harcourt, Inc.', isbn: '9780156012195', status: 'available'
  },
  {
    id: '11', title: 'The Psychology of Money', authorId: 'a10', description: "Timeless lessons on wealth, greed, and happiness doing well with money isn't necessarily about what you know.",
    cover: 'https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg', coverColor: '#047857',
    genre: ['non-fiction', 'psychology', 'finance'], rating: 4.6, reviewCount: 18500, pageCount: 252, language: 'English', publishedYear: 2020, publisher: 'Harriman House', isbn: '9780857197689', status: 'available'
  },
  {
    id: '12', title: 'Rich Dad Poor Dad', authorId: 'a11', description: 'What the rich teach their kids about money that the poor and middle class do not!',
    cover: 'https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg', coverColor: '#6366f1',
    genre: ['non-fiction', 'self-help', 'finance'], rating: 4.5, reviewCount: 25000, pageCount: 336, language: 'English', publishedYear: 1997, publisher: 'Plata Publishing', isbn: '9781612680194', status: 'available'
  },
  {
    id: '13', title: 'The 7 Habits of Highly Effective People', authorId: 'a12', description: 'Powerful lessons in personal change.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780743269513-L.jpg', coverColor: '#dc2626',
    genre: ['non-fiction', 'self-help'], rating: 4.6, reviewCount: 19000, pageCount: 381, language: 'English', publishedYear: 1989, publisher: 'Free Press', isbn: '9780743269513', status: 'available'
  },
  {
    id: '14', title: 'A Study in Scarlet', authorId: 'a13', description: 'The novel that introduced the famous detective Sherlock Holmes.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780140439083-L.jpg', coverColor: '#78350f',
    genre: ['mystery', 'classic-literature'], rating: 4.2, reviewCount: 12000, pageCount: 188, language: 'English', publishedYear: 1887, publisher: 'Penguin', isbn: '9780140439083', status: 'available'
  },
  {
    id: '15', title: 'Dracula', authorId: 'a14', description: 'The famous gothic horror novel about a vampire from Transylvania.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780141439846-L.jpg', coverColor: '#000000',
    genre: ['horror', 'classic-literature'], rating: 4.3, reviewCount: 16000, pageCount: 418, language: 'English', publishedYear: 1897, publisher: 'Penguin Classics', isbn: '9780141439846', status: 'available'
  },
  {
    id: '16', title: 'Frankenstein', authorId: 'a15', description: 'A young scientist creates a sapient creature in an unorthodox scientific experiment.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780141439471-L.jpg', coverColor: '#334155',
    genre: ['horror', 'science-fiction', 'classic-literature'], rating: 4.4, reviewCount: 14000, pageCount: 280, language: 'English', publishedYear: 1818, publisher: 'Penguin Classics', isbn: '9780141439471', status: 'available'
  },
  {
    id: '17', title: "Alice's Adventures in Wonderland", authorId: 'a16', description: 'A young girl falls through a rabbit hole into a subterranean fantasy world.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780141439761-L.jpg', coverColor: '#db2777',
    genre: ['fantasy', 'classic-literature', 'children'], rating: 4.3, reviewCount: 15500, pageCount: 352, language: 'English', publishedYear: 1865, publisher: 'Penguin Classics', isbn: '9780141439761', status: 'available'
  },
  {
    id: '18', title: 'Don Quixote', authorId: 'a17', description: 'The adventures of a noble from La Mancha named Alonso Quixano.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780060934347-L.jpg', coverColor: '#f59e0b',
    genre: ['classic-literature', 'fiction'], rating: 4.5, reviewCount: 13000, pageCount: 1072, language: 'English', publishedYear: 1605, publisher: 'Ecco', isbn: '9780060934347', status: 'available'
  },
  {
    id: '19', title: 'Crime and Punishment', authorId: 'a18', description: 'The mental anguish and moral dilemmas of an impoverished ex-student in Saint Petersburg.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780679734505-L.jpg', coverColor: '#475569',
    genre: ['classic-literature', 'philosophy'], rating: 4.7, reviewCount: 21000, pageCount: 565, language: 'English', publishedYear: 1866, publisher: 'Vintage Classics', isbn: '9780679734505', status: 'available'
  },
  {
    id: '20', title: 'War and Peace', authorId: 'a19', description: 'Chronicles the French invasion of Russia and the impact of the Napoleonic era on Tsarist society.',
    cover: 'https://covers.openlibrary.org/b/isbn/9781400079988-L.jpg', coverColor: '#7c2d12',
    genre: ['classic-literature', 'history'], rating: 4.5, reviewCount: 11000, pageCount: 1225, language: 'English', publishedYear: 1869, publisher: 'Vintage', isbn: '9781400079988', status: 'available'
  },
  {
    id: '21', title: 'The Brothers Karamazov', authorId: 'a18', description: 'A passionate philosophical novel set in 19th-century Russia.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780374528379-L.jpg', coverColor: '#1e293b',
    genre: ['classic-literature', 'philosophy'], rating: 4.8, reviewCount: 14000, pageCount: 796, language: 'English', publishedYear: 1880, publisher: 'Farrar, Straus and Giroux', isbn: '9780374528379', status: 'available'
  },
  {
    id: '22', title: 'Les Misérables', authorId: 'a20', description: 'Follows the lives and interactions of several characters, particularly the struggles of ex-convict Jean Valjean.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780451419439-L.jpg', coverColor: '#b91c1c',
    genre: ['classic-literature', 'fiction'], rating: 4.6, reviewCount: 16000, pageCount: 1463, language: 'English', publishedYear: 1862, publisher: 'Signet Classics', isbn: '9780451419439', status: 'available'
  },
  {
    id: '23', title: 'The Count of Monte Cristo', authorId: 'a21', description: 'The story of a man who is wrongfully imprisoned, escapes, acquires a fortune, and sets about getting revenge.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780140449266-L.jpg', coverColor: '#0f172a',
    genre: ['classic-literature', 'adventure'], rating: 4.8, reviewCount: 22000, pageCount: 1276, language: 'English', publishedYear: 1844, publisher: 'Penguin Classics', isbn: '9780140449266', status: 'available'
  },
  {
    id: '24', title: 'The Picture of Dorian Gray', authorId: 'a22', description: 'A philosophical novel about a man whose portrait ages while he stays young.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780141439570-L.jpg', coverColor: '#831843',
    genre: ['classic-literature', 'horror', 'philosophy'], rating: 4.5, reviewCount: 17500, pageCount: 254, language: 'English', publishedYear: 1890, publisher: 'Penguin Classics', isbn: '9780141439570', status: 'available'
  },
  {
    id: '25', title: 'The Book Thief', authorId: 'a23', description: 'A story narrated by Death, about a young girl living in Nazi Germany.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780375842207-L.jpg', coverColor: '#64748b',
    genre: ['historical-fiction', 'young-adult'], rating: 4.7, reviewCount: 38000, pageCount: 552, language: 'English', publishedYear: 2005, publisher: 'Knopf Books for Young Readers', isbn: '9780375842207', status: 'available'
  },
  {
    id: '26', title: 'The Kite Runner', authorId: 'a24', description: "An unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father's servant.",
    cover: 'https://covers.openlibrary.org/b/isbn/9781594631931-L.jpg', coverColor: '#f97316',
    genre: ['historical-fiction', 'contemporary'], rating: 4.6, reviewCount: 35000, pageCount: 371, language: 'English', publishedYear: 2003, publisher: 'Riverhead Books', isbn: '9781594631931', status: 'available'
  },
  {
    id: '27', title: 'The Hunger Games', authorId: 'a25', description: 'In a dystopian future, a televised competition forces teenagers to fight to the death.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780439023481-L.jpg', coverColor: '#fb923c',
    genre: ['science-fiction', 'young-adult'], rating: 4.6, reviewCount: 42000, pageCount: 374, language: 'English', publishedYear: 2008, publisher: 'Scholastic Press', isbn: '9780439023481', status: 'available'
  },
  {
    id: '28', title: 'The Fault in Our Stars', authorId: 'a26', description: 'A heartbreaking story of two teenage cancer patients who fall in love.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780525478812-L.jpg', coverColor: '#38bdf8',
    genre: ['romance', 'young-adult'], rating: 4.5, reviewCount: 33000, pageCount: 313, language: 'English', publishedYear: 2012, publisher: 'Dutton Books', isbn: '9780525478812', status: 'available'
  },
  {
    id: '29', title: 'Dune', authorId: 'a27', description: 'A complex, multi-layered story of politics, religion, ecology, technology, and human emotion on a desert planet.',
    cover: 'https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg', coverColor: '#d97706',
    genre: ['science-fiction', 'fantasy'], rating: 4.7, reviewCount: 27000, pageCount: 412, language: 'English', publishedYear: 1965, publisher: 'Ace Books', isbn: '9780441172719', status: 'available'
  },
  {
    id: '30', title: "O'tkan Kunlar", authorId: 'a28', description: 'A classic Uzbek novel detailing the life, love, and tragedy of Otabek and Kumush.',
    cover: 'https://covers.openlibrary.org/b/isbn/9789943319080-L.jpg', coverColor: '#10b981',
    genre: ['classic-literature', 'romance', 'historical-fiction'], rating: 4.9, reviewCount: 5000, pageCount: 400, language: 'Uzbek', publishedYear: 1925, publisher: 'Sharq', isbn: '9789943319080', status: 'available'
  }
];
