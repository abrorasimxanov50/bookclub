import { Request, Response } from 'express';
import { prisma } from '../config/database';

export const getAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await prisma.author.findMany({ include: { _count: { select: { books: true } } } });
    res.json({ success: true, data: authors });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const getAuthorBySlug = async (req: Request, res: Response) => {
  try {
    const author = await prisma.author.findUnique({ where: { slug: req.params.slug }, include: { books: true } });
    if (!author) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: author });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const author = await prisma.author.create({ data: req.body });
    res.status(201).json({ success: true, data: author });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};
