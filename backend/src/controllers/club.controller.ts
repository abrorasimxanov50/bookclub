import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { AuthRequest } from '../middleware/auth.middleware';
import { getRouteParam } from '../utils/routeParams';

export const getClubs = async (req: Request, res: Response) => {
  try {
    const clubs = await prisma.club.findMany({ include: { _count: { select: { members: true, discussions: true } } } });
    res.json({ success: true, data: clubs });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const createClub = async (req: AuthRequest, res: Response) => {
  try {
    const club = await prisma.club.create({ data: { ...req.body, createdById: req.user.id } });
    await prisma.clubMember.create({ data: { clubId: club.id, userId: req.user.id, role: 'OWNER' } });
    res.status(201).json({ success: true, data: club });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const joinClub = async (req: AuthRequest, res: Response) => {
  try {
    const member = await prisma.clubMember.create({ data: { clubId: getRouteParam(req, 'id'), userId: req.user.id } });
    res.status(201).json({ success: true, data: member });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};
