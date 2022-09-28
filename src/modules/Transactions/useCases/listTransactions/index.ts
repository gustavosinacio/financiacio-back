import { TransactionsRepository } from "../../repositories/implementations/TransactionsRepository";
import { ListTransactionsUseCase } from "./ListTransactionsUseCase";
import { ListTransactionsController } from "./ListTransactionsController";

const ransactionsRepository = TransactionsRepository.getInstance();
const listTransactionsUseCase = new ListTransactionsUseCase(
  ransactionsRepository
);
const listTransactionsController = new ListTransactionsController(
  listTransactionsUseCase
);

export { listTransactionsController };
