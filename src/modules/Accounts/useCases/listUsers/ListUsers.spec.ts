import { UsersRepositoryMock } from '@modules/Accounts/repositories/mocks/UsersRepositoryMock';
import { CreateUserUseCase } from '@modules/Accounts/useCases/createUser/CreateUserUseCase';

describe('List all created users', () => {
  let usersRepositoryMock: UsersRepositoryMock;
  let createUserUseCase: CreateUserUseCase;

  beforeEach(() => {
    usersRepositoryMock = new UsersRepositoryMock();
    createUserUseCase = new CreateUserUseCase(usersRepositoryMock);
  });

  it('Should list the right amount of users created', async () => {
    for (let index = 0; index < 5; index++) {
      const email = `testemail${index}@email.com`;
      const name = `Test Name${index}`;
      const cpf = `0000000000${index}`;
      const password = `00000${index}`;

      await createUserUseCase.execute({
        email,
        name,
        cpf,
        password,
      });
    }

    const allUsers = await usersRepositoryMock.list();

    expect(allUsers.length).toBe(5);
  });
});
