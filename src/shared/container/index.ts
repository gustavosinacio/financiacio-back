import { container } from 'tsyringe';

import { UsersRepository } from '@modules/Accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/Accounts/repositories/IUsersRepository';
import {
    TransactionsRepository
} from '@modules/Transactions/infra/typeorm/repositories/TransactionsRepository';
import {
    ITransactionsRepository
} from '@modules/Transactions/repositories/ITransactionsRepository';

/**
 * Using TSyringe, i'll create the dependecy injection for transactions
 * differently than for users where I made it by hand.
 * Here, I can have multiple implementations of the repository in one single file
 */

/**
 * Singleton: only one instance of a class used throughout the code
 */
container.registerSingleton<ITransactionsRepository>(
  'TransactionsRepository',
  TransactionsRepository,
);
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
