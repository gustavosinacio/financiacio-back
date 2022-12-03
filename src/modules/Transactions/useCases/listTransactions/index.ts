import { TransactionsRepository } from '../../repositories/implementations/TransactionsRepository';
import { ListTransactionsUseCase } from './ListTransactionsUseCase';
import { ListTransactionsController } from './ListTransactionsController';

export default (): ListTransactionsController => {
  const ransactionsRepository = new TransactionsRepository();
  const listTransactionsUseCase = new ListTransactionsUseCase(
    ransactionsRepository,
  );
  const listTransactionsController = new ListTransactionsController(
    listTransactionsUseCase,
  );

  return listTransactionsController;
};
