import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { ICreateUserDTO } from '../repositories/IUsersRepository';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ length: 11 })
  cpf: string;

  @CreateDateColumn()
  createdAt: Date;

  constructor({ name, email, cpf }: ICreateUserDTO) {
    if (!this.id) this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.cpf = cpf;
  }
}
