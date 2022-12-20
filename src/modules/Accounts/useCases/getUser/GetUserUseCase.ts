import { User } from '@modules/Accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/Accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

export class GetUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<User> {
    const foundUser = await this.usersRepository.findById(id);

    if (!foundUser) {
      throw new AppError('User not found', 404);
    }

    return foundUser;
  }
}
