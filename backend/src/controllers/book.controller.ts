import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { getRouteParam } from '../utils/routeParams';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const { search, category, author } = req.query;
    const where: any = {};
    if (search) where.title = { contains: String(search), mode: 'insensitive' };
    if (category) where.categoryId = String(category);
    if (author) where.authorId = String(author);

    const books = await prisma.book.findMany({ where, include: { author: true, category: true } });
    res.json({ success: true, data: books });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const getBookByIdOrSlug = async (req: Request, res: Response) => {
  try {
    const bookParam = getRouteParam(req, 'id');
    const book = await prisma.book.findFirst({
      where: {
        OR: [
          { id: bookParam },
          { slug: bookParam }
        ]
      },
      include: { author: true, category: true, reviews: { include: { user: true } } }
    });
    if (!book) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: book });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await prisma.book.create({ data: req.body });
    res.status(201).json({ success: true, data: book });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};
