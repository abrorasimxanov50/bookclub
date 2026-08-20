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

writeFile('src/data/categories.ts', `
import { Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Fiction', slug: 'fiction', description: 'Imaginative storytelling', bookCount: 1500, icon: 'book' },
  { id: '2', name: 'Non-Fiction', slug: 'non-fiction', description: 'Factual information', bookCount: 1200, icon: 'book-open' },
  { id: '3', name: 'Science Fiction', slug: 'science-fiction', description: 'Futuristic and imaginative concepts', bookCount: 850, icon: 'rocket' },
  { id: '4', name: 'Fantasy', slug: 'fantasy', description: 'Magic and supernatural phenomena', bookCount: 920, icon: 'star' },
  { id: '5', name: 'Mystery', slug: 'mystery', description: 'Crimes and puzzles', bookCount: 780, icon: 'search' },
  { id: '6', name: 'Romance', slug: 'romance', description: 'Love and relationships', bookCount: 1100, icon: 'heart' },
  { id: '7', name: 'Biography', slug: 'biography', description: 'Life stories of real people', bookCount: 450, icon: 'user' },
  { id: '8', name: 'Self-Help', slug: 'self-help', description: 'Personal improvement', bookCount: 650, icon: 'trending-up' },
  { id: '9', name: 'Classic Literature', slug: 'classic-literature', description: 'Timeless masterpieces', bookCount: 540, icon: 'feather' },
  { id: '10', name: 'Philosophy', slug: 'philosophy', description: 'Fundamental questions of existence', bookCount: 320, icon: 'lightbulb' },
  { id: '11', name: 'Psychology', slug: 'psychology', description: 'Study of mind and behavior', bookCount: 410, icon: 'brain' },
  { id: '12', name: 'History', slug: 'history', description: 'Past events', bookCount: 580, icon: 'clock' },
  { id: '13', name: 'Horror', slug: 'horror', description: 'Frightening and macabre', bookCount: 390, icon: 'ghost' },
  { id: '14', name: 'Young Adult', slug: 'young-adult', description: 'Adolescent fiction', bookCount: 880, icon: 'users' },
  { id: '15', name: 'Poetry', slug: 'poetry', description: 'Rhythmic and aesthetic language', bookCount: 290, icon: 'music' }
];
`);

