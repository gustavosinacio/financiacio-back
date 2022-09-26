import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create({ name, cpf }: ICreateUserDTO) {
    const user = new User({ name, cpf });
    this.users.push(user);
  }

  list() {
    return this.users;
  }

  findByCPF(cpf: string) {
    return this.users.find((user) => user.cpf === cpf);
  }
}
