import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

interface ICreateTransactionRequest {
  description: string;
  amount: number;
}

export class CreateTransactionUseCase {
  constructor(private transactionsRepository: ITransactionsRepository) {}

  execute({ description, amount }: ICreateTransactionRequest): void {
    this.transactionsRepository.create({ description, amount });
  }
}
