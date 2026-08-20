import type { Book } from '../types';

export const books: Book[] = [
  {
    id: '1', title: 'Atomic Habits', authorId: 'James Clear', description: 'No matter your goals, Atomic Habits offers a proven framework for improving every day. Tiny changes, remarkable results.',
    cover: 'https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg', coverColor: '#eab308',
    genre: ['Self-Help', 'Psychology'], rating: 4.8, reviewCount: 15420, pageCount: 320, language: 'English', publishedYear: 2018, publisher: 'Avery', isbn: '9780735211292', status: 'available'
  },
  {
    id: '2', title: 'The Alchemist', authorId: 'Paulo Coelho', description: 'A magical story about a shepherd boy who journeys to the pyramids in search of treasure.',
    cover: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg', coverColor: '#d97706',
    genre: ['Fiction', 'Philosophy'], rating: 4.6, reviewCount: 22100, pageCount: 208, language: 'English', publishedYear: 1988, publisher: 'HarperOne', isbn: '9780062315007', status: 'available'
  },
  {
    id: '3', title: "Harry Potter & Sorcerer's Stone", authorId: 'J.K. Rowling', description: 'A young boy discovers he is a wizard and attends a magical school filled with wonder.',
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
    id: '6', title: 'Pride and Prejudice', authorId: 'Jane Austen', description: 'A romantic clash between the opinionated Elizabeth Bennet and her proud beau, Mr. Darcy.',
    cover: 'https://m.media-amazon.com/images/I/71Q1tPupKFL._AC_UF1000,1000_QL80_.jpg', coverColor: '#9333ea',
    genre: ['Romance', 'Classic'], rating: 4.6, reviewCount: 32000, pageCount: 432, language: 'English', publishedYear: 1813, publisher: 'Penguin Classics', isbn: '9780141439518', status: 'available'
  },
  {
    id: '7', title: '1984', authorId: 'George Orwell', description: 'A dystopian social science fiction novel and cautionary tale about the future of government surveillance.',
    cover: 'https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg', coverColor: '#1e3a8a',
    genre: ['Sci-Fi', 'Classic'], rating: 4.7, reviewCount: 38000, pageCount: 328, language: 'English', publishedYear: 1949, publisher: 'Signet Classic', isbn: '9780451524935', status: 'available'
  },
  {
    id: '8', title: 'The Great Gatsby', authorId: 'F. Scott Fitzgerald', description: 'A story of wealthy Jay Gatsby and his obsessive love for the beautiful Daisy Buchanan.',
    cover: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg', coverColor: '#b45309',
    genre: ['Classic', 'Fiction'], rating: 4.4, reviewCount: 29000, pageCount: 180, language: 'English', publishedYear: 1925, publisher: 'Scribner', isbn: '9780743273565', status: 'available'
  },
  {
    id: '9', title: 'To Kill a Mockingbird', authorId: 'Harper Lee', description: 'Compassionate, dramatic, and deeply moving — taking readers to the roots of human behavior.',
    cover: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg', coverColor: '#8b5cf6',
    genre: ['Classic', 'Fiction'], rating: 4.8, reviewCount: 41000, pageCount: 324, language: 'English', publishedYear: 1960, publisher: 'Harper Perennial', isbn: '9780060935467', status: 'available'
  },
  {
    id: '10', title: 'The Little Prince', authorId: 'Antoine de Saint-Exupéry', description: 'A poetic tale in which a pilot stranded in the desert meets a young prince from another planet.',
    cover: 'https://m.media-amazon.com/images/I/71Ozy5B3pBL._AC_UF1000,1000_QL80_.jpg', coverColor: '#fbbf24',
    genre: ['Fantasy', 'Classic'], rating: 4.7, reviewCount: 21000, pageCount: 96, language: 'English', publishedYear: 1943, publisher: 'Harcourt', isbn: '9780156012195', status: 'available'
  },
  {
    id: '11', title: 'The Psychology of Money', authorId: 'Morgan Housel', description: 'Timeless lessons on wealth, greed, and happiness — doing well with money is about behavior, not intelligence.',
    cover: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg', coverColor: '#047857',
    genre: ['Non-Fiction', 'Psychology'], rating: 4.6, reviewCount: 18500, pageCount: 252, language: 'English', publishedYear: 2020, publisher: 'Harriman House', isbn: '9780857197689', status: 'available'
  },
  {
    id: '12', title: 'Rich Dad Poor Dad', authorId: 'Robert Kiyosaki', description: 'What the rich teach their kids about money that the poor and middle class do not!',
    cover: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg', coverColor: '#6366f1',
    genre: ['Non-Fiction', 'Self-Help'], rating: 4.5, reviewCount: 25000, pageCount: 336, language: 'English', publishedYear: 1997, publisher: 'Plata Publishing', isbn: '9781612680194', status: 'available'
  },
  {
    id: '13', title: 'The 7 Habits of Highly Effective People', authorId: 'Stephen Covey', description: 'Powerful lessons in personal change. A holistic, integrated, principle-centered approach for solving personal and professional problems.',
    cover: 'https://m.media-amazon.com/images/I/71RGfhVxbRL._AC_UF1000,1000_QL80_.jpg', coverColor: '#dc2626',
    genre: ['Self-Help', 'Non-Fiction'], rating: 4.6, reviewCount: 19000, pageCount: 381, language: 'English', publishedYear: 1989, publisher: 'Free Press', isbn: '9780743269513', status: 'available'
  },
  {
    id: '14', title: 'A Study in Scarlet', authorId: 'Arthur Conan Doyle', description: 'The novel that introduced the famous detective Sherlock Holmes and his companion Dr. Watson.',
    cover: 'https://m.media-amazon.com/images/I/71S0oXCn2-L._AC_UF1000,1000_QL80_.jpg', coverColor: '#78350f',
    genre: ['Mystery', 'Classic'], rating: 4.2, reviewCount: 12000, pageCount: 188, language: 'English', publishedYear: 1887, publisher: 'Penguin', isbn: '9780140439083', status: 'available'
  },
  {
    id: '15', title: 'Dracula', authorId: 'Bram Stoker', description: 'The famous gothic horror novel about Count Dracula, a vampire from Transylvania, seeking new blood.',
    cover: 'https://m.media-amazon.com/images/I/91KLGrSm-iL._AC_UF1000,1000_QL80_.jpg', coverColor: '#1c1917',
    genre: ['Horror', 'Classic'], rating: 4.3, reviewCount: 16000, pageCount: 418, language: 'English', publishedYear: 1897, publisher: 'Penguin Classics', isbn: '9780141439846', status: 'available'
  },
  {
    id: '16', title: 'Frankenstein', authorId: 'Mary Shelley', description: 'A young scientist creates a sapient creature in an unorthodox scientific experiment, with terrifying consequences.',
    cover: 'https://m.media-amazon.com/images/I/81qJBMkH1kL._AC_UF1000,1000_QL80_.jpg', coverColor: '#334155',
    genre: ['Horror', 'Sci-Fi', 'Classic'], rating: 4.4, reviewCount: 14000, pageCount: 280, language: 'English', publishedYear: 1818, publisher: 'Penguin Classics', isbn: '9780141439471', status: 'available'
  },
  {
    id: '17', title: "Alice's Adventures in Wonderland", authorId: 'Lewis Carroll', description: 'A young girl named Alice falls through a rabbit hole into a subterranean fantasy world.',
    cover: 'https://m.media-amazon.com/images/I/61DwNGCjvCL._AC_UF1000,1000_QL80_.jpg', coverColor: '#db2777',
    genre: ['Fantasy', 'Classic'], rating: 4.3, reviewCount: 15500, pageCount: 352, language: 'English', publishedYear: 1865, publisher: 'Penguin Classics', isbn: '9780141439761', status: 'available'
  },
  {
    id: '18', title: 'Don Quixote', authorId: 'Miguel de Cervantes', description: 'The adventures of an idealistic nobleman from La Mancha who believes himself to be a knight errant.',
    cover: 'https://m.media-amazon.com/images/I/71YDAK6HWEL._AC_UF1000,1000_QL80_.jpg', coverColor: '#f59e0b',
    genre: ['Classic', 'Fiction'], rating: 4.5, reviewCount: 13000, pageCount: 1072, language: 'English', publishedYear: 1605, publisher: 'Ecco', isbn: '9780060934347', status: 'available'
  },
  {
    id: '19', title: 'Crime and Punishment', authorId: 'Fyodor Dostoevsky', description: 'The mental anguish and moral dilemmas of an impoverished ex-student in Saint Petersburg.',
    cover: 'https://m.media-amazon.com/images/I/81JdSN9moxL._AC_UF1000,1000_QL80_.jpg', coverColor: '#475569',
    genre: ['Classic', 'Philosophy'], rating: 4.7, reviewCount: 21000, pageCount: 565, language: 'English', publishedYear: 1866, publisher: 'Vintage Classics', isbn: '9780679734505', status: 'available'
  },
  {
    id: '20', title: 'War and Peace', authorId: 'Leo Tolstoy', description: 'Chronicles the French invasion of Russia and the impact of the Napoleonic era on Tsarist society.',
    cover: 'https://m.media-amazon.com/images/I/81Z5ePIh7ZL._AC_UF1000,1000_QL80_.jpg', coverColor: '#7c2d12',
    genre: ['Classic', 'History'], rating: 4.5, reviewCount: 11000, pageCount: 1225, language: 'English', publishedYear: 1869, publisher: 'Vintage', isbn: '9781400079988', status: 'available'
  },
  {
    id: '21', title: 'The Brothers Karamazov', authorId: 'Fyodor Dostoevsky', description: 'A passionate philosophical novel set in 19th-century Russia, exploring faith, doubt, and free will.',
    cover: 'https://m.media-amazon.com/images/I/81WcnNQ-TBL._AC_UF1000,1000_QL80_.jpg', coverColor: '#1e293b',
    genre: ['Classic', 'Philosophy'], rating: 4.8, reviewCount: 14000, pageCount: 796, language: 'English', publishedYear: 1880, publisher: 'Farrar, Straus and Giroux', isbn: '9780374528379', status: 'available'
  },
  {
    id: '22', title: 'Les Misérables', authorId: 'Victor Hugo', description: 'Follows the struggles of ex-convict Jean Valjean and his pursuit of redemption in 19th-century France.',
    cover: 'https://m.media-amazon.com/images/I/81k2GxHBVJL._AC_UF1000,1000_QL80_.jpg', coverColor: '#b91c1c',
    genre: ['Classic', 'Fiction'], rating: 4.6, reviewCount: 16000, pageCount: 1463, language: 'English', publishedYear: 1862, publisher: 'Signet Classics', isbn: '9780451419439', status: 'available'
  },
  {
    id: '23', title: 'The Count of Monte Cristo', authorId: 'Alexandre Dumas', description: 'A man wrongfully imprisoned escapes, acquires a fortune, and meticulously takes revenge on those who betrayed him.',
    cover: 'https://m.media-amazon.com/images/I/71W8W2KXDVL._AC_UF1000,1000_QL80_.jpg', coverColor: '#0f172a',
    genre: ['Classic', 'Adventure'], rating: 4.8, reviewCount: 22000, pageCount: 1276, language: 'English', publishedYear: 1844, publisher: 'Penguin Classics', isbn: '9780140449266', status: 'available'
  },
  {
    id: '24', title: 'The Picture of Dorian Gray', authorId: 'Oscar Wilde', description: 'A philosophical novel about a handsome man whose portrait ages and corrupts while he stays forever young.',
    cover: 'https://m.media-amazon.com/images/I/71YYnR-BXQL._AC_UF1000,1000_QL80_.jpg', coverColor: '#831843',
    genre: ['Classic', 'Horror'], rating: 4.5, reviewCount: 17500, pageCount: 254, language: 'English', publishedYear: 1890, publisher: 'Penguin Classics', isbn: '9780141439570', status: 'available'
  },
  {
    id: '25', title: 'The Book Thief', authorId: 'Markus Zusak', description: 'Narrated by Death, the story of a young girl stealing books to survive the horrors of Nazi Germany.',
    cover: 'https://m.media-amazon.com/images/I/51bYRE5rMiL._AC_UF1000,1000_QL80_.jpg', coverColor: '#64748b',
    genre: ['History', 'Fiction', 'Young-Adult'], rating: 4.7, reviewCount: 38000, pageCount: 552, language: 'English', publishedYear: 2005, publisher: 'Knopf', isbn: '9780375842207', status: 'available'
  },
  {
    id: '26', title: 'The Kite Runner', authorId: 'Khaled Hosseini', description: 'An unforgettable story of friendship between a wealthy boy and the son of his father\'s servant in Afghanistan.',
    cover: 'https://m.media-amazon.com/images/I/81IybGCEGxL._AC_UF1000,1000_QL80_.jpg', coverColor: '#f97316',
    genre: ['Fiction', 'History'], rating: 4.6, reviewCount: 35000, pageCount: 371, language: 'English', publishedYear: 2003, publisher: 'Riverhead', isbn: '9781594631931', status: 'available'
  },
  {
    id: '27', title: 'The Hunger Games', authorId: 'Suzanne Collins', description: 'In a dystopian future, a girl volunteers to take her sister\'s place in a brutal televised death match.',
    cover: 'https://m.media-amazon.com/images/I/71un2hI4mcL._AC_UF1000,1000_QL80_.jpg', coverColor: '#fb923c',
    genre: ['Sci-Fi', 'Young-Adult'], rating: 4.6, reviewCount: 42000, pageCount: 374, language: 'English', publishedYear: 2008, publisher: 'Scholastic', isbn: '9780439023481', status: 'available'
  },
  {
    id: '28', title: 'The Fault in Our Stars', authorId: 'John Green', description: 'A heartbreaking and beautiful story of two teenagers with cancer who fall deeply in love.',
    cover: 'https://m.media-amazon.com/images/I/71OctDqFx4L._AC_UF1000,1000_QL80_.jpg', coverColor: '#38bdf8',
    genre: ['Romance', 'Young-Adult'], rating: 4.5, reviewCount: 33000, pageCount: 313, language: 'English', publishedYear: 2012, publisher: 'Dutton Books', isbn: '9780525478812', status: 'available'
  },
  {
    id: '29', title: 'Dune', authorId: 'Frank Herbert', description: 'A complex story of politics, religion, ecology, and human emotion on the desert planet Arrakis.',
    cover: 'https://m.media-amazon.com/images/I/81ym3QVbNTL._AC_UF1000,1000_QL80_.jpg', coverColor: '#d97706',
    genre: ['Sci-Fi', 'Fantasy'], rating: 4.7, reviewCount: 27000, pageCount: 412, language: 'English', publishedYear: 1965, publisher: 'Ace Books', isbn: '9780441172719', status: 'available'
  },
  {
    id: '30', title: "O'tkan Kunlar", authorId: "Abdulla Qodiriy", description: "O'zbek adabiyotining durdona asari — Otabek va Kumushning muhabbati va fojiasi haqida.",
    cover: 'https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg', coverColor: '#10b981',
    genre: ['Classic', 'Romance', 'History'], rating: 4.9, reviewCount: 5000, pageCount: 400, language: 'Uzbek', publishedYear: 1925, publisher: 'Sharq', isbn: '9789943319080', status: 'available'
  },
  {
    id: '31', title: "Man's Search for Meaning", authorId: 'Viktor E. Frankl', description: 'A Holocaust survivor shares his psychotherapeutic method of finding meaning in all forms of existence.',
    cover: 'https://m.media-amazon.com/images/I/71r6fGHarEL._AC_UF1000,1000_QL80_.jpg', coverColor: '#065f46',
    genre: ['Non-Fiction', 'Psychology', 'Self-Help'], rating: 4.8, reviewCount: 22000, pageCount: 165, language: 'English', publishedYear: 1946, publisher: 'Beacon Press', isbn: '9780807014271', status: 'available'
  },
  {
    id: '32', title: 'Norwegian Wood', authorId: 'Haruki Murakami', description: 'A nostalgic story of loss and sexuality set during the late 1960s student movement in Tokyo.',
    cover: 'https://m.media-amazon.com/images/I/81WcnNQ-TBL._AC_UF1000,1000_QL80_.jpg', coverColor: '#065f46',
    genre: ['Fiction', 'Romance'], rating: 4.3, reviewCount: 12000, pageCount: 296, language: 'English', publishedYear: 1987, publisher: 'Vintage', isbn: '9780375704024', status: 'available'
  },
  {
    id: '33', title: 'One Hundred Years of Solitude', authorId: 'Gabriel García Márquez', description: 'The multi-generational story of the Buendía family in the mythical Colombian town of Macondo.',
    cover: 'https://m.media-amazon.com/images/I/81qzTFfDq6L._AC_UF1000,1000_QL80_.jpg', coverColor: '#7e22ce',
    genre: ['Fiction', 'Classic'], rating: 4.6, reviewCount: 20000, pageCount: 417, language: 'English', publishedYear: 1967, publisher: 'Harper & Row', isbn: '9780060883287', status: 'available'
  },
  {
    id: '34', title: 'Anna Karenina', authorId: 'Leo Tolstoy', description: 'Many consider this Tolstoy\'s masterpiece — a story of love, betrayal, and social judgment in Imperial Russia.',
    cover: 'https://m.media-amazon.com/images/I/71KHSvvEfrL._AC_UF1000,1000_QL80_.jpg', coverColor: '#9f1239',
    genre: ['Classic', 'Romance'], rating: 4.6, reviewCount: 15000, pageCount: 864, language: 'English', publishedYear: 1878, publisher: 'Vintage', isbn: '9780143035008', status: 'available'
  },
  {
    id: '35', title: 'The Stranger', authorId: 'Albert Camus', description: 'A landmark of existentialist literature — a man living in French Algeria kills an Arab man and shows little remorse.',
    cover: 'https://m.media-amazon.com/images/I/71LpVEyLjrL._AC_UF1000,1000_QL80_.jpg', coverColor: '#0c4a6e',
    genre: ['Classic', 'Philosophy'], rating: 4.5, reviewCount: 14000, pageCount: 123, language: 'English', publishedYear: 1942, publisher: 'Vintage', isbn: '9780679720201', status: 'available'
  },
];
