import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { ICreateUserDTO } from '@modules/Accounts/dtos';
import { User } from '@modules/Accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/Accounts/repositories/IUsersRepository';
import { AppDataSource } from '@shared/typeorm';

export class UsersRepository implements IUsersRepository {
  /**
   * The repository variable can only be used inside my implementation
   *  */
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }
  // ---------------------------------------------------------------------------
  async create({ name, email, cpf, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id: uuidv4(),
      name,
      email,
      cpf,
      password,
    });

    await this.repository.save(user);
  }
  // ---------------------------------------------------------------------------
  async list(): Promise<User[]> {
    return await this.repository.find({
      order: {
        createdAt: { direction: 'DESC' },
      },
    });
  }
  // ---------------------------------------------------------------------------
  async findByCPF(cpf: string): Promise<User> {
    return await this.repository.findOne({ where: { cpf } });
  }
  // ---------------------------------------------------------------------------
  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({ where: { email } });
  }
  // ---------------------------------------------------------------------------
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { id },
      relations: {
        transactions: true,
      },
    });

    return user;
  }
}
