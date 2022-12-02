import { Transaction } from '../entities/Transaction';

export interface ICreateTransactionDTO {
  description: string;
  amount: number;
}

export interface ITransactionsRepository {
  create({ description, amount }: ICreateTransactionDTO): Promise<void>;
  list(): Promise<Transaction[]>;
  findById(id: string): Promise<Transaction>;
}
