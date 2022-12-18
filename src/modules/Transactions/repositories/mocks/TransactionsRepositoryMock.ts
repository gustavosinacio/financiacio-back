import { v4 as uuidv4 } from 'uuid';

import { ICreateTransactionDTO } from '@modules/Transactions/dtos/ICreateTransactionDTO';
import { Transaction } from '@modules/Transactions/infra/typeorm/entities/Transaction';

import { ITransactionsRepository } from '../ITransactionsRepository';

export class TransactionsRepositoryMock implements ITransactionsRepository {
  private repository: Transaction[];

  constructor() {
    this.repository = [];
  }

  async create({
    description,
    amount,
    user,
    recurrent,
  }: ICreateTransactionDTO): Promise<void> {
    const transaction = new Transaction();

    Object.assign(transaction, {
      id: uuidv4(),
      amount,
      description,
      recurrent,
      createdAt: new Date(),
      user,
    });

    this.repository.push(transaction);
  }
  async list(): Promise<Transaction[]> {
    return this.repository;
  }
  async findById(id: string): Promise<Transaction> {
    return this.repository.find((user) => user.id === id);
  }
}
