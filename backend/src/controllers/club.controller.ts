import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware';
import { getRouteParam } from '../utils/routeParams';
import Club from '../models/Club';
import ClubMember from '../models/ClubMember';
import Discussion from '../models/Discussion';

export const getClubs = async (req: Request, res: Response) => {
  try {
    const clubs = await Club.find();
    const data = await Promise.all(clubs.map(async (club) => {
      const members = await ClubMember.countDocuments({ clubId: club._id });
      const discussions = await Discussion.countDocuments({ clubId: club._id });
      return { ...club.toObject(), _count: { members, discussions }, id: club._id.toString() };
    }));
    res.json({ success: true, data });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const createClub = async (req: AuthRequest, res: Response) => {
  try {
    const club = await Club.create({ ...req.body, createdById: req.user.id });
    await ClubMember.create({ clubId: club._id, userId: req.user.id, role: 'OWNER' });
    res.status(201).json({ success: true, data: { ...club.toObject(), id: club._id.toString() } });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const joinClub = async (req: AuthRequest, res: Response) => {
  try {
    const member = await ClubMember.create({ clubId: getRouteParam(req, 'id'), userId: req.user.id });
    res.status(201).json({ success: true, data: { ...member.toObject(), id: member._id.toString() } });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const updateClub = async (req: AuthRequest, res: Response) => {
  try {
    const id = getRouteParam(req, 'id');
    const existing = await Club.findById(id);
    if (!existing) return res.status(404).json({ success: false, message: 'Club not found' });
    if (existing.createdById.toString() !== req.user.id && req.user.role !== 'ADMIN') return res.status(403).json({ success: false, message: 'Only the creator can update this club' });
    const club = await Club.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ success: true, data: { ...club?.toObject(), id: club?._id.toString() } });
  } catch (error) { res.status(404).json({ success: false, message: 'Club not found' }); }
};

export const deleteClub = async (req: AuthRequest, res: Response) => {
  try {
    const id = getRouteParam(req, 'id');
    const existing = await Club.findById(id);
    if (!existing) return res.status(404).json({ success: false, message: 'Club not found' });
    if (existing.createdById.toString() !== req.user.id && req.user.role !== 'ADMIN') return res.status(403).json({ success: false, message: 'Only the creator can delete this club' });
    await Club.findByIdAndDelete(id);
    res.json({ success: true, message: 'Club deleted successfully' });
  } catch (error) { res.status(404).json({ success: false, message: 'Club not found' }); }
};
