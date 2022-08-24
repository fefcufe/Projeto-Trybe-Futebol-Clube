import { Router } from 'express';
import UsersController from '../controller/UsersController';

const router = Router();
const loginController = new UsersController();

router.post('/', loginController.userLoginController);

export default router;
