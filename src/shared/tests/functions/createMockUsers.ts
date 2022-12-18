import { User } from '@modules/Accounts/infra/typeorm/entities/User';

export function createMockUsers(usersAmount) {
  const mockedUsers: Omit<User, 'id' | 'createdAt' | 'transactions'>[] = [];

  for (let index = 0; index < usersAmount; index++) {
    mockedUsers.push({
      email: `testemail${index}@email.com`,
      name: `Test Name${index}`,
      cpf: `0000000000${index}`,
      password: `00000${index}`,
    });
  }

  return mockedUsers;
}
