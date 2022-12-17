import { ICreateUserDTO } from '@modules/Accounts/dtos/ICreateUserDto';
import { User } from '@modules/Accounts/infra/typeorm/entities/User';

export interface IUsersRepository {
  create({ name, email, cpf, password }: ICreateUserDTO): Promise<void>;
  list(): Promise<User[]>;
  findByCPF(cpf: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}
