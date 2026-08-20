import { Router } from 'express';
import * as ctrl from '../controllers/library.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();
router.get('/', protect, ctrl.getLibrary);
router.post('/', protect, ctrl.addToLibrary);
router.delete('/:id', protect, ctrl.removeFromLibrary);

export default router;
