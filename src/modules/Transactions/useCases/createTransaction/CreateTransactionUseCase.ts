import { inject, injectable } from 'tsyringe';

import { User } from '@modules/Accounts/infra/typeorm/entities/User';
import { ITransactionsRepository } from '@modules/Transactions/repositories/ITransactionsRepository';

interface ICreateTransactionRequest {
  description: string;
  amount: number;
  recurrent: boolean;
  user: User;
}

/**
 * This use case has been created as injectable, so I can use it on
 * container.resolve()
 */
@injectable()
export class CreateTransactionUseCase {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  async execute({
    description,
    amount,
    recurrent,
    user,
  }: ICreateTransactionRequest): Promise<void> {
    await this.transactionsRepository.create({
      description,
      amount,
      recurrent,
      user,
    });
  }
}
