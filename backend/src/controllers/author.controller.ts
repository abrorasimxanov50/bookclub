import { Request, Response } from 'express';
import Author from '../models/Author';
import Book from '../models/Book';
import { getRouteParam } from '../utils/routeParams';

export const getAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await Author.aggregate([
      {
        $lookup: {
          from: 'books',
          localField: '_id',
          foreignField: 'authorId',
          as: 'books'
        }
      },
      {
        $addFields: {
          _count: { books: { $size: "$books" } },
          id: "$_id"
        }
      },
      {
        $project: { books: 0 }
      }
    ]);
    res.json({ success: true, data: authors });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const getAuthorBySlug = async (req: Request, res: Response) => {
  try {
    const author = await Author.findOne({ slug: getRouteParam(req, 'slug') }).lean();
    if (!author) return res.status(404).json({ success: false, message: 'Not found' });
    
    const books = await Book.find({ authorId: author._id }).lean();
    const mappedBooks = books.map((b: any) => ({ ...b, id: b._id }));
    
    res.json({ success: true, data: { ...author, id: author._id, books: mappedBooks } });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json({ success: true, data: { ...author.toJSON(), id: author._id } });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.findByIdAndUpdate(getRouteParam(req, 'id'), req.body, { new: true }).lean();
    if (!author) return res.status(404).json({ success: false, message: 'Author not found' });
    res.json({ success: true, data: { ...author, id: author._id } });
  } catch (error) { res.status(404).json({ success: false, message: 'Author not found' }); }
};

export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.findByIdAndDelete(getRouteParam(req, 'id'));
    if (!author) return res.status(404).json({ success: false, message: 'Author not found' });
    res.json({ success: true, message: 'Author deleted successfully' });
  } catch (error) { res.status(404).json({ success: false, message: 'Author not found' }); }
};
