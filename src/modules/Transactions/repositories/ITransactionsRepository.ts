import { Transaction } from "../models/Transaction";

export interface ICreateTransactionDTO {
  description: string;
  amount: number;
}

export interface ITransactionsRepository {
  create({ description, amount }: ICreateTransactionDTO): void;
  list(): Transaction[];
  findById(id: string): Transaction | undefined;
}
