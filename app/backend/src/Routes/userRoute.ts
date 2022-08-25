import { Router } from 'express';
import UsersController from '../controller/UsersController';
import validateLogin from '../middlewares/validateBodyJoi';

const router = Router();
const loginController = new UsersController();

router.post('/', validateLogin, loginController.userLoginController);

export default router;
