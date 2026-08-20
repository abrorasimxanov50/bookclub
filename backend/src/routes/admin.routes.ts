import { Router } from 'express';
import { getDashboardStats, getUsers, deleteUser } from '../controllers/admin.controller';
import { protect, restrictTo } from '../middleware/auth.middleware';

const router = Router();

// Protect all admin routes
router.use(protect);
router.use(restrictTo('ADMIN'));

router.get('/dashboard', getDashboardStats);
router.get('/users', getUsers);
router.delete('/users/:id', deleteUser);

// In a real app we'd add admin routes for books, reviews, challenges, clubs here
export default router;
