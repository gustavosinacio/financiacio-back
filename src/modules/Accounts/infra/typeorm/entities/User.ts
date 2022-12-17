import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Transaction } from '@modules/Transactions/infra/typeorm/entities/Transaction';

@Entity('users')
export class User {
  @PrimaryColumn()
  /**
   * @Column("id")
   * A string passed to the Column anotation means changing the name of the
   * column referenced. This way, the code doens't have to be tightly related to
   * the database
   */
  //
  id: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column({ length: 11 })
  cpf!: string;

  @Column()
  password: string;

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];

  @CreateDateColumn()
  createdAt: Date;
}
