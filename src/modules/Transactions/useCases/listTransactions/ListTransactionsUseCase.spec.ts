import { UsersRepositoryMock } from '@modules/Accounts/repositories/mocks/UsersRepositoryMock';
import { CreateUserUseCase } from '@modules/Accounts/useCases/createUser/CreateUserUseCase';
import {
    TransactionsRepositoryMock
} from '@modules/Transactions/repositories/mocks/TransactionsRepositoryMock';
import {
    CreateTransactionUseCase
} from '@modules/Transactions/useCases/createTransaction/CreateTransactionUseCase';
import { createMockTransaction } from '@shared/tests/functions/createMockTransaction';

describe('List all created transactions', () => {
  let usersRepositoryMock: UsersRepositoryMock;
  let transactionsRepositoryMock: TransactionsRepositoryMock;
  let createUserUseCase: CreateUserUseCase;
  let createTransactionUseCase: CreateTransactionUseCase;

  beforeAll(async () => {
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

  it('should list the right amount of transactions created', async () => {
    const TRANSACTIONS_AMOUNT = 5;

    const [user] = await usersRepositoryMock.list();

    const transaction = createMockTransaction(user);

    for (let index = 0; index < TRANSACTIONS_AMOUNT; index++) {
      createTransactionUseCase.execute(transaction);
    }

    const transactions = await transactionsRepositoryMock.list();

    expect(transactions.length).toBe(TRANSACTIONS_AMOUNT);
  });
});
