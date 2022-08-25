import { Router } from 'express';
import TeamsController from '../controller/TeamsController';

const router = Router();
const teamsController = new TeamsController();

router.get('/', teamsController.getAllController);
router.get('/:id', teamsController.getTeamByIdController);

export default router;
