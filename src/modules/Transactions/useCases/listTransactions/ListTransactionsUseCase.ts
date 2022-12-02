import { Transaction } from '../../entities/Transaction';
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';

export class ListTransactionsUseCase {
  constructor(private transactionsRepository: ITransactionsRepository) {}

  async execute(): Promise<Transaction[]> {
    return await this.transactionsRepository.list();
  }
}
