import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '@modules/Accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';

export async function checkAuthenticationToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new AppError('Missing token', 401);
  }

  const [, token] = authorization.split(' ');

  try {
    const { sub: userId } = verify(token, process.env.JWT_SECRET);
    const usersRepository = new UsersRepository();

    if (typeof userId === 'string') {
      const user = await usersRepository.findById(`${userId}`);
      if (!user) {
        throw new AppError('User does not exists', 401);
      }

      if (req.body) {
        req.body.user = user;
      }

      req.user = user;
    }
  } catch {
    throw new AppError('Invalid token', 401);
  }

  next();
}
