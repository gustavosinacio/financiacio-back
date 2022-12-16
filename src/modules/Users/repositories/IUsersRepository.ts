import { ICreateUserDTO } from '../dtos/ICreateUserDto';
import { User } from '../entities/User';

export interface IUsersRepository {
  create({ name, email, cpf }: ICreateUserDTO): Promise<void>;
  list(): Promise<User[]>;
  findByCPF(cpf: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
