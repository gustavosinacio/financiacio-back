import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { User } from '@modules/Accounts/infra/typeorm/entities/User';

@Entity('transactions')
export class Transaction {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', default: 0 })
  amount: number;

  @Column()
  recurrent: boolean;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @CreateDateColumn()
  createdAt: Date;
}
