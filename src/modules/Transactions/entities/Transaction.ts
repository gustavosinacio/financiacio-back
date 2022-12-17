import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { User } from '../../Accounts/entities/User';

@Entity('transactions')
export class Transaction {
  @PrimaryColumn()
    id: string;

  @Column()
    description: string;

  @Column({ type: 'decimal', default: 0 })
    amount: number;

  @ManyToOne(() => User, (user) => user.transactions)
    user: User;

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
