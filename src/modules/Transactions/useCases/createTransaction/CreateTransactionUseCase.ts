import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';

interface ICreateTransactionRequest {
  description: string;
  amount: number;
}

export class CreateTransactionUseCase {
  constructor(private transactionsRepository: ITransactionsRepository) {}

  async execute({
    description,
    amount,
  }: ICreateTransactionRequest): Promise<void> {
    this.transactionsRepository.create({ description, amount });
  }
}
