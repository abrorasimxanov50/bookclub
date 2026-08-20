import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Database...');

  const password = await bcrypt.hash('password123', 10);

  // Users
  const admin = await prisma.user.upsert({
    where: { email: 'admin@bookclub.com' },
    update: {},
    create: {
      name: 'Admin User',
      username: 'admin',
      email: 'admin@bookclub.com',
      password,
      role: 'ADMIN',
      isVerified: true
    }
  });

  const user = await prisma.user.upsert({
    where: { email: 'user@bookclub.com' },
    update: {},
    create: {
      name: 'John Reader',
      username: 'johnreader',
      email: 'user@bookclub.com',
      password,
      role: 'USER',
      isVerified: true
    }
  });

  // Categories
  const fiction = await prisma.category.upsert({
    where: { slug: 'fiction' },
    update: {},
    create: { name: 'Fiction', slug: 'fiction', description: 'Imaginative or invented stories' }
  });
  const fantasy = await prisma.category.upsert({
    where: { slug: 'fantasy' },
    update: {},
    create: { name: 'Fantasy', slug: 'fantasy', description: 'Magic and supernatural phenomena' }
  });
  const scifi = await prisma.category.upsert({
    where: { slug: 'sci-fi' },
    update: {},
    create: { name: 'Sci-Fi', slug: 'sci-fi', description: 'Science fiction stories' }
  });
  const mystery = await prisma.category.upsert({
    where: { slug: 'mystery' },
    update: {},
    create: { name: 'Mystery', slug: 'mystery', description: 'Mystery and thriller stories' }
  });
  const romance = await prisma.category.upsert({
    where: { slug: 'romance' },
    update: {},
    create: { name: 'Romance', slug: 'romance', description: 'Love and romantic stories' }
  });
  const selfhelp = await prisma.category.upsert({
    where: { slug: 'self-help' },
    update: {},
    create: { name: 'Self-Help', slug: 'self-help', description: 'Personal development books' }
  });
  const history = await prisma.category.upsert({
    where: { slug: 'history' },
    update: {},
    create: { name: 'History', slug: 'history', description: 'Historical non-fiction' }
  });
  const biography = await prisma.category.upsert({
    where: { slug: 'biography' },
    update: {},
    create: { name: 'Biography', slug: 'biography', description: 'Life stories of notable people' }
  });

  // Authors
  const georgeOrwell = await prisma.author.upsert({
    where: { slug: 'george-orwell' },
    update: {},
    create: { name: 'George Orwell', slug: 'george-orwell', bio: 'English novelist and essayist, journalist and critic.' }
  });
  const tolkien = await prisma.author.upsert({
    where: { slug: 'jrr-tolkien' },
    update: {},
    create: { name: 'J.R.R. Tolkien', slug: 'jrr-tolkien', bio: 'English writer, poet, philologist and academic, best known for The Hobbit and Lord of the Rings.' }
  });
  const fitzgerald = await prisma.author.upsert({
    where: { slug: 'f-scott-fitzgerald' },
    update: {},
    create: { name: 'F. Scott Fitzgerald', slug: 'f-scott-fitzgerald', bio: 'American novelist and short story writer, widely regarded as one of the greatest American writers.' }
  });
  const austen = await prisma.author.upsert({
    where: { slug: 'jane-austen' },
    update: {},
    create: { name: 'Jane Austen', slug: 'jane-austen', bio: 'English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry.' }
  });
  const dostoyevsky = await prisma.author.upsert({
    where: { slug: 'fyodor-dostoyevsky' },
    update: {},
    create: { name: 'Fyodor Dostoyevsky', slug: 'fyodor-dostoyevsky', bio: 'Russian novelist, short story writer, essayist and journalist.' }
  });
  const haruki = await prisma.author.upsert({
    where: { slug: 'haruki-murakami' },
    update: {},
    create: { name: 'Haruki Murakami', slug: 'haruki-murakami', bio: 'Japanese writer. His works of fiction and non-fiction have garnered critical acclaim and a large readership.' }
  });
  const gabriel = await prisma.author.upsert({
    where: { slug: 'gabriel-garcia-marquez' },
    update: {},
    create: { name: 'Gabriel García Márquez', slug: 'gabriel-garcia-marquez', bio: 'Colombian novelist, short-story writer, screenwriter, and journalist. Nobel Prize winner.' }
  });
  const dumas = await prisma.author.upsert({
    where: { slug: 'alexandre-dumas' },
    update: {},
    create: { name: 'Alexandre Dumas', slug: 'alexandre-dumas', bio: 'French writer. His works have been translated into many languages and he is one of the most widely read French authors.' }
  });
  const frankl = await prisma.author.upsert({
    where: { slug: 'viktor-frankl' },
    update: {},
    create: { name: 'Viktor E. Frankl', slug: 'viktor-frankl', bio: 'Austrian psychiatrist, Holocaust survivor, and author of Man\'s Search for Meaning.' }
  });
  const dossey = await prisma.author.upsert({
    where: { slug: 'james-clear' },
    update: {},
    create: { name: 'James Clear', slug: 'james-clear', bio: 'Author, entrepreneur, and photographer. His work is focused on habits, decision-making, and continuous improvement.' }
  });
  const leo = await prisma.author.upsert({
    where: { slug: 'leo-tolstoy' },
    update: {},
    create: { name: 'Leo Tolstoy', slug: 'leo-tolstoy', bio: 'Russian writer who is regarded as one of the greatest authors of all time.' }
  });
  const camus = await prisma.author.upsert({
    where: { slug: 'albert-camus' },
    update: {},
    create: { name: 'Albert Camus', slug: 'albert-camus', bio: 'French philosopher, author, and journalist. Nobel Prize in Literature winner.' }
  });

  // Books
  const books = [
    {
      slug: '1984',
      title: '1984',
      description: 'A dystopian social science fiction novel and cautionary tale. Set in Airstrip One, a province of the superstate Oceania, in a world of perpetual war, omnipresent government surveillance.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg',
      pageCount: 328,
      language: 'English',
      publishedYear: 1949,
      authorId: georgeOrwell.id,
      categoryId: fiction.id,
      averageRating: 4.8,
      ratingCount: 4825000,
      reviewCount: 92000,
    },
    {
      slug: 'animal-farm',
      title: 'Animal Farm',
      description: 'A satirical allegorical novella, in the form of a beast fable, by George Orwell, first published in England on 17 August 1945.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1424037542i/7613.jpg',
      pageCount: 112,
      language: 'English',
      publishedYear: 1945,
      authorId: georgeOrwell.id,
      categoryId: fiction.id,
      averageRating: 4.5,
      ratingCount: 3200000,
      reviewCount: 60000,
    },
    {
      slug: 'the-hobbit',
      title: 'The Hobbit',
      description: 'A children\'s fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg',
      pageCount: 310,
      language: 'English',
      publishedYear: 1937,
      authorId: tolkien.id,
      categoryId: fantasy.id,
      averageRating: 4.9,
      ratingCount: 3750000,
      reviewCount: 120000,
    },
    {
      slug: 'the-lord-of-the-rings',
      title: 'The Lord of the Rings',
      description: 'An epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien\'s 1937 fantasy novel The Hobbit.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
      pageCount: 1178,
      language: 'English',
      publishedYear: 1954,
      authorId: tolkien.id,
      categoryId: fantasy.id,
      averageRating: 4.9,
      ratingCount: 6200000,
      reviewCount: 180000,
    },
    {
      slug: 'the-great-gatsby',
      title: 'The Great Gatsby',
      description: 'A 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts narrator Nick Carraway\'s interactions with the mysterious Jay Gatsby.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490528560i/4671.jpg',
      pageCount: 180,
      language: 'English',
      publishedYear: 1925,
      authorId: fitzgerald.id,
      categoryId: fiction.id,
      averageRating: 3.9,
      ratingCount: 4800000,
      reviewCount: 89000,
    },
    {
      slug: 'pride-and-prejudice',
      title: 'Pride and Prejudice',
      description: 'A romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg',
      pageCount: 432,
      language: 'English',
      publishedYear: 1813,
      authorId: austen.id,
      categoryId: romance.id,
      averageRating: 4.7,
      ratingCount: 3900000,
      reviewCount: 95000,
    },
    {
      slug: 'crime-and-punishment',
      title: 'Crime and Punishment',
      description: 'A novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg',
      pageCount: 671,
      language: 'English',
      publishedYear: 1866,
      authorId: dostoyevsky.id,
      categoryId: fiction.id,
      averageRating: 4.8,
      ratingCount: 680000,
      reviewCount: 18000,
    },
    {
      slug: 'norwegian-wood',
      title: 'Norwegian Wood',
      description: 'A 1987 novel by Japanese author Haruki Murakami. The novel is a nostalgic story of loss and sexuality. The novel sold millions of copies in Japan.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386924634i/11297.jpg',
      pageCount: 296,
      language: 'English',
      publishedYear: 1987,
      authorId: haruki.id,
      categoryId: fiction.id,
      averageRating: 4.3,
      ratingCount: 320000,
      reviewCount: 12000,
    },
    {
      slug: 'one-hundred-years-of-solitude',
      title: 'One Hundred Years of Solitude',
      description: 'A landmark 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg',
      pageCount: 417,
      language: 'English',
      publishedYear: 1967,
      authorId: gabriel.id,
      categoryId: fiction.id,
      averageRating: 4.6,
      ratingCount: 780000,
      reviewCount: 20000,
    },
    {
      slug: 'the-count-of-monte-cristo',
      title: 'The Count of Monte Cristo',
      description: 'An adventure novel by French author Alexandre Dumas. It is one of the author\'s most popular works, along with The Three Musketeers.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1611834718i/7126.jpg',
      pageCount: 1276,
      language: 'English',
      publishedYear: 1844,
      authorId: dumas.id,
      categoryId: mystery.id,
      averageRating: 4.7,
      ratingCount: 560000,
      reviewCount: 16000,
    },
    {
      slug: 'mans-search-for-meaning',
      title: "Man's Search for Meaning",
      description: 'A 1946 book by Viktor Frankl chronicling his experiences as a prisoner in Nazi concentration camps during World War II.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1535419394i/4069.jpg',
      pageCount: 165,
      language: 'English',
      publishedYear: 1946,
      authorId: frankl.id,
      categoryId: selfhelp.id,
      averageRating: 4.8,
      ratingCount: 720000,
      reviewCount: 22000,
    },
    {
      slug: 'atomic-habits',
      title: 'Atomic Habits',
      description: 'A self-help book written by James Clear, published in 2018. The book focuses on how small habits can lead to remarkable results.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg',
      pageCount: 319,
      language: 'English',
      publishedYear: 2018,
      authorId: dossey.id,
      categoryId: selfhelp.id,
      averageRating: 4.7,
      ratingCount: 980000,
      reviewCount: 30000,
    },
    {
      slug: 'war-and-peace',
      title: 'War and Peace',
      description: 'A novel by the Russian author Leo Tolstoy, first published serially in 1865–1867. It depicts events surrounding the French invasion of Russia.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413215930i/656.jpg',
      pageCount: 1392,
      language: 'English',
      publishedYear: 1869,
      authorId: leo.id,
      categoryId: history.id,
      averageRating: 4.6,
      ratingCount: 360000,
      reviewCount: 12000,
    },
    {
      slug: 'the-stranger',
      title: 'The Stranger',
      description: 'A novel by Albert Camus published in 1942. Its theme and outlook are often cited as examples of Camus\'s philosophy of the absurd.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590930002i/49552.jpg',
      pageCount: 123,
      language: 'English',
      publishedYear: 1942,
      authorId: camus.id,
      categoryId: fiction.id,
      averageRating: 4.5,
      ratingCount: 540000,
      reviewCount: 14000,
    },
    {
      slug: 'anna-karenina',
      title: 'Anna Karenina',
      description: 'A novel by the Russian author Leo Tolstoy, first published in book form in 1878. Many writers consider Anna Karenina the greatest novel ever written.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659074539i/15823480.jpg',
      pageCount: 864,
      language: 'English',
      publishedYear: 1878,
      authorId: leo.id,
      categoryId: romance.id,
      averageRating: 4.6,
      ratingCount: 420000,
      reviewCount: 15000,
    },
    {
      slug: 'kafka-on-the-shore',
      title: 'Kafka on the Shore',
      description: 'A novel by Haruki Murakami, published in Japan in 2002. The novel follows two main characters: teenage runaway Kafka Tamura and an aging simpleton called Nakata.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1429638085i/4929.jpg',
      pageCount: 505,
      language: 'English',
      publishedYear: 2002,
      authorId: haruki.id,
      categoryId: mystery.id,
      averageRating: 4.4,
      ratingCount: 290000,
      reviewCount: 10000,
    },
    {
      slug: 'the-brothers-karamazov',
      title: 'The Brothers Karamazov',
      description: 'A passionate philosophical novel of Dostoyevsky, his last and longest novel. It examines faith, doubt, reason, and free will through the story of the Karamazov family.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1427728126i/4934.jpg',
      pageCount: 796,
      language: 'English',
      publishedYear: 1880,
      authorId: dostoyevsky.id,
      categoryId: fiction.id,
      averageRating: 4.8,
      ratingCount: 310000,
      reviewCount: 11000,
    },
    {
      slug: 'love-in-the-time-of-cholera',
      title: 'Love in the Time of Cholera',
      description: 'A novel by Colombian Nobel Prize-winning author Gabriel García Márquez, first published in Spanish in 1985.',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327889403i/9712.jpg',
      pageCount: 348,
      language: 'English',
      publishedYear: 1985,
      authorId: gabriel.id,
      categoryId: romance.id,
      averageRating: 4.2,
      ratingCount: 235000,
      reviewCount: 8000,
    },
  ];

  for (const book of books) {
    await prisma.book.upsert({
      where: { slug: book.slug },
      update: { coverUrl: book.coverUrl },
      create: book,
    });
  }

  console.log(`✅ Seeded ${books.length} books, authors, and categories!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
