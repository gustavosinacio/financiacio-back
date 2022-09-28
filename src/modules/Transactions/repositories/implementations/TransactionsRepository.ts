import { Transaction } from "../../models/Transaction";
import {
  ICreateTransactionDTO,
  ITransactionsRepository,
} from "../ITransactionsRepository";

export class TransactionsRepository implements ITransactionsRepository {
  private transactions: Transaction[];

  private static INSTANCE: TransactionsRepository;

  constructor() {
    this.transactions = [];
  }

  public static getInstance(): TransactionsRepository {
    if (!TransactionsRepository.INSTANCE) {
      TransactionsRepository.INSTANCE = new TransactionsRepository();
    }
    return TransactionsRepository.INSTANCE;
  }

  create({ description, amount, userId }: ICreateTransactionDTO): void {
    const transaction = new Transaction({ description, amount, userId });
    this.transactions.push(transaction);
  }
  list(): Transaction[] {
    return this.transactions;
  }
  findById(id: string): Transaction {
    return this.transactions.find((transaction) => transaction.id === id);
  }
}
