import { Router } from 'express';
import { getBooks, getBookByIdOrSlug, createBook } from '../controllers/book.controller';
import { protect, restrictTo } from '../middleware/auth.middleware';

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBookByIdOrSlug);
router.post('/', protect, restrictTo('ADMIN'), createBook);

export default router;
