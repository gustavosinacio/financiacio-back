import { v4 as uuidv4 } from 'uuid';

import { ICreateUserDTO } from '@modules/Accounts/dtos';

import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepositoryMock implements IUsersRepository {
  users: User[] = [];

  async create({ name, email, cpf, password }: ICreateUserDTO): Promise<void> {
    const user = new User();
    Object.assign(user, {
      id: uuidv4(),
      name,
      email,
      cpf,
      password,
      createdAt: new Date(),
      transactions: [],
    });

    this.users.push(user);
  }
  async list(): Promise<User[]> {
    return this.users;
  }
  async findByCPF(cpf: string): Promise<User> {
    return this.users.find((user) => user.cpf === cpf);
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}
