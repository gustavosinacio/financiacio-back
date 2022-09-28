import { TransactionsRepository } from "../../repositories/implementations/TransactionsRepository";
import { ImportTransactionsController } from "./ImportTransactionsController";
import { ImportTransactionsUseCase } from "./ImportTransactionsUseCase";

const transactionRepository = TransactionsRepository.getInstance();
const importTransactionsUseCase = new ImportTransactionsUseCase(
  transactionRepository
);
const importTransactionsController = new ImportTransactionsController(
  importTransactionsUseCase
);

export { importTransactionsController };
