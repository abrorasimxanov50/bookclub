import { Request, Response } from 'express';
import User from '../models/User';
import { catchAsync } from '../utils/catchAsync';

export const getLeaderboard = catchAsync(async (req: Request, res: Response) => {
  const { period = 'weekly' } = req.query; // weekly, monthly, yearly
  
  // In a real app, this would calculate based on points or pages read within the date range.
  // For now, we'll order by the number of completed books.
  
  const users = await User.aggregate([
    {
      $lookup: {
        from: 'libraryitems',
        let: { userId: '$_id' },
        pipeline: [
          { $match: { $expr: { $eq: ['$userId', '$$userId'] }, status: 'COMPLETED' } }
        ],
        as: 'completedBooks'
      }
    },
    {
      $addFields: {
        booksCompleted: { $size: '$completedBooks' }
      }
    },
    {
      $sort: { booksCompleted: -1 }
    },
    {
      $limit: 50
    },
    {
      $project: {
        id: '$_id',
        name: 1,
        username: 1,
        avatar: 1,
        booksCompleted: 1,
        points: { $multiply: ['$booksCompleted', 150] }
      }
    }
  ]);

  const formattedUsers = users.map((u, index) => ({
    rank: index + 1,
    user: {
      id: u.id,
      name: u.name,
      username: u.username,
      avatar: u.avatar
    },
    booksCompleted: u.booksCompleted,
    points: u.points
  }));

  res.json({ success: true, data: formattedUsers });
});
