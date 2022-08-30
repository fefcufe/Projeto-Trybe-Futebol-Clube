import { Router } from 'express';
import MatchesController from '../controller/MatchesController';
import validateToken from '../middlewares/validateToken';

const router = Router();
const matchesController = new MatchesController();

router.get('/', matchesController.getAllController);
router.post('/', validateToken, matchesController.addMatchController);
router.patch('/:id/finish', validateToken, matchesController.updateMatchController);

export default router;
