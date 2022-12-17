import { inject, injectable } from 'tsyringe';

import { Transaction } from '@modules/Transactions/infra/typeorm/entities/Transaction';
import {
    ITransactionsRepository
} from '@modules/Transactions/repositories/ITransactionsRepository';

@injectable()
export class ListTransactionsUseCase {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  async execute(): Promise<Transaction[]> {
    return await this.transactionsRepository.list();
  }
}
