import { ICreateTransactionDTO } from '@modules/Transactions/dtos/ICreateTransactionDTO';
import { Transaction } from '@modules/Transactions/infra/typeorm/entities/Transaction';

export interface ITransactionsRepository {
  create({
    description,
    amount,
    user,
    recurrent,
  }: ICreateTransactionDTO): Promise<void>;
  list(): Promise<Transaction[]>;
  findById(id: string): Promise<Transaction>;
}
