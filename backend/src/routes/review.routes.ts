import { Router } from 'express';
import * as ctrl from '../controllers/review.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();
router.get('/book/:bookId', ctrl.getBookReviews);
router.post('/', protect, ctrl.addReview);

export default router;
