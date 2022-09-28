import { CreateTransactionUseCase } from "./CreateTransactionUseCase";
import { CreateTransactionController } from "./CreateTransactionController";
import { TransactionsRepository } from "../../repositories/implementations/TransactionsRepository";

const transactionsRepository = TransactionsRepository.getInstance();

const createTransactionUseCase = new CreateTransactionUseCase(
  transactionsRepository
);
const createTransactionController = new CreateTransactionController(
  createTransactionUseCase
);

export { createTransactionController };