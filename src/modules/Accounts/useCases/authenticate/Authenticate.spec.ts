import { AppError } from '@errors/AppError';
import { ICreateUserDTO } from '@modules/Accounts/dtos';
import { UsersRepositoryMock } from '@modules/Accounts/repositories/mocks/UsersRepositoryMock';
import { CreateUserUseCase } from '@modules/Accounts/useCases/createUser/CreateUserUseCase';

import { AuthenticateUseCase } from './AuthenticateUseCase';

let authenticateUseCase: AuthenticateUseCase;
let usersRepositoryMock: UsersRepositoryMock;
let createUserUseCase: CreateUserUseCase;

describe('Authentication by existing user', () => {
  beforeEach(() => {
    usersRepositoryMock = new UsersRepositoryMock();
    authenticateUseCase = new AuthenticateUseCase(usersRepositoryMock);
    createUserUseCase = new CreateUserUseCase(usersRepositoryMock);
  });

  it('Should be able to authenticate existing user', async () => {
    const user: ICreateUserDTO = {
      name: 'Test Name',
      email: 'test@email.com',
      cpf: '12345678910',
      password: '123456',
    };

    await createUserUseCase.execute(user);
    const { email, password } = await usersRepositoryMock.findByEmail(
      user.email,
    );

    const info = await authenticateUseCase.execute({ email, password });

    expect(info).toHaveProperty('token');
    expect(info).toHaveProperty('user');
    expect(info).toHaveProperty(['user', 'email']);
    expect(info).toHaveProperty(['user', 'name']);
  });

  it('should not be able to authenticate if email is not found', () => {
    expect(async () => {
      await authenticateUseCase.execute({
        email: 'nonexistentemail@email.com',
        password: '123456',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate if password is incorrect', async () => {
    const user: ICreateUserDTO = {
      name: 'Test Name',
      email: 'test@email.com',
      cpf: '12345678910',
      password: '123456',
    };

    await usersRepositoryMock.create(user);
    const { email } = await usersRepositoryMock.findByEmail(user.email);

    expect(async () => {
      await authenticateUseCase.execute({
        email,
        password: 'wrongpassword',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
