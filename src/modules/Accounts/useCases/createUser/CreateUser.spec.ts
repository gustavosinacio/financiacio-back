import { UsersRepositoryMock } from '@modules/Accounts/repositories/mocks/UsersRepositoryMock';
import { AppError } from '@shared/errors/AppError';

import { CreateUserUseCase } from './CreateUserUseCase';

let createUserUseCase: CreateUserUseCase;
let usersRepositoryMock: UsersRepositoryMock;

describe('User creation', () => {
  beforeEach(() => {
    usersRepositoryMock = new UsersRepositoryMock();
    createUserUseCase = new CreateUserUseCase(usersRepositoryMock);
  });

  it('Should create a user when correct information is provided', async () => {
    const user = {
      name: 'test user',
      email: 'testemail@email.com',
      cpf: '12345678910',
      password: 'testpassword',
    };

    await createUserUseCase.execute(user);

    const createdUser = await usersRepositoryMock.findByEmail(user.email);

    expect(createdUser).toHaveProperty('id');
    expect(createdUser).toHaveProperty('name');
    expect(createdUser).toHaveProperty('email');
    expect(createdUser).toHaveProperty('cpf');
    expect(createdUser).toHaveProperty('password');
    expect(createdUser).toHaveProperty('createdAt');
    expect(createdUser).toHaveProperty('transactions');

    expect(createdUser.name).toBe(user.name);
    expect(createdUser.email).toBe(user.email);
    expect(createdUser.cpf).toBe(user.cpf);
    expect(createdUser.password).toBe(user.password);
  });

  it('Should not be able to create a user with already existing email', async () => {
    expect(async () => {
      const user = {
        name: 'test user',
        email: 'testemail@email.com',
        cpf: '11111111111',
        password: 'testpassword',
      };
      const user2 = {
        name: 'test user2',
        email: 'testemail@email.com',
        cpf: '2222222222',
        password: 'testpassword2',
      };
      await createUserUseCase.execute(user);
      await createUserUseCase.execute(user2);
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to create a user with already existing cpf', async () => {
    const user = {
      name: 'test user',
      email: 'testemail@email.com',
      cpf: '11111111111',
      password: 'testpassword',
    };
    const user2 = {
      name: 'test user',
      email: 'testemail2@email.com',
      cpf: '11111111111',
      password: 'testpassword2',
    };

    expect(async () => {
      await createUserUseCase.execute(user);
      await createUserUseCase.execute(user2);
    }).rejects.toBeInstanceOf(AppError);
  });
});
