import { Request, Response } from 'express';
import UsersService from '../service/usersService';

export default class UsersController {
  constructor(private userLogin = new UsersService()) {}

  public userLoginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { code, message } = await this.userLogin.userLogin(email, password);
    if (code === 200) {
      return res.status(code).json({ token: message });
    }
    return res.status(code).json({ message });
  };
}
