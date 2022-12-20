import 'reflect-metadata';
import '@shared/container';

import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import { exceptionHandler } from '@shared/infra/express/middlewares/exceptionHandler';
import { routeLogger } from '@shared/infra/express/middlewares/routeLogger';
import { routes } from '@shared/routes';
import { AppDataSource } from '@shared/typeorm';

import swaggerSetup from './swagger.json';

const app = express();
const port = process.env.PORT;

AppDataSource.initialize();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSetup));

app.use(routeLogger);

app.use(routes);

app.use(exceptionHandler);

app.listen(port, () => {
  console.log(`---- Server running on port ${port} ----`);
});
