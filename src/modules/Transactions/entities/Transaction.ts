import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('transactions')
export class Transaction {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', default: 0 })
  amount: number;

  @CreateDateColumn()
  createdAt: Date;

  constructor(createTransacionData) {
    if (createTransacionData === undefined) return;

    const { description, amount } = createTransacionData;
    if (!this.id) this.id = uuidv4();

    this.description = description;
    this.amount = amount;
  }
}
