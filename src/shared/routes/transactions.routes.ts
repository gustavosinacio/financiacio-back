import { Router } from 'express';
import multer from 'multer';

import { CreateTransactionController } from '@modules/Transactions/useCases/createTransaction/CreateTransactionController';
import { ImportTransactionsController } from '@modules/Transactions/useCases/importTransactions/ImportTransactionsController';
import { ListTransactionsController } from '@modules/Transactions/useCases/listTransactions/ListTransactionsController';
import { checkAuthenticationToken } from '@shared/infra/express/middlewares/checkAuthenticationToken';

const router = Router();
const upload = multer({
  dest: './tmp',
});

const createTransactionController = new CreateTransactionController();
const listTransactionsController = new ListTransactionsController();
const importTransactionsController = new ImportTransactionsController();

// Created with Tsyringe dependency injection

router.use(checkAuthenticationToken);
router.post('/', createTransactionController.handle);

router.get('/', listTransactionsController.handle);

router.post(
  '/import',
  upload.single('file'),
  importTransactionsController.handle,
);

export const transactionsRouter = router;
