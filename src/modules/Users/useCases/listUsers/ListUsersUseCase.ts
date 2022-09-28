import { User } from "../../models/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(): User[] {
    return this.usersRepository.list();
  }
}
