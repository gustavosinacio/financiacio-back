import { AppError } from 'src/errors/AppError';
import { inject, injectable } from 'tsyringe';

import { User } from '@modules/Accounts/entities/User';
import { IUsersRepository } from '@modules/Accounts/repositories/IUsersRepository';

import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';

interface ICreateTransactionRequest {
  description: string;
  amount: number;
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
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    description,
    amount,
    user,
  }: ICreateTransactionRequest): Promise<void> {
    await this.transactionsRepository.create({
      description,
      amount,
      user,
    });
  }
}
