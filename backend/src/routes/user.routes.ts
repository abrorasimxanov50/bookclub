import { Router } from 'express';
import { getProfile, updateProfile, followUser, unfollowUser } from '../controllers/user.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

router.put('/profile', protect, updateProfile);
router.get('/:username', getProfile);
router.post('/:id/follow', protect, followUser);
router.delete('/:id/follow', protect, unfollowUser);

export default router;
