import { Transaction } from "../../models/Transaction";
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

export class ListTransactionsUseCase {
  constructor(private transactionsRepository: ITransactionsRepository) {}

  execute(): Transaction[] {
    return this.transactionsRepository.list();
  }
}
