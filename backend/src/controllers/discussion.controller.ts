import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { AuthRequest } from '../middleware/auth.middleware';
import { getRouteParam } from '../utils/routeParams';

export const getDiscussions = async (req: Request, res: Response) => {
  try {
    const discussions = await prisma.discussion.findMany({ where: { clubId: getRouteParam(req, 'clubId') }, include: { user: { select: { name: true, avatar: true } }, _count: { select: { comments: true } } } });
    res.json({ success: true, data: discussions });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const createDiscussion = async (req: AuthRequest, res: Response) => {
  try {
    const discussion = await prisma.discussion.create({ data: { ...req.body, userId: req.user.id } });
    res.status(201).json({ success: true, data: discussion });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await prisma.comment.findMany({ where: { discussionId: getRouteParam(req, 'discussionId') }, include: { user: { select: { name: true, avatar: true } } } });
    res.json({ success: true, data: comments });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const addComment = async (req: AuthRequest, res: Response) => {
  try {
    const comment = await prisma.comment.create({ data: { ...req.body, userId: req.user.id } });
    res.status(201).json({ success: true, data: comment });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};
