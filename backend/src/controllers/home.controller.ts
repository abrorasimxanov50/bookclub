import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { catchAsync } from '../utils/catchAsync';

export const getHomeData = catchAsync(async (req: Request, res: Response) => {
  // Fetch multiple dashboard segments in parallel
  const [
    trendingBooks,
    popularBooks,
    recommendedBooks,
    activeChallenges,
    popularClubs,
    recentActivity
  ] = await Promise.all([
    prisma.book.findMany({ orderBy: { reviewCount: 'desc' }, take: 10, include: { author: true } }),
    prisma.book.findMany({ orderBy: { ratingCount: 'desc' }, take: 10, include: { author: true } }),
    prisma.book.findMany({ orderBy: { averageRating: 'desc' }, take: 10, include: { author: true } }),
    prisma.challenge.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
    prisma.club.findMany({ orderBy: { members: { _count: 'desc' } }, take: 5 }),
    prisma.activity.findMany({ orderBy: { createdAt: 'desc' }, take: 10, include: { user: { select: { id: true, name: true, avatar: true } } } })
  ]);

  res.json({
    success: true,
    data: {
      trendingBooks,
      popularBooks,
      recommendedBooks,
      activeChallenges,
      popularClubs,
      recentActivity
    }
  });
});
