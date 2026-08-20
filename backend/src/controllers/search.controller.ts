import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { catchAsync } from '../utils/catchAsync';

export const globalSearch = catchAsync(async (req: Request, res: Response) => {
  const q = req.query.q as string;
  if (!q) {
    return res.status(400).json({ success: false, message: 'Query parameter q is required' });
  }

  const [books, authors, categories, users, clubs] = await Promise.all([
    prisma.book.findMany({
      where: {
        OR: [
          { title: { contains: q, mode: 'insensitive' } },
          { description: { contains: q, mode: 'insensitive' } }
        ]
      },
      take: 5
    }),
    prisma.author.findMany({
      where: { name: { contains: q, mode: 'insensitive' } },
      take: 5
    }),
    prisma.category.findMany({
      where: { name: { contains: q, mode: 'insensitive' } },
      take: 5
    }),
    prisma.user.findMany({
      where: {
        OR: [
          { name: { contains: q, mode: 'insensitive' } },
          { username: { contains: q, mode: 'insensitive' } }
        ]
      },
      select: { id: true, name: true, username: true, avatar: true },
      take: 5
    }),
    prisma.club.findMany({
      where: { name: { contains: q, mode: 'insensitive' } },
      take: 5
    })
  ]);

  res.json({
    success: true,
    data: {
      books,
      authors,
      categories,
      users,
      clubs
    }
  });
});
