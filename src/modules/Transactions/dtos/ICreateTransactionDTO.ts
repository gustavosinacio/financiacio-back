import { User } from '@modules/Accounts/entities/User';

export interface ICreateTransactionDTO {
  description: string;
  amount: number;
  user: User;
}
