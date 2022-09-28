import fs from "fs";
import { parse } from "csv-parse";

import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

interface IImportTransaction {
  description: string;
  amount: string;
}

const LINE_OFFSET = 1;

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
          fs.promises.unlink(file.path);
          resolve(transactions);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const transactions = await this.loadTransactions(file);

    transactions.forEach((transaction, lineNumber) => {
      const { amount, description } = transaction;

      const parsedAmount = parseFloat(amount);

      if (isNaN(parsedAmount)) {
        throw new Error(
          `unable to parse amount on line ${lineNumber + LINE_OFFSET}`
        );
      }
      this.transactionsRepository.create({ amount: parsedAmount, description });
    });
  }
}
