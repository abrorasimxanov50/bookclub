import { Request, Response } from 'express';
import Book from '../models/Book';
import Author from '../models/Author';
import Category from '../models/Category';
import User from '../models/User';
import Club from '../models/Club';
import { catchAsync } from '../utils/catchAsync';

export const globalSearch = catchAsync(async (req: Request, res: Response) => {
  const q = req.query.q as string;
  if (!q) {
    return res.status(400).json({ success: false, message: 'Query parameter q is required' });
  }

  const searchRegex = new RegExp(q, 'i');

  const [books, authors, categories, users, clubs] = await Promise.all([
    Book.find({
      $or: [
        { title: searchRegex },
        { description: searchRegex }
      ]
    }).limit(5),
    Author.find({ name: searchRegex }).limit(5),
    Category.find({ name: searchRegex }).limit(5),
    User.find({
      $or: [
        { name: searchRegex },
        { username: searchRegex }
      ]
    }).select('id name username avatar').limit(5),
    Club.find({ name: searchRegex }).limit(5)
  ]);

  res.json({
    success: true,
    data: {
      books,
      authors,
      categories,
      users,
      clubs
    }
  });
});
