import 'reflect-metadata';
import '@shared/container';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import { AppError } from '@shared/errors/AppError';
import { routes } from '@shared/routes';
import { AppDataSource } from '@shared/typeorm';

import swaggerSetup from './swagger.json';

const app = express();
const port = process.env.PORT;

AppDataSource.initialize();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSetup));
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'financiacio api' });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('*---*', req.method, req.url);
  next();
});

app.use(routes);

// Error handling
app.use((error: Error, req: Request, res: Response) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: `Internal server error - ${error.message}`,
  });
});

app.listen(port, () => {
  console.log(`---- Server running on port ${port} ----`);
});
