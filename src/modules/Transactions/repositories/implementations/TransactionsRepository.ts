import { AppDataSource } from 'src/database';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { Transaction } from '../../entities/Transaction';
import { ICreateTransactionDTO, ITransactionsRepository } from '../ITransactionsRepository';

export class TransactionsRepository implements ITransactionsRepository {
  private repository: Repository<Transaction>;

  constructor() {
    this.repository = AppDataSource.getRepository(Transaction);
  }
  // ---------------------------------------------------------------------------
  async create({ description, amount }: ICreateTransactionDTO): Promise<void> {
    const transaction = this.repository.create({
      id: uuidv4(),
      description,
      amount,
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
