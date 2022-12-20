import { NextFunction, Request, Response } from 'express';

export function routeLogger(req: Request, res: Response, next: NextFunction) {
  console.log('*---*', req.method, req.url);
  next();
}
