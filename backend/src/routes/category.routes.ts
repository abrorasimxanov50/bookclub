import { Router } from 'express';
import * as ctrl from '../controllers/category.controller';
import { protect } from '../middleware/auth.middleware';
import { admin } from '../middleware/admin.middleware';

const router = Router();
router.get('/', ctrl.getCategories);
router.get('/:slug', ctrl.getCategoryBySlug);
router.post('/', protect, admin, ctrl.createCategory);
router.put('/:id', protect, admin, ctrl.updateCategory);
router.delete('/:id', protect, admin, ctrl.deleteCategory);

export default router;
