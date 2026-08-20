import { Router } from 'express';
import * as ctrl from '../controllers/progress.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();
router.get('/:bookId', protect, ctrl.getProgress);
router.put('/:bookId', protect, ctrl.updateProgress);

export default router;
