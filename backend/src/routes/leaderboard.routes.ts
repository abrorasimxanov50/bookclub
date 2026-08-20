import { Router } from 'express';
import { getLeaderboard } from '../controllers/leaderboard.controller';

const router = Router();

router.get('/weekly', getLeaderboard);
router.get('/monthly', getLeaderboard);
router.get('/yearly', getLeaderboard);

export default router;
