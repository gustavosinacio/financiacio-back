import { Router } from 'express';
import createTransactionController from '../modules/Transactions/useCases/createTransaction';
import importTransactionsController from '../modules/Transactions/useCases/importTransactions';
import listTransactionsController from '../modules/Transactions/useCases/listTransactions';
import multer from 'multer';

const router = Router();
const upload = multer({
  dest: './tmp',
});

router.post('/', (req, res) => createTransactionController().handle(req, res));

router.get('/', (req, res) => listTransactionsController().handle(req, res));

router.post('/import', upload.single('file'), (req, res) =>
  importTransactionsController().handle(req, res),
);

export const transactionsRouter = router;
