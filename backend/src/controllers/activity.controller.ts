import { Request, Response } from 'express';
import Activity from '../models/Activity';
import { catchAsync } from '../utils/catchAsync';

export const getActivityFeed = catchAsync(async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 20;
  const skip = (page - 1) * limit;

  // In a real app, this would get activities from followed users. 
  // For now, returning global activities.
  
  const [total, activities] = await Promise.all([
    Activity.countDocuments(),
    Activity.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate({
        path: 'userId',
        select: 'id name username avatar'
      })
  ]);

  res.json({
    success: true,
    data: activities,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  });
});
