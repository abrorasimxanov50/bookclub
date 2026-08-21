import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Book from '../models/Book';
import { getRouteParam } from '../utils/routeParams';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const { search, category, author } = req.query;
    const where: any = {};
    if (search) where.title = { $regex: String(search), $options: 'i' };
    if (category) where.categoryId = String(category);
    if (author) where.authorId = String(author);

    const books = await Book.find(where)
      .populate('authorId')
      .populate('categoryId')
      .lean();
      
    const mappedBooks = books.map((book: any) => ({
      ...book,
      id: book._id,
      author: book.authorId,
      category: book.categoryId,
    }));

    res.json({ success: true, data: mappedBooks });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const getBookByIdOrSlug = async (req: Request, res: Response) => {
  try {
    const bookParam = getRouteParam(req, 'id');
    const isObjectId = mongoose.Types.ObjectId.isValid(bookParam);
    const query = isObjectId
      ? { $or: [{ _id: bookParam }, { slug: bookParam }] }
      : { slug: bookParam };

    const book = await Book.findOne(query)
      .populate('authorId')
      .populate('categoryId')
      .lean();
      
    if (!book) return res.status(404).json({ success: false, message: 'Not found' });
    
    const mappedBook = {
      ...book,
      id: book._id,
      author: book.authorId,
      category: book.categoryId,
    };

    res.json({ success: true, data: mappedBook });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.create(req.body);
    const mappedBook = { ...book.toJSON(), id: book._id };
    res.status(201).json({ success: true, data: mappedBook });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndUpdate(getRouteParam(req, 'id'), req.body, { new: true })
      .populate('authorId')
      .populate('categoryId')
      .lean();
    if (!book) return res.status(404).json({ success: false, message: 'Book not found' });
    
    const mappedBook = {
      ...book,
      id: book._id,
      author: book.authorId,
      category: book.categoryId,
    };
    res.json({ success: true, data: mappedBook });
  } catch (error) { res.status(404).json({ success: false, message: 'Book not found' }); }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndDelete(getRouteParam(req, 'id'));
    if (!book) return res.status(404).json({ success: false, message: 'Book not found' });
    res.json({ success: true, message: 'Book deleted successfully' });
  } catch (error) { res.status(404).json({ success: false, message: 'Book not found' }); }
};
