import { Router } from 'express';

import { AuthenticateController } from '@modules/Accounts/useCases/authenticate/AuthenticateController';

const router = Router();

const authenticateController = new AuthenticateController();

router.post('/session', authenticateController.handle);
export const authenticateRouter = router;
