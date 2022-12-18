import { UsersRepositoryMock } from '@modules/Accounts/repositories/mocks/UsersRepositoryMock';
import { CreateUserUseCase } from '@modules/Accounts/useCases/createUser/CreateUserUseCase';
import {
    TransactionsRepositoryMock
} from '@modules/Transactions/repositories/mocks/TransactionsRepositoryMock';

import { CreateTransactionUseCase } from './CreateTransactionUseCase';

describe('Transaction creation', () => {
  let usersRepositoryMock: UsersRepositoryMock;
  let transactionsRepositoryMock: TransactionsRepositoryMock;
  let createUserUseCase: CreateUserUseCase;
  let createTransactionUseCase: CreateTransactionUseCase;

  beforeEach(async () => {
    usersRepositoryMock = new UsersRepositoryMock();
    transactionsRepositoryMock = new TransactionsRepositoryMock();
    createUserUseCase = new CreateUserUseCase(usersRepositoryMock);
    createTransactionUseCase = new CreateTransactionUseCase(
      transactionsRepositoryMock,
    );
    const user = {
      name: 'test user',
      email: 'testemail@email.com',
      cpf: '12345678910',
      password: 'testpassword',
    };

    await createUserUseCase.execute(user);
  });

  it('should create a transaction linked to a user', async () => {
    const users = await usersRepositoryMock.list();

    const transaction = {
      amount: Math.random() * 1000,
      description: 'random test description',
      user: users[0],
    };

    await createTransactionUseCase.execute(transaction);

    const transactions = await transactionsRepositoryMock.list();

    expect(transactions[0]).toHaveProperty('id');
    expect(transactions[0]).toHaveProperty('amount');
    expect(transactions[0]).toHaveProperty('description');
    expect(transactions[0]).toHaveProperty('createdAt');
    expect(transactions[0]).toHaveProperty('user');

    expect(transactions[0].amount).toBe(transaction.amount);
    expect(transactions[0].description).toBe(transaction.description);
    expect(transactions[0].user.id).toBe(transaction.user.id);
  });
});
