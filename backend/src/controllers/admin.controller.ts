import { Request, Response } from 'express';
import User from '../models/User';
import Book from '../models/Book';
import Author from '../models/Author';
import Review from '../models/Review';
import Challenge from '../models/Challenge';
import Club from '../models/Club';
import { catchAsync } from '../utils/catchAsync';
import { getRouteParam } from '../utils/routeParams';

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
    User.countDocuments(),
    Book.countDocuments(),
    Author.countDocuments(),
    Review.countDocuments(),
    Challenge.countDocuments(),
    Club.countDocuments(),
    User.countDocuments({
      lastActive: {
        $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // active in last 30 days
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
  const users = await User.find()
    .select('id name username email role createdAt lastActive')
    .sort({ createdAt: -1 });
  
  res.json({ success: true, data: users });
});

export const deleteUser = catchAsync(async (req: Request, res: Response) => {
  await User.findByIdAndDelete(getRouteParam(req, 'id'));
  res.json({ success: true, message: 'User deleted successfully' });
});
