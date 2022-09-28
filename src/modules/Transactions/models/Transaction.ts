import { v4 as uuidv4 } from "uuid";

export class Transaction {
  id: string;

  description: string;
  amount: number;

  createdAt: Date;

  constructor({ description, amount }) {
    if (!this.id) this.id = uuidv4();

    this.description = description;
    this.amount = amount;

    this.createdAt = new Date();
  }
}
