import { User } from "../../models/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }
    return UsersRepository.INSTANCE;
  }

  create({ name, cpf }: ICreateUserDTO): void {
    const user = new User({ name, cpf });
    this.users.push(user);
  }

  list(): User[] {
    return this.users;
  }

  findByCPF(cpf: string): User {
    return this.users.find((user) => user.cpf === cpf);
  }
}
