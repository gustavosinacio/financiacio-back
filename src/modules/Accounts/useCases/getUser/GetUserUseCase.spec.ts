import { UsersRepositoryMock } from '@modules/Accounts/repositories/mocks/UsersRepositoryMock';
import { createMockUsers } from '@shared/tests/functions/createMockUsers';

import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { GetUserUseCase } from './GetUserUseCase';

describe('Get user by id', () => {
  let usersRepositoryMock: UsersRepositoryMock;
  let getUserUseCase: GetUserUseCase;
  let createUserUseCase: CreateUserUseCase;

  beforeEach(() => {
    usersRepositoryMock = new UsersRepositoryMock();
    getUserUseCase = new GetUserUseCase(usersRepositoryMock);
    createUserUseCase = new CreateUserUseCase(usersRepositoryMock);
  });

  it('should return user info by id', async () => {
    const USERS_AMOUNT = 5;
    const mockedUsers = createMockUsers(USERS_AMOUNT);

    const promises = [];
    mockedUsers.forEach((user) => {
      promises.push(createUserUseCase.execute(user));
    });

    await Promise.all(promises);

    const [, createdUser1, createdUser2] = await usersRepositoryMock.list();

    const foundUser1 = await getUserUseCase.execute(createdUser1.id);
    const foundUser2 = await getUserUseCase.execute(createdUser2.id);

    expect(foundUser1.id).toBe(createdUser1.id);
    expect(foundUser1.email).toBe(createdUser1.email);
    expect(foundUser1.name).toBe(createdUser1.name);
    expect(foundUser1.cpf).toBe(createdUser1.cpf);
    expect(foundUser1.createdAt).toBe(createdUser1.createdAt);

    expect(foundUser2.email).toBe(createdUser2.email);
    expect(foundUser2.email).toBe(createdUser2.email);
    expect(foundUser2.name).toBe(createdUser2.name);
    expect(foundUser2.cpf).toBe(createdUser2.cpf);
    expect(foundUser2.createdAt).toBe(createdUser2.createdAt);
  });
});
