import { ICreateTransactionDTO } from '../dtos/ICreateTransactionDTO';
import { Transaction } from '../entities/Transaction';

export interface ITransactionsRepository {
  create({ description, amount, user }: ICreateTransactionDTO): Promise<void>;
  list(): Promise<Transaction[]>;
  findById(id: string): Promise<Transaction>;
}
