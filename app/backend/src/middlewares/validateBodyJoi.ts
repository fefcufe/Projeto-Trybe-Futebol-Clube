import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as Joi from 'joi';

// referencia: https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages
const characterDTO = Joi.object({
  email: Joi.string().email().required().empty(),
  password: Joi.string().required().empty(),
}).messages({
  'any.required': 'All fields must be filled',
  'string.empty': 'All fields must be filled',
});

type Joii = {
  message: string,
};
const validateLogin = (req: Request, res: Response, next: NextFunction): void | Response<Joii> => {
  const { error } = characterDTO.validate(req.body);

  if (!error) {
    return next();
  }

  const { message } = error.details[0];
  return res.status(StatusCodes.BAD_REQUEST).json({ message });
};

export default validateLogin;
