import { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const httpErrorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  const { name, message, details } = err;

  switch (name) {
    case 'ValidationError':
      res.status(StatusCodes.BAD_REQUEST).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(StatusCodes.NOT_FOUND).json({ message });
      break;
    case 'ConflictError':
      res.status(StatusCodes.CONFLICT).json({ message });
      break;
    default:
      console.error(err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
  }

  next();
};

export default httpErrorMiddleware;