writeFile('src/data/authors.ts', `
import { Author } from '../types';

export const authors: Author[] = [
  { id: 'a1', name: 'James Clear', bio: 'Author of Atomic Habits, creator of the Habits Academy.', avatar: 'https://ui-avatars.com/api/?name=James+Clear', bookCount: 2, nationality: 'American' },
  { id: 'a2', name: 'Paulo Coelho', bio: 'Brazilian lyricist and novelist, best known for The Alchemist.', avatar: 'https://ui-avatars.com/api/?name=Paulo+Coelho', bookCount: 30, nationality: 'Brazilian' },
  { id: 'a3', name: 'J.K. Rowling', bio: 'British author, philanthropist, and creator of Harry Potter.', avatar: 'https://ui-avatars.com/api/?name=J+K+Rowling', bookCount: 15, nationality: 'British' },
  { id: 'a4', name: 'J.R.R. Tolkien', bio: 'English writer and philologist, author of The Lord of the Rings.', avatar: 'https://ui-avatars.com/api/?name=J+R+R+Tolkien', bookCount: 25, nationality: 'British' },
  { id: 'a5', name: 'Jane Austen', bio: 'English novelist known for her social commentary.', avatar: 'https://ui-avatars.com/api/?name=Jane+Austen', bookCount: 6, nationality: 'British' },
  { id: 'a6', name: 'George Orwell', bio: 'English novelist and essayist, author of 1984.', avatar: 'https://ui-avatars.com/api/?name=George+Orwell', bookCount: 10, nationality: 'British' },
  { id: 'a7', name: 'F. Scott Fitzgerald', bio: 'American novelist and essayist, author of The Great Gatsby.', avatar: 'https://ui-avatars.com/api/?name=F+Scott+Fitzgerald', bookCount: 5, nationality: 'American' },
  { id: 'a8', name: 'Harper Lee', bio: 'American novelist best known for To Kill a Mockingbird.', avatar: 'https://ui-avatars.com/api/?name=Harper+Lee', bookCount: 2, nationality: 'American' },
  { id: 'a9', name: 'Antoine de Saint-Exupéry', bio: 'French writer and aviator.', avatar: 'https://ui-avatars.com/api/?name=Antoine+de+Saint-Exupery', bookCount: 8, nationality: 'French' },
  { id: 'a10', name: 'Morgan Housel', bio: 'Partner at Collaborative Fund and author of The Psychology of Money.', avatar: 'https://ui-avatars.com/api/?name=Morgan+Housel', bookCount: 3, nationality: 'American' },
  { id: 'a11', name: 'Robert Kiyosaki', bio: 'American businessman and author of Rich Dad Poor Dad.', avatar: 'https://ui-avatars.com/api/?name=Robert+Kiyosaki', bookCount: 26, nationality: 'American' },
  { id: 'a12', name: 'Stephen Covey', bio: 'American educator, author, and keynote speaker.', avatar: 'https://ui-avatars.com/api/?name=Stephen+Covey', bookCount: 12, nationality: 'American' },
  { id: 'a13', name: 'Arthur Conan Doyle', bio: 'British writer and physician, creator of Sherlock Holmes.', avatar: 'https://ui-avatars.com/api/?name=Arthur+Conan+Doyle', bookCount: 60, nationality: 'British' },
  { id: 'a14', name: 'Bram Stoker', bio: 'Irish author, best known for Dracula.', avatar: 'https://ui-avatars.com/api/?name=Bram+Stoker', bookCount: 15, nationality: 'Irish' },
  { id: 'a15', name: 'Mary Shelley', bio: 'English novelist who wrote the Gothic novel Frankenstein.', avatar: 'https://ui-avatars.com/api/?name=Mary+Shelley', bookCount: 7, nationality: 'British' },
  { id: 'a16', name: 'Lewis Carroll', bio: 'English writer of children\\'s fiction, notably Alice\\'s Adventures in Wonderland.', avatar: 'https://ui-avatars.com/api/?name=Lewis+Carroll', bookCount: 11, nationality: 'British' },
  { id: 'a17', name: 'Miguel de Cervantes', bio: 'Early Modern Spanish writer widely regarded as the greatest writer in the Spanish language.', avatar: 'https://ui-avatars.com/api/?name=Miguel+de+Cervantes', bookCount: 10, nationality: 'Spanish' },
  { id: 'a18', name: 'Fyodor Dostoevsky', bio: 'Russian novelist, philosopher, and essayist.', avatar: 'https://ui-avatars.com/api/?name=Fyodor+Dostoevsky', bookCount: 15, nationality: 'Russian' },
  { id: 'a19', name: 'Leo Tolstoy', bio: 'Russian writer who is regarded as one of the greatest authors of all time.', avatar: 'https://ui-avatars.com/api/?name=Leo+Tolstoy', bookCount: 20, nationality: 'Russian' },
  { id: 'a20', name: 'Victor Hugo', bio: 'French poet, novelist, and dramatist of the Romantic movement.', avatar: 'https://ui-avatars.com/api/?name=Victor+Hugo', bookCount: 25, nationality: 'French' },
  { id: 'a21', name: 'Alexandre Dumas', bio: 'French writer of historical adventure novels.', avatar: 'https://ui-avatars.com/api/?name=Alexandre+Dumas', bookCount: 30, nationality: 'French' },
  { id: 'a22', name: 'Oscar Wilde', bio: 'Irish poet and playwright.', avatar: 'https://ui-avatars.com/api/?name=Oscar+Wilde', bookCount: 12, nationality: 'Irish' },
  { id: 'a23', name: 'Markus Zusak', bio: 'Australian writer, best known for The Book Thief.', avatar: 'https://ui-avatars.com/api/?name=Markus+Zusak', bookCount: 6, nationality: 'Australian' },
  { id: 'a24', name: 'Khaled Hosseini', bio: 'Afghan-American novelist and physician.', avatar: 'https://ui-avatars.com/api/?name=Khaled+Hosseini', bookCount: 4, nationality: 'Afghan-American' },
  { id: 'a25', name: 'Suzanne Collins', bio: 'American television writer and author of The Hunger Games.', avatar: 'https://ui-avatars.com/api/?name=Suzanne+Collins', bookCount: 8, nationality: 'American' },
  { id: 'a26', name: 'John Green', bio: 'American author and YouTube content creator.', avatar: 'https://ui-avatars.com/api/?name=John+Green', bookCount: 6, nationality: 'American' },
  { id: 'a27', name: 'Frank Herbert', bio: 'American science fiction author best known for Dune.', avatar: 'https://ui-avatars.com/api/?name=Frank+Herbert', bookCount: 25, nationality: 'American' },
  { id: 'a28', name: 'Abdulla Qodiriy', bio: 'Uzbek playwright, poet, writer, and literary translator. Author of O\\'tkan Kunlar.', avatar: 'https://ui-avatars.com/api/?name=Abdulla+Qodiriy', bookCount: 5, nationality: 'Uzbek' }
];
`);

