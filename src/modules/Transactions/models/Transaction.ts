import { v4 as uuidv4 } from "uuid";

export class Transaction {
  id: string;

  description: string;
  amount: number;
  userId: string;

  createdAt: Date;

  constructor({ description, amount, userId }) {
    if (!this.id) this.id = uuidv4();

    this.description = description;
    this.amount = amount;
    this.userId = userId;

    this.createdAt = new Date();
  }
}
