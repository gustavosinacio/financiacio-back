import { User } from '@modules/Accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/Accounts/repositories/IUsersRepository';

export class GetUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<User> {
    return await this.usersRepository.findById(id);
  }
}
