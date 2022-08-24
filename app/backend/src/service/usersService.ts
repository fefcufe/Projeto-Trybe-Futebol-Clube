import { StatusCodes } from 'http-status-codes';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import User from '../database/models/user';

const secret = process.env.JWT_SECRET || 'jwt_secret';
const jwtConfig: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export default class UsersService {
  public userLogin = async (email: string, password: string) => {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return {
        code: StatusCodes.UNAUTHORIZED,
        message: 'Email inválido!',
      };
    } const passwordCheck = await bcrypt.compare(password, user.password); // retorna true/false

    if (!passwordCheck) {
      return {
        code: StatusCodes.UNAUTHORIZED,
        message: 'Senha inválida',
      };
    }
    const token = jwt.sign({ data: email }, secret, jwtConfig);
    return { code: StatusCodes.OK,
      message: token };
  };
}