import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database";
import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({ name, email, cpf }: ICreateUserDTO): Promise<void> {
    const user = new User({
      name,
      email,
      cpf,
    });

    await this.repository.save(user);
  }

  async list(): Promise<User[]> {
    return await this.repository.find();
  }

  async findByCPF(cpf: string): Promise<User> {
    return await this.repository.findOne({ where: { cpf } });
  }
}
