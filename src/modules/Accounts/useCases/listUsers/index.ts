import { UsersRepository } from '@modules/Accounts/infra/typeorm/repositories/UsersRepository';

import { ListUsersController } from './ListUsersController';
import { ListUsersUseCase } from './ListUsersUseCase';

export default (): ListUsersController => {
  const usersRepository = new UsersRepository();
  const listUsersUseCase = new ListUsersUseCase(usersRepository);
  const listUsersController = new ListUsersController(listUsersUseCase);

  return listUsersController;
};
