import 'reflect-metadata';
import 'express-async-errors';
import '@shared/container';

import express, { NextFunction, Request, Response } from 'express';
import { AppDataSource } from 'src/database';
import swaggerUi from 'swagger-ui-express';

import { AppError } from './errors/AppError';
import { routes } from './routes';
import swaggerSetup from './swagger.json';

const app = express();
const port = 3333;

AppDataSource.initialize();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSetup));
app.get('/', (req: Request, res: Response) => {
  console.log('*---* running');
  res.json({ message: 'financiacio api' });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('*---*', req.method, req.url);
  next();
});

app.use(routes);

app.use((error: Error, req: Request, res: Response) => {
  console.log(error);

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
