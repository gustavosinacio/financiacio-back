import { User } from '@modules/Accounts/infra/typeorm/entities/User';

export function createMockTransaction(user: User) {
  const transaction = {
    amount: Math.random() * 1000,
    description: 'random test description',
    recurrent: false,
    user: user,
  };

  return transaction;
}
