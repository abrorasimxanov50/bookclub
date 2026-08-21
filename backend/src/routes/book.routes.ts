import { Router } from 'express';
import { getBooks, getBookByIdOrSlug, createBook, updateBook, deleteBook } from '../controllers/book.controller';
import { protect, restrictTo } from '../middleware/auth.middleware';

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBookByIdOrSlug);
router.post('/', protect, restrictTo('ADMIN'), createBook);
router.put('/:id', protect, restrictTo('ADMIN'), updateBook);
router.delete('/:id', protect, restrictTo('ADMIN'), deleteBook);

export default router;
