import { Request, Response } from 'express';
import 'express-async-errors';

import { AppError } from '@shared/errors/AppError';

export function exceptionHandler(error: Error, req: Request, res: Response) {
  // console.log(98210, error);
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: `Internal server error - ${error.message}`,
  });
}
