import { Router } from 'express';
import validateToken from '../middlewares/validateToken';
import UsersController from '../controller/UsersController';
import validateLogin from '../middlewares/validateBodyJoi';

const router = Router();
const loginController = new UsersController();

router.post('/', validateLogin, loginController.userLoginController);
router.get('/validate', validateToken, loginController.userLoginRole); // ajustar

export default router;
