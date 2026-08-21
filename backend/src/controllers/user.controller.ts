import { Request, Response } from 'express';
import User from '../models/User';
import UserFollow from '../models/UserFollow';
import LibraryItem from '../models/LibraryItem';
import Review from '../models/Review';
import { catchAsync } from '../utils/catchAsync';
import { AuthRequest } from '../middleware/auth.middleware';
import { getRouteParam } from '../utils/routeParams';

export const getProfile = catchAsync(async (req: Request, res: Response) => {
  const username = getRouteParam(req, 'username');

  const user = await User.findOne({ username }).select('id name username avatar bio createdAt');

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const [followersCount, followingCount, libraryItemsCount, reviewsCount] = await Promise.all([
    UserFollow.countDocuments({ followingId: user._id }),
    UserFollow.countDocuments({ followerId: user._id }),
    LibraryItem.countDocuments({ userId: user._id }),
    Review.countDocuments({ userId: user._id }),
  ]);

  const userObj = user.toObject();
  userObj._count = {
    followers: followersCount,
    following: followingCount,
    libraryItems: libraryItemsCount,
    reviews: reviewsCount,
  };

  res.json(userObj);
});

export const updateProfile = catchAsync(async (req: AuthRequest, res: Response) => {
  const { name, username, bio, avatar } = req.body;
  const userId = req.user.id;

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      ...(name && { name }),
      ...(username && { username }),
      ...(bio !== undefined && { bio }),
      ...(avatar !== undefined && { avatar }),
    },
    { new: true, select: 'id name username email role avatar bio createdAt' }
  );

  res.json({ success: true, data: updatedUser });
});

export const followUser = catchAsync(async (req: AuthRequest, res: Response) => {
  const id = getRouteParam(req, 'id');
  const currentUserId = req.user.id;

  if (id === currentUserId) {
    return res.status(400).json({ message: 'You cannot follow yourself' });
  }

  const targetUser = await User.findById(id);

  if (!targetUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  const existingFollow = await UserFollow.findOne({
    followerId: currentUserId,
    followingId: id,
  });

  if (existingFollow) {
    return res.status(400).json({ message: 'Already following this user' });
  }

  await UserFollow.create({
    followerId: currentUserId,
    followingId: id,
  });

  res.json({ message: 'User followed successfully' });
});

export const unfollowUser = catchAsync(async (req: AuthRequest, res: Response) => {
  const id = getRouteParam(req, 'id');
  const currentUserId = req.user.id;

  const existingFollow = await UserFollow.findOne({
    followerId: currentUserId,
    followingId: id,
  });

  if (!existingFollow) {
    return res.status(400).json({ message: 'Not following this user' });
  }

  await UserFollow.findOneAndDelete({
    followerId: currentUserId,
    followingId: id,
  });

  res.json({ message: 'User unfollowed successfully' });
});
