import { Router } from 'express';
import * as ctrl from '../controllers/club.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();
router.get('/', ctrl.getClubs);
router.post('/', protect, ctrl.createClub);
router.post('/:id/join', protect, ctrl.joinClub);

export default router;
