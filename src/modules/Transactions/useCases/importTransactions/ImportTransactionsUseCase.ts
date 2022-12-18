import { parse } from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

import { User } from '@modules/Accounts/infra/typeorm/entities/User';
import {
    ITransactionsRepository
} from '@modules/Transactions/repositories/ITransactionsRepository';
import { AppError } from '@shared/errors/AppError';

interface IImportTransaction {
  description: string;
  amount: string;
  recurrent: boolean;
}

interface IImportTransactionsRequest {
  file: Express.Multer.File;
  user: User;
}

const LINE_OFFSET = 1;

@injectable()
export class ImportTransactionsUseCase {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  loadTransactions(file: Express.Multer.File): Promise<IImportTransaction[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const parser = parse({ delimiter: ',' });
      stream.pipe(parser);

      const transactions: IImportTransaction[] = [];

      parser
        .on('data', (line) => {
          const [description, amount, recurrent] = line;

          transactions.push({ description, amount, recurrent });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(transactions);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  async execute({ file, user }: IImportTransactionsRequest): Promise<void> {
    const transactions = await this.loadTransactions(file);

    transactions.forEach(async (transaction, lineNumber) => {
      const { amount, description, recurrent } = transaction;

      const parsedAmount = parseFloat(amount);

      if (isNaN(parsedAmount)) {
        throw new AppError(
          `unable to parse amount on line ${lineNumber + LINE_OFFSET}`,
        );
      }
      await this.transactionsRepository.create({
        amount: parsedAmount,
        description,
        recurrent: recurrent || false,
        user,
      });
    });
  }
}
