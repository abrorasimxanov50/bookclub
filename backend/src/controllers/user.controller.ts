import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { catchAsync } from '../utils/catchAsync';
import { AuthRequest } from '../middleware/auth.middleware';

const prisma = new PrismaClient();

export const getProfile = catchAsync(async (req: Request, res: Response) => {
  const { username } = req.params;

  const user = await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      name: true,
      username: true,
      avatar: true,
      bio: true,
      createdAt: true,
      _count: {
        select: {
          followers: true,
          following: true,
          libraryItems: true,
          reviews: true,
        }
      }
    }
  });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});

export const followUser = catchAsync(async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const currentUserId = req.user.id;

  if (id === currentUserId) {
    return res.status(400).json({ message: 'You cannot follow yourself' });
  }

  const targetUser = await prisma.user.findUnique({
    where: { id }
  });

  if (!targetUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  const existingFollow = await prisma.userFollow.findUnique({
    where: {
      followerId_followingId: {
        followerId: currentUserId,
        followingId: id,
      }
    }
  });

  if (existingFollow) {
    return res.status(400).json({ message: 'Already following this user' });
  }

  await prisma.userFollow.create({
    data: {
      followerId: currentUserId,
      followingId: id,
    }
  });

  res.json({ message: 'User followed successfully' });
});

export const unfollowUser = catchAsync(async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const currentUserId = req.user.id;

  const existingFollow = await prisma.userFollow.findUnique({
    where: {
      followerId_followingId: {
        followerId: currentUserId,
        followingId: id,
      }
    }
  });

  if (!existingFollow) {
    return res.status(400).json({ message: 'Not following this user' });
  }

  await prisma.userFollow.delete({
    where: {
      followerId_followingId: {
        followerId: currentUserId,
        followingId: id,
      }
    }
  });

  res.json({ message: 'User unfollowed successfully' });
});
