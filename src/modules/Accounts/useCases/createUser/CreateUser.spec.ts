import { UsersRepositoryMock } from '../../repositories/mocks/UsersRepositoryMock';
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
  });
});
