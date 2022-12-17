import { Router } from 'express';

import { authenticateRouter } from './authenticate.routes';
import { transactionsRouter } from './transactions.routes';
import { usersRouter } from './users.routes';

const routes = Router();

routes.use('/authenticate', authenticateRouter);
routes.use('/users', usersRouter);
routes.use('/transactions', transactionsRouter);

export { routes };
