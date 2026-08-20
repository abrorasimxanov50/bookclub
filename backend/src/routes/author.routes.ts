import { Router } from 'express';
import * as ctrl from '../controllers/author.controller';
import { protect } from '../middleware/auth.middleware';
import { admin } from '../middleware/admin.middleware';

const router = Router();
router.get('/', ctrl.getAuthors);
router.get('/:slug', ctrl.getAuthorBySlug);
router.post('/', protect, admin, ctrl.createAuthor);

export default router;
