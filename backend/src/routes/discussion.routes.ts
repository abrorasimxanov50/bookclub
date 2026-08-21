import { Router } from 'express';
import * as ctrl from '../controllers/discussion.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();
router.get('/club/:clubId', ctrl.getDiscussions);
router.post('/', protect, ctrl.createDiscussion);
router.get('/:discussionId/comments', ctrl.getComments);
router.post('/:discussionId/comments', protect, ctrl.addComment);
router.put('/:id', protect, ctrl.updateDiscussion);
router.delete('/:id', protect, ctrl.deleteDiscussion);

export default router;
