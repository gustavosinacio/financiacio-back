import { AppDataSource } from 'src/database';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { User } from '../../entities/User';
import { ICreateUserDTO, IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  /**
   * The repository variable can only be used inside my implementation
   *  */
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }
  // ---------------------------------------------------------------------------
  async create({ name, email, cpf }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id: uuidv4(),
      name,
      email,
      cpf,
    });

    await this.repository.save(user);
  }
  // ---------------------------------------------------------------------------
  async list(): Promise<User[]> {
    return await this.repository.find();
  }
  // ---------------------------------------------------------------------------
  async findByCPF(cpf: string): Promise<User> {
    return this.repository.findOne({ where: { cpf } });
  }
  // ---------------------------------------------------------------------------
  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ where: { email } });
  }
}
