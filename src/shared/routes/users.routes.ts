import { Router } from 'express';

import createUserController from '@modules/Accounts/useCases/createUser';
import listUsersController from '@modules/Accounts/useCases/listUsers';

const router = Router();

router.get('/', (req, res) => listUsersController().handle(req, res));

router.post('/', (req, res) => createUserController().handle(req, res));

export const usersRouter = router;
