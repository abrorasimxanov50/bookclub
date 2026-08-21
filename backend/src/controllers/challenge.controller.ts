import { Request, Response } from 'express';
import Challenge from '../models/Challenge';
import ChallengeMember from '../models/ChallengeMember';
import { AuthRequest } from '../middleware/auth.middleware';
import { getRouteParam } from '../utils/routeParams';

export const getChallenges = async (req: Request, res: Response) => {
  try {
    const challenges = await Challenge.aggregate([
      {
        $lookup: {
          from: 'challengemembers',
          localField: '_id',
          foreignField: 'challengeId',
          as: 'members'
        }
      },
      {
        $addFields: {
          '_count': { members: { $size: '$members' } }
        }
      },
      {
        $project: {
          members: 0
        }
      }
    ]);
    res.json({ success: true, data: challenges });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const createChallenge = async (req: AuthRequest, res: Response) => {
  try {
    const challenge = await Challenge.create({ ...req.body, createdById: req.user.id });
    res.status(201).json({ success: true, data: challenge });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const joinChallenge = async (req: AuthRequest, res: Response) => {
  try {
    const member = await ChallengeMember.create({ challengeId: getRouteParam(req, 'id'), userId: req.user.id });
    res.status(201).json({ success: true, data: member });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const updateChallenge = async (req: AuthRequest, res: Response) => {
  try {
    const id = getRouteParam(req, 'id');
    const existing = await Challenge.findById(id);
    if (!existing) return res.status(404).json({ success: false, message: 'Challenge not found' });
    if (existing.createdById.toString() !== req.user.id && req.user.role !== 'ADMIN') return res.status(403).json({ success: false, message: 'Only the creator can update this challenge' });
    const challenge = await Challenge.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ success: true, data: challenge });
  } catch (error) { res.status(404).json({ success: false, message: 'Challenge not found' }); }
};

export const deleteChallenge = async (req: AuthRequest, res: Response) => {
  try {
    const id = getRouteParam(req, 'id');
    const existing = await Challenge.findById(id);
    if (!existing) return res.status(404).json({ success: false, message: 'Challenge not found' });
    if (existing.createdById.toString() !== req.user.id && req.user.role !== 'ADMIN') return res.status(403).json({ success: false, message: 'Only the creator can delete this challenge' });
    await Challenge.findByIdAndDelete(id);
    res.json({ success: true, message: 'Challenge deleted successfully' });
  } catch (error) { res.status(404).json({ success: false, message: 'Challenge not found' }); }
};
