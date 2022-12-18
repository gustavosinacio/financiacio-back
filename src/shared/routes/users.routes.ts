import { Router } from 'express';

import createUserController from '@modules/Accounts/useCases/createUser';
import getUserController from '@modules/Accounts/useCases/getUser';
import listUsersController from '@modules/Accounts/useCases/listUsers';

const router = Router();

router.get('/', (req, res) => listUsersController().handle(req, res));
router.get('/:id', (req, res) => getUserController().handle(req, res));

router.post('/', (req, res) => createUserController().handle(req, res));

export const usersRouter = router;
