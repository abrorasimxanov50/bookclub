import { Request, Response } from 'express';
import Book from '../models/Book';
import Challenge from '../models/Challenge';
import Club from '../models/Club';
import Activity from '../models/Activity';
import { catchAsync } from '../utils/catchAsync';

export const getHomeData = catchAsync(async (req: Request, res: Response) => {
  // Fetch multiple dashboard segments in parallel
  const [
    trendingBooks,
    popularBooks,
    recommendedBooks,
    activeChallenges,
    popularClubsData,
    recentActivity
  ] = await Promise.all([
    Book.find().sort({ reviewCount: -1 }).limit(10).populate('authorId'),
    Book.find().sort({ ratingCount: -1 }).limit(10).populate('authorId'),
    Book.find().sort({ averageRating: -1 }).limit(10).populate('authorId'),
    Challenge.find().sort({ createdAt: -1 }).limit(5),
    Club.aggregate([
      { $lookup: { from: 'clubmembers', localField: '_id', foreignField: 'clubId', as: 'members' } },
      { $addFields: { membersCount: { $size: '$members' } } },
      { $sort: { membersCount: -1 } },
      { $limit: 5 },
      { $project: { members: 0 } }
    ]),
    Activity.find().sort({ createdAt: -1 }).limit(10).populate('userId', 'name avatar')
  ]);

  res.json({
    success: true,
    data: {
      trendingBooks,
      popularBooks,
      recommendedBooks,
      activeChallenges,
      popularClubs: popularClubsData,
      recentActivity
    }
  });
});
