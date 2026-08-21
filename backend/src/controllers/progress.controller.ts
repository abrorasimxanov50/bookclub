import { Request, Response } from 'express';
import ReadingProgress from '../models/ReadingProgress';
import { AuthRequest } from '../middleware/auth.middleware';
import { getRouteParam } from '../utils/routeParams';

export const getProgress = async (req: AuthRequest, res: Response) => {
  try {
    const bookId = getRouteParam(req, 'bookId');
    const progress = await ReadingProgress.findOne({ userId: req.user.id, bookId });
    res.json({ success: true, data: progress });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const updateProgress = async (req: AuthRequest, res: Response) => {
  try {
    const { currentPage, totalPages } = req.body;
    const progressPercent = (currentPage / totalPages) * 100;
    const bookId = getRouteParam(req, 'bookId');
    const progress = await ReadingProgress.findOneAndUpdate(
      { userId: req.user.id, bookId },
      { userId: req.user.id, bookId, currentPage, totalPages, progressPercent, lastReadAt: new Date() },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json({ success: true, data: progress });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};
