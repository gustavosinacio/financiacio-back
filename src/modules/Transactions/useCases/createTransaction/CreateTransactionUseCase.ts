import { inject, injectable } from 'tsyringe';

import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';

interface ICreateTransactionRequest {
  description: string;
  amount: number;
}

@injectable()
export class CreateTransactionUseCase {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  async execute({
    description,
    amount,
  }: ICreateTransactionRequest): Promise<void> {
    this.transactionsRepository.create({ description, amount });
  }
}
