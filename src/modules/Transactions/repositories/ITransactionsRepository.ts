import { ICreateTransactionDTO } from '../dtos/ICreateTransactionDTO';
import { Transaction } from '../entities/Transaction';

export interface ITransactionsRepository {
  create({ description, amount }: ICreateTransactionDTO): Promise<void>;
  list(): Promise<Transaction[]>;
  findById(id: string): Promise<Transaction>;
}
