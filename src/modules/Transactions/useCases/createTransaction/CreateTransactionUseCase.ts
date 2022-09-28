import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

interface ICreateTransactionRequest {
  description: string;
  amount: number;
  userId: string;
}

export class CreateTransactionUseCase {
  constructor(private transactionsRepository: ITransactionsRepository) {}

  execute({ description, amount, userId }: ICreateTransactionRequest): void {
    this.transactionsRepository.create({ description, amount, userId });
  }
}
