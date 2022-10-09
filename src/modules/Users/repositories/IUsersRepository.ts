import { User } from "../models/User";

export interface ICreateUserDTO {
  name: string;
  cpf: string;
  email: string;
}

export interface IUsersRepository {
  create({ name, email, cpf }: ICreateUserDTO): void;
  list(): User[];
  findByCPF(cpf: string): User | undefined;
}
