import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Review from '../models/Review';
import Book from '../models/Book';
import { AuthRequest } from '../middleware/auth.middleware';
import { getRouteParam } from '../utils/routeParams';

export const getBookReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find({ bookId: getRouteParam(req, 'bookId') }).populate({ path: 'userId', select: 'id name avatar' });
    res.json({ success: true, data: reviews });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const addReview = async (req: AuthRequest, res: Response) => {
  try {
    const { bookId, rating, comment } = req.body;
    const review = await Review.create({ userId: req.user.id, bookId, rating, comment });
    
    // Update book ratings
    const agg = await Review.aggregate([
      { $match: { bookId: new mongoose.Types.ObjectId(bookId) } },
      { $group: { _id: null, avgRating: { $avg: '$rating' }, count: { $sum: 1 } } }
    ]);
    
    const avgRating = agg.length > 0 ? agg[0].avgRating : 0;
    const count = agg.length > 0 ? agg[0].count : 0;
    
    await Book.findByIdAndUpdate(bookId, { averageRating: avgRating, reviewCount: count });
    
    res.status(201).json({ success: true, data: review });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const updateReview = async (req: AuthRequest, res: Response) => {
  try {
    const id = getRouteParam(req, 'id');
    const existing = await Review.findById(id);
    if (!existing) return res.status(404).json({ success: false, message: 'Review not found' });
    if (existing.userId.toString() !== req.user.id && req.user.role !== 'ADMIN') return res.status(403).json({ success: false, message: 'Only the reviewer can update this review' });
    const review = await Review.findByIdAndUpdate(
      id,
      { rating: req.body.rating, comment: req.body.comment },
      { new: true }
    );
    res.json({ success: true, data: review });
  } catch (error) { res.status(404).json({ success: false, message: 'Review not found' }); }
};

export const deleteReview = async (req: AuthRequest, res: Response) => {
  try {
    const id = getRouteParam(req, 'id');
    const existing = await Review.findById(id);
    if (!existing) return res.status(404).json({ success: false, message: 'Review not found' });
    if (existing.userId.toString() !== req.user.id && req.user.role !== 'ADMIN') return res.status(403).json({ success: false, message: 'Only the reviewer can delete this review' });
    await Review.findByIdAndDelete(id);
    res.json({ success: true, message: 'Review deleted successfully' });
  } catch (error) { res.status(404).json({ success: false, message: 'Review not found' }); }
};
