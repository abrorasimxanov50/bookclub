import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { catchAsync } from '../utils/catchAsync';

export const getDashboardStats = catchAsync(async (req: Request, res: Response) => {
  const [
    totalUsers,
    totalBooks,
    totalAuthors,
    totalReviews,
    totalChallenges,
    totalClubs,
    activeUsers
  ] = await Promise.all([
    prisma.user.count(),
    prisma.book.count(),
    prisma.author.count(),
    prisma.review.count(),
    prisma.challenge.count(),
    prisma.club.count(),
    prisma.user.count({
      where: {
        lastActive: {
          gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // active in last 30 days
        }
      }
    })
  ]);

  res.json({
    success: true,
    data: {
      totalUsers,
      totalBooks,
      totalAuthors,
      totalReviews,
      totalChallenges,
      totalClubs,
      activeUsers
    }
  });
});

export const getUsers = catchAsync(async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      role: true,
      createdAt: true,
      lastActive: true
    },
    orderBy: { createdAt: 'desc' }
  });
  
  res.json({ success: true, data: users });
});

export const deleteUser = catchAsync(async (req: Request, res: Response) => {
  await prisma.user.delete({
    where: { id: req.params.id }
  });
  res.json({ success: true, message: 'User deleted successfully' });
});
