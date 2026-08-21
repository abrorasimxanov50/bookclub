import { Request, Response } from 'express';
import Category from '../models/Category';
import Book from '../models/Book';
import { getRouteParam } from '../utils/routeParams';

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.aggregate([
      {
        $lookup: {
          from: 'books',
          localField: '_id',
          foreignField: 'categoryId',
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
    res.json({ success: true, data: categories });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const getCategoryBySlug = async (req: Request, res: Response) => {
  try {
    const category = await Category.findOne({ slug: getRouteParam(req, 'slug') }).lean();
    if (!category) return res.status(404).json({ success: false, message: 'Not found' });
    
    const books = await Book.find({ categoryId: category._id }).lean();
    const mappedBooks = books.map((b: any) => ({ ...b, id: b._id }));
    
    res.json({ success: true, data: { ...category, id: category._id, books: mappedBooks } });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({ success: true, data: { ...category.toJSON(), id: category._id } });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByIdAndUpdate(getRouteParam(req, 'id'), req.body, { new: true }).lean();
    if (!category) return res.status(404).json({ success: false, message: 'Category not found' });
    res.json({ success: true, data: { ...category, id: category._id } });
  } catch (error) { res.status(404).json({ success: false, message: 'Category not found' }); }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByIdAndDelete(getRouteParam(req, 'id'));
    if (!category) return res.status(404).json({ success: false, message: 'Category not found' });
    res.json({ success: true, message: 'Category deleted successfully' });
  } catch (error) { res.status(404).json({ success: false, message: 'Category not found' }); }
};
