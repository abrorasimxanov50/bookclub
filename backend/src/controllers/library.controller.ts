import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { AuthRequest } from '../middleware/auth.middleware';
import { getRouteParam } from '../utils/routeParams';

export const getLibrary = async (req: AuthRequest, res: Response) => {
  try {
    const items = await prisma.libraryItem.findMany({ where: { userId: req.user.id }, include: { book: { include: { author: true } } } });
    res.json({ success: true, data: items });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const addToLibrary = async (req: AuthRequest, res: Response) => {
  try {
    const { bookId, status } = req.body;
    const item = await prisma.libraryItem.upsert({
      where: { userId_bookId: { userId: req.user.id, bookId } },
      update: { status },
      create: { userId: req.user.id, bookId, status }
    });
    res.json({ success: true, data: item });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const removeFromLibrary = async (req: AuthRequest, res: Response) => {
  try {
    await prisma.libraryItem.delete({ where: { id: getRouteParam(req, 'id') } });
    res.json({ success: true, message: 'Removed' });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};
