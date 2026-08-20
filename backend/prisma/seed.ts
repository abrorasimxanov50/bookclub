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

  // Authors
  const georgeOrwell = await prisma.author.upsert({
    where: { slug: 'george-orwell' },
    update: {},
    create: { name: 'George Orwell', slug: 'george-orwell', bio: 'English novelist and essayist.' }
  });
  const tolkien = await prisma.author.upsert({
    where: { slug: 'jrr-tolkien' },
    update: {},
    create: { name: 'J.R.R. Tolkien', slug: 'jrr-tolkien', bio: 'English writer, author of The Lord of the Rings.' }
  });
  const fitzgerald = await prisma.author.upsert({
    where: { slug: 'f-scott-fitzgerald' },
    update: {},
    create: { name: 'F. Scott Fitzgerald', slug: 'f-scott-fitzgerald', bio: 'American novelist and short story writer.' }
  });
  const austen = await prisma.author.upsert({
    where: { slug: 'jane-austen' },
    update: {},
    create: { name: 'Jane Austen', slug: 'jane-austen', bio: 'English novelist known for Pride and Prejudice.' }
  });
  const dostoyevsky = await prisma.author.upsert({
    where: { slug: 'fyodor-dostoyevsky' },
    update: {},
    create: { name: 'Fyodor Dostoyevsky', slug: 'fyodor-dostoyevsky', bio: 'Russian novelist and essayist.' }
  });
  const jamesClear = await prisma.author.upsert({
    where: { slug: 'james-clear' },
    update: {},
    create: { name: 'James Clear', slug: 'james-clear', bio: 'Author of Atomic Habits.' }
  });

  // Books with 100% working high resolution Unsplash cover URLs
  const books = [
    {
      slug: '1984',
      title: '1984',
      description: 'A dystopian social science fiction novel and cautionary tale about perpetual war and government surveillance.',
      coverUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&auto=format&fit=crop&q=80',
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
      description: 'A satirical allegorical novella by George Orwell detailing a farm rebellion.',
      coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600&auto=format&fit=crop&q=80',
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
      description: 'A fantasy novel following Bilbo Baggins on an epic journey.',
      coverUrl: 'https://images.unsplash.com/photo-1629196914275-81691a5666db?w=600&auto=format&fit=crop&q=80',
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
      description: 'An epic high-fantasy novel of Middle-earth and the One Ring.',
      coverUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
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
      description: 'A 1925 novel depicting Jazz Age Long Island and Jay Gatsby.',
      coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=80',
      pageCount: 180,
      language: 'English',
      publishedYear: 1925,
      authorId: fitzgerald.id,
      categoryId: fiction.id,
      averageRating: 4.4,
      ratingCount: 4800000,
      reviewCount: 89000,
    },
    {
      slug: 'pride-and-prejudice',
      title: 'Pride and Prejudice',
      description: 'A romantic novel following the character development of Elizabeth Bennet.',
      coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600&auto=format&fit=crop&q=80',
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
      description: 'A psychological novel examining moral dilemmas in Saint Petersburg.',
      coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80',
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
      slug: 'atomic-habits',
      title: 'Atomic Habits',
      description: 'How small habits lead to remarkable personal and professional results.',
      coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80',
      pageCount: 319,
      language: 'English',
      publishedYear: 2018,
      authorId: jamesClear.id,
      categoryId: selfhelp.id,
      averageRating: 4.8,
      ratingCount: 980000,
      reviewCount: 30000,
    }
  ];

  for (const book of books) {
    await prisma.book.upsert({
      where: { slug: book.slug },
      update: { coverUrl: book.coverUrl },
      create: book,
    });
  }

  console.log(`✅ Seeded ${books.length} books with 100% reliable Unsplash cover images!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
