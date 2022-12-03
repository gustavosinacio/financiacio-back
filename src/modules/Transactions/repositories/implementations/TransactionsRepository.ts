import { AppDataSource } from 'src/database';
import { Repository } from 'typeorm';
import {
  ICreateTransactionDTO,
  ITransactionsRepository,
} from '../ITransactionsRepository';

import { Transaction } from '../../entities/Transaction';
import { v4 as uuidv4 } from 'uuid';

export class TransactionsRepository implements ITransactionsRepository {
  private repository: Repository<Transaction>;

  constructor() {
    this.repository = AppDataSource.getRepository(Transaction);
  }

  async create({ description, amount }: ICreateTransactionDTO): Promise<void> {
    const transaction = this.repository.create({
      id: uuidv4(),
      description,
      amount,
    });
    await this.repository.save(transaction);
  }
  async list(): Promise<Transaction[]> {
    return await this.repository.find();
  }
  async findById(id: string): Promise<Transaction> {
    return this.repository.findOne({ where: { id } });
  }
}
