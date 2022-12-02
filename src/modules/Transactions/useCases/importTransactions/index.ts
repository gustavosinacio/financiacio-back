import { TransactionsRepository } from '../../repositories/implementations/TransactionsRepository';
import { ImportTransactionsController } from './ImportTransactionsController';
import { ImportTransactionsUseCase } from './ImportTransactionsUseCase';

export default (): ImportTransactionsController => {
  const transactionRepository = new TransactionsRepository();
  const importTransactionsUseCase = new ImportTransactionsUseCase(
    transactionRepository,
  );
  const importTransactionsController = new ImportTransactionsController(
    importTransactionsUseCase,
  );

  return importTransactionsController;
};
