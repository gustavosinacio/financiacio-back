import { Router } from "express";
import { createTransactionController } from "../modules/Transactions/useCases/createTransaction";
import { listTransactionsController } from "../modules/Transactions/useCases/listTransactions";

const router = Router();

router.post("/", (req, res) => createTransactionController.handle(req, res));

router.get("/", (req, res) => listTransactionsController.handle(req, res));

export const transactionsRouter = router;
