import { Request, Response } from 'express';
import Notification from '../models/Notification';
import { catchAsync } from '../utils/catchAsync';
import { getRouteParam } from '../utils/routeParams';

// Extend Request type to include user added by auth middleware
interface AuthRequest extends Request {
  user?: any;
}

export const getNotifications = catchAsync(async (req: AuthRequest, res: Response) => {
  const userId = req.user.id;

  const notifications = await Notification.find({ userId })
    .sort({ createdAt: -1 })
    .limit(50);

  res.json({ success: true, data: notifications });
});

export const markAsRead = catchAsync(async (req: AuthRequest, res: Response) => {
  const id = getRouteParam(req, 'id');
  
  await Notification.findByIdAndUpdate(id, { isRead: true });

  res.json({ success: true, message: 'Notification marked as read' });
});

export const markAllAsRead = catchAsync(async (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  
  await Notification.updateMany(
    { userId, isRead: false },
    { isRead: true }
  );

  res.json({ success: true, message: 'All notifications marked as read' });
});
