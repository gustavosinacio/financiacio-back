import { Router } from 'express';

import { transactionsRouter } from './transactions.routes';
import { usersRouter } from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/transactions', transactionsRouter);

export { routes };
