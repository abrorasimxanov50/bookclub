import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { catchAsync } from '../utils/catchAsync';

export const getLeaderboard = catchAsync(async (req: Request, res: Response) => {
  const { period = 'weekly' } = req.query; // weekly, monthly, yearly
  
  // In a real app, this would calculate based on points or pages read within the date range.
  // For now, we'll order by the number of completed books.
  
  const users = await prisma.user.findMany({
    take: 50,
    select: {
      id: true,
      name: true,
      username: true,
      avatar: true,
      _count: {
        select: {
          libraryItems: {
            where: { status: 'COMPLETED' }
          }
        }
      }
    },
    orderBy: {
      libraryItems: {
        _count: 'desc'
      }
    }
  });

  const formattedUsers = users.map((u, index) => ({
    rank: index + 1,
    user: {
      id: u.id,
      name: u.name,
      username: u.username,
      avatar: u.avatar
    },
    booksCompleted: u._count.libraryItems,
    points: u._count.libraryItems * 150 // mock points
  }));

  res.json({ success: true, data: formattedUsers });
});
