import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { AuthRequest } from '../middleware/auth.middleware';

export const getProgress = async (req: AuthRequest, res: Response) => {
  try {
    const progress = await prisma.readingProgress.findUnique({ where: { userId_bookId: { userId: req.user.id, bookId: req.params.bookId } } });
    res.json({ success: true, data: progress });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const updateProgress = async (req: AuthRequest, res: Response) => {
  try {
    const { currentPage, totalPages } = req.body;
    const progressPercent = (currentPage / totalPages) * 100;
    const progress = await prisma.readingProgress.upsert({
      where: { userId_bookId: { userId: req.user.id, bookId: req.params.bookId } },
      update: { currentPage, totalPages, progressPercent, lastReadAt: new Date() },
      create: { userId: req.user.id, bookId: req.params.bookId, currentPage, totalPages, progressPercent, lastReadAt: new Date() }
    });
    res.json({ success: true, data: progress });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};
