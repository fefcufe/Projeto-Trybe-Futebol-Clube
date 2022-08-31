import { Router } from 'express';
// import validateToken from '../middlewares/validateToken';
import LeaderboardController from '../controller/LeaderboardController';

const router = Router();
const leaderboardController = new LeaderboardController();
// nao esquecer de por o validateToken
router.get('/home', leaderboardController.getHomeLeaderboard);

export default router;
