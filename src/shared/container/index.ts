import { container } from 'tsyringe';

import {
    TransactionsRepository
} from '@modules/Transactions/repositories/implementations/TransactionsRepository';
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
