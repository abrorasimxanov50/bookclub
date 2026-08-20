import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { catchAsync } from '../utils/catchAsync';

// Extend Request type to include user added by auth middleware
interface AuthRequest extends Request {
  user?: any;
}

export const getNotifications = catchAsync(async (req: AuthRequest, res: Response) => {
  const userId = req.user.id;

  const notifications = await prisma.notification.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: 50
  });

  res.json({ success: true, data: notifications });
});

export const markAsRead = catchAsync(async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  
  await prisma.notification.update({
    where: { id },
    data: { isRead: true }
  });

  res.json({ success: true, message: 'Notification marked as read' });
});

export const markAllAsRead = catchAsync(async (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  
  await prisma.notification.updateMany({
    where: { userId, isRead: false },
    data: { isRead: true }
  });

  res.json({ success: true, message: 'All notifications marked as read' });
});
