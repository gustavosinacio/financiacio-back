import { User } from '@modules/Accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/Accounts/repositories/IUsersRepository';

export class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    return await this.usersRepository.list();
  }
}
