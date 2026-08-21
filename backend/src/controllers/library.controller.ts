import { Request, Response } from 'express';
import LibraryItem from '../models/LibraryItem';
import { AuthRequest } from '../middleware/auth.middleware';
import { getRouteParam } from '../utils/routeParams';

export const getLibrary = async (req: AuthRequest, res: Response) => {
  try {
    const items = await LibraryItem.find({ userId: req.user.id }).populate({ path: 'bookId', populate: { path: 'authorId' } });
    res.json({ success: true, data: items });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const addToLibrary = async (req: AuthRequest, res: Response) => {
  try {
    const { bookId, status } = req.body;
    const item = await LibraryItem.findOneAndUpdate(
      { userId: req.user.id, bookId },
      { userId: req.user.id, bookId, status },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json({ success: true, data: item });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const removeFromLibrary = async (req: AuthRequest, res: Response) => {
  try {
    await LibraryItem.findByIdAndDelete(getRouteParam(req, 'id'));
    res.json({ success: true, message: 'Removed' });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};
