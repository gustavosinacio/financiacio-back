import fs from "fs";
import { parse } from "csv-parse";

import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

interface IImportTransaction {
  description: string;
  amount: number;
}

export class ImportTransactionsUseCase {
  constructor(private transactionsRepository: ITransactionsRepository) {}

  loadTransactions(file: Express.Multer.File): Promise<IImportTransaction[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const parser = parse({ delimiter: "," });
      stream.pipe(parser);

      const transactions: IImportTransaction[] = [];

      parser
        .on("data", (line) => {
          const [description, amount] = line;

          transactions.push({ description, amount });
        })
        .on("end", () => {
          resolve(transactions);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const transactions = await this.loadTransactions(file);

    console.log(9821, transactions);

    transactions.forEach((transaction) => {
      const { amount, description } = transaction;
      this.transactionsRepository.create({ amount, description });
    });
  }
}
