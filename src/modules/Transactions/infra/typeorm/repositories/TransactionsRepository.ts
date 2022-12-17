import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { ICreateTransactionDTO } from '@modules/Transactions/dtos';
import { Transaction } from '@modules/Transactions/infra/typeorm/entities/Transaction';
import {
    ITransactionsRepository
} from '@modules/Transactions/repositories/ITransactionsRepository';
import { AppDataSource } from '@shared/typeorm';

export class TransactionsRepository implements ITransactionsRepository {
  private repository: Repository<Transaction>;

  constructor() {
    this.repository = AppDataSource.getRepository(Transaction);
  }
  // ---------------------------------------------------------------------------
  async create({
    description,
    amount,
    user,
  }: ICreateTransactionDTO): Promise<void> {
    const transaction = this.repository.create({
      id: uuidv4(),
      description,
      amount,
      user,
    });

    await this.repository.save(transaction);
  }
  // ---------------------------------------------------------------------------
  async list(): Promise<Transaction[]> {
    return await this.repository.find();
  }
  // ---------------------------------------------------------------------------
  async findById(id: string): Promise<Transaction> {
    return this.repository.findOne({ where: { id } });
  }
}
