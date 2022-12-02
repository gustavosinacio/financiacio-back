import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    return await this.usersRepository.list();
  }
}
