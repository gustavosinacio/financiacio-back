import { v4 as uuidv4 } from 'uuid';

import { ICreateUserDTO } from '@modules/Accounts/dtos';
import { User } from '@modules/Accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/Accounts/repositories/IUsersRepository';

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
    // console.log(await this.list());
  }
  async list(): Promise<User[]> {
    return this.users;
  }
  async findByCPF(cpf: string): Promise<User> {
    const user = this.users.find((user) => user.cpf === cpf);
    return user;
  }
  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
}
