import { Router } from 'express';
import * as ctrl from '../controllers/challenge.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();
router.get('/', ctrl.getChallenges);
router.post('/', protect, ctrl.createChallenge);
router.post('/:id/join', protect, ctrl.joinChallenge);

export default router;
