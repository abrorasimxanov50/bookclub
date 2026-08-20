import { Router } from 'express';
import * as ctrl from '../controllers/category.controller';
import { protect } from '../middleware/auth.middleware';
import { admin } from '../middleware/admin.middleware';

const router = Router();
router.get('/', ctrl.getCategories);
router.get('/:slug', ctrl.getCategoryBySlug);
router.post('/', protect, admin, ctrl.createCategory);

export default router;
