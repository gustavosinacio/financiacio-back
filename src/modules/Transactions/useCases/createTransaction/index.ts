import { CreateTransactionUseCase } from './CreateTransactionUseCase';
import { CreateTransactionController } from './CreateTransactionController';
import { TransactionsRepository } from '../../repositories/implementations/TransactionsRepository';

export default (): CreateTransactionController => {
  const transactionsRepository = new TransactionsRepository();

  const createTransactionUseCase = new CreateTransactionUseCase(
    transactionsRepository,
  );
  const createTransactionController = new CreateTransactionController(
    createTransactionUseCase,
  );

  return createTransactionController;
};
