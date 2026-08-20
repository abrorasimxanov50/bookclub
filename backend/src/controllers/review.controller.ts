import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { AuthRequest } from '../middleware/auth.middleware';

export const getBookReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await prisma.review.findMany({ where: { bookId: req.params.bookId }, include: { user: { select: { id: true, name: true, avatar: true } } } });
    res.json({ success: true, data: reviews });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const addReview = async (req: AuthRequest, res: Response) => {
  try {
    const { bookId, rating, comment } = req.body;
    const review = await prisma.review.create({ data: { userId: req.user.id, bookId, rating, comment } });
    
    // Update book ratings
    const agg = await prisma.review.aggregate({ where: { bookId }, _avg: { rating: true }, _count: { rating: true } });
    await prisma.book.update({ where: { id: bookId }, data: { averageRating: agg._avg.rating || 0, reviewCount: agg._count.rating } });
    
    res.status(201).json({ success: true, data: review });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};
