import { User } from "../../model/User";

export interface ICreateUserDTO {
  name: string;
  cpf: string;
}
export interface IUsersRepository {
  create({ name, cpf }: ICreateUserDTO): void;
  list(): User[];
  findByCPF(cpf: string): User | undefined;
}