writeFile('src/data/books.ts', `
import { Book } from '../types';

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
    id: '3', title: 'Harry Potter and the Sorcerer\\'s Stone', authorId: 'a3', description: 'A young boy discovers he is a wizard and attends a magical school.',
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
    id: '11', title: 'The Psychology of Money', authorId: 'a10', description: 'Timeless lessons on wealth, greed, and happiness doing well with money isn\\'t necessarily about what you know.',
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
    id: '17', title: 'Alice\\'s Adventures in Wonderland', authorId: 'a16', description: 'A young girl falls through a rabbit hole into a subterranean fantasy world.',
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
    id: '26', title: 'The Kite Runner', authorId: 'a24', description: 'An unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father\\'s servant.',
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
    id: '30', title: 'O\\'tkan Kunlar', authorId: 'a28', description: 'A classic Uzbek novel detailing the life, love, and tragedy of Otabek and Kumush.',
    cover: 'https://covers.openlibrary.org/b/isbn/9789943319080-L.jpg', coverColor: '#10b981',
    genre: ['classic-literature', 'romance', 'historical-fiction'], rating: 4.9, reviewCount: 5000, pageCount: 400, language: 'Uzbek', publishedYear: 1925, publisher: 'Sharq', isbn: '9789943319080', status: 'available'
  }
];
`);

writeFile('src/data/users.ts', `
import { User } from '../types';

export const users: User[] = [
  { id: 'u1', username: 'bookworm99', name: 'Alice Johnson', email: 'alice@example.com', avatar: 'https://ui-avatars.com/api/?name=Alice+Johnson', bio: 'Avid reader, mostly fiction and fantasy.', booksRead: 45, readingStreak: 12, followers: 120, following: 85, joinedDate: '2023-01-15T00:00:00Z', xp: 5400 },
  { id: 'u2', username: 'scififan', name: 'Bob Smith', email: 'bob@example.com', avatar: 'https://ui-avatars.com/api/?name=Bob+Smith', bio: 'Sci-fi enthusiast. Always looking to the stars.', booksRead: 78, readingStreak: 5, followers: 230, following: 150, joinedDate: '2022-11-10T00:00:00Z', xp: 8200 },
  { id: 'u3', username: 'classics_lover', name: 'Clara Oswald', email: 'clara@example.com', avatar: 'https://ui-avatars.com/api/?name=Clara+Oswald', bio: 'Austen, Brontë, Dickens. History is alive.', booksRead: 112, readingStreak: 30, followers: 540, following: 200, joinedDate: '2021-08-20T00:00:00Z', xp: 12500 },
  { id: 'u4', username: 'mindful_reader', name: 'David Chen', email: 'david@example.com', avatar: 'https://ui-avatars.com/api/?name=David+Chen', bio: 'Self-improvement and psychology.', booksRead: 25, readingStreak: 2, followers: 45, following: 60, joinedDate: '2023-05-05T00:00:00Z', xp: 2100 },
  { id: 'u5', username: 'fantasy_queen', name: 'Emma Watson', email: 'emma@example.com', avatar: 'https://ui-avatars.com/api/?name=Emma+Watson', bio: 'Lost in magical realms.', booksRead: 150, readingStreak: 45, followers: 890, following: 300, joinedDate: '2020-03-12T00:00:00Z', xp: 18000 },
  { id: 'u6', username: 'history_buff', name: 'Frank Castle', email: 'frank@example.com', avatar: 'https://ui-avatars.com/api/?name=Frank+Castle', bio: 'Non-fiction and historical biographies.', booksRead: 60, readingStreak: 8, followers: 110, following: 95, joinedDate: '2022-09-18T00:00:00Z', xp: 6200 },
  { id: 'u7', username: 'poetry_soul', name: 'Grace Lee', email: 'grace@example.com', avatar: 'https://ui-avatars.com/api/?name=Grace+Lee', bio: 'Rhymes, rhythms, and beautiful words.', booksRead: 85, readingStreak: 15, followers: 320, following: 210, joinedDate: '2021-12-01T00:00:00Z', xp: 9100 },
  { id: 'u8', username: 'thriller_seeker', name: 'Henry Ford', email: 'henry@example.com', avatar: 'https://ui-avatars.com/api/?name=Henry+Ford', bio: 'Mysteries and thrillers all night long.', booksRead: 105, readingStreak: 20, followers: 450, following: 320, joinedDate: '2021-04-14T00:00:00Z', xp: 11000 },
  { id: 'u9', username: 'young_adult_fan', name: 'Isabella Garcia', email: 'isabella@example.com', avatar: 'https://ui-avatars.com/api/?name=Isabella+Garcia', bio: 'YA fiction and contemporary romance.', booksRead: 55, readingStreak: 10, followers: 180, following: 140, joinedDate: '2022-07-22T00:00:00Z', xp: 5800 },
  { id: 'u10', username: 'philosopher_king', name: 'Jack Daniels', email: 'jack@example.com', avatar: 'https://ui-avatars.com/api/?name=Jack+Daniels', bio: 'Deep thoughts and existential reads.', booksRead: 40, readingStreak: 4, followers: 90, following: 75, joinedDate: '2023-02-28T00:00:00Z', xp: 4500 }
];
`);
