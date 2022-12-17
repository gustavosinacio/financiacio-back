import { User } from '@modules/Accounts/infra/typeorm/entities/User';

export interface ICreateTransactionDTO {
  description: string;
  amount: number;
  user: User;
}
