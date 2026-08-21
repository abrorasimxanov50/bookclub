import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware';
import { getRouteParam } from '../utils/routeParams';
import Discussion from '../models/Discussion';
import Comment from '../models/Comment';

export const getDiscussions = async (req: Request, res: Response) => {
  try {
    const discussions = await Discussion.find({ clubId: getRouteParam(req, 'clubId') }).populate('userId', 'name avatar');
    const data = await Promise.all(discussions.map(async (d) => {
      const comments = await Comment.countDocuments({ discussionId: d._id });
      const obj = d.toObject();
      return { ...obj, user: obj.userId, userId: obj.userId?._id || obj.userId, _count: { comments }, id: d._id.toString() };
    }));
    res.json({ success: true, data });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const createDiscussion = async (req: AuthRequest, res: Response) => {
  try {
    const discussion = await Discussion.create({ ...req.body, userId: req.user.id });
    res.status(201).json({ success: true, data: { ...discussion.toObject(), id: discussion._id.toString() } });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.find({ discussionId: getRouteParam(req, 'discussionId') }).populate('userId', 'name avatar');
    const data = comments.map(c => {
      const obj = c.toObject();
      return { ...obj, user: obj.userId, userId: obj.userId?._id || obj.userId, id: c._id.toString() };
    });
    res.json({ success: true, data });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const addComment = async (req: AuthRequest, res: Response) => {
  try {
    const comment = await Comment.create({ ...req.body, userId: req.user.id });
    res.status(201).json({ success: true, data: { ...comment.toObject(), id: comment._id.toString() } });
  } catch (error) { res.status(500).json({ success: false, message: 'Server error' }); }
};

export const updateDiscussion = async (req: AuthRequest, res: Response) => {
  try {
    const id = getRouteParam(req, 'id');
    const existing = await Discussion.findById(id);
    if (!existing) return res.status(404).json({ success: false, message: 'Discussion not found' });
    if (existing.userId.toString() !== req.user.id && req.user.role !== 'ADMIN') return res.status(403).json({ success: false, message: 'Only the author can update this discussion' });
    const discussion = await Discussion.findByIdAndUpdate(id, { title: req.body.title, content: req.body.content }, { new: true });
    res.json({ success: true, data: { ...discussion?.toObject(), id: discussion?._id.toString() } });
  } catch (error) { res.status(404).json({ success: false, message: 'Discussion not found' }); }
};

export const deleteDiscussion = async (req: AuthRequest, res: Response) => {
  try {
    const id = getRouteParam(req, 'id');
    const existing = await Discussion.findById(id);
    if (!existing) return res.status(404).json({ success: false, message: 'Discussion not found' });
    if (existing.userId.toString() !== req.user.id && req.user.role !== 'ADMIN') return res.status(403).json({ success: false, message: 'Only the author can delete this discussion' });
    await Discussion.findByIdAndDelete(id);
    res.json({ success: true, message: 'Discussion deleted successfully' });
  } catch (error) { res.status(404).json({ success: false, message: 'Discussion not found' }); }
};
