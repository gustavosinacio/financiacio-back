import { inject, injectable } from 'tsyringe';

import { Transaction } from '../../entities/Transaction';
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';

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
