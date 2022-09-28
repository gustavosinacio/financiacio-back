import { Transaction } from "../models/Transaction";

export interface ICreateTransactionDTO {
  description: string;
  amount: number;
  userId: string;
}

export interface ITransactionsRepository {
  create({ description, amount, userId }: ICreateTransactionDTO): void;
  list(): Transaction[];
  findById(id: string): Transaction | undefined;
}
