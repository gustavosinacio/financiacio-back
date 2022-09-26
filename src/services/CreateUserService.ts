import { UsersRepository } from "../repositories/UsersRepository";

interface IRequest {
  name: string;
  cpf: string;
}

export class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  execute({ name, cpf }: IRequest) {
    const foundUserByCPF = this.usersRepository.findByCPF(cpf);

    if (foundUserByCPF) {
      throw new Error("User already exists");
    }

    this.usersRepository.create({ name, cpf });
  }
}
