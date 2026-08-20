import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { AuthRequest } from '../middleware/auth.middleware';

export const getChallenges = async (req: Request, res: Response) => {
  try {
    const challenges = await prisma.challenge.findMany({ include: { _count: { select: { members: true } } } });
    res.json({ success: true, data: challenges });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const createChallenge = async (req: AuthRequest, res: Response) => {
  try {
    const challenge = await prisma.challenge.create({ data: { ...req.body, createdById: req.user.id } });
    res.status(201).json({ success: true, data: challenge });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const joinChallenge = async (req: AuthRequest, res: Response) => {
  try {
    const member = await prisma.challengeMember.create({ data: { challengeId: req.params.id, userId: req.user.id } });
    res.status(201).json({ success: true, data: member });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};
