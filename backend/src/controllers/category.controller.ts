import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { getRouteParam } from '../utils/routeParams';

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({ include: { _count: { select: { books: true } } } });
    res.json({ success: true, data: categories });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const getCategoryBySlug = async (req: Request, res: Response) => {
  try {
    const category = await prisma.category.findUnique({ where: { slug: getRouteParam(req, 'slug') }, include: { books: true } });
    if (!category) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: category });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await prisma.category.create({ data: req.body });
    res.status(201).json({ success: true, data: category });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};
