import { IUsersRepository } from "../../repositories/IUsersRepository";

interface ICreateUserRequest {
  id?: string;
  name: string;
  cpf: string;
}

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, cpf }: ICreateUserRequest): void {
    const foundUserByCPF = this.usersRepository.findByCPF(cpf);

    if (foundUserByCPF) {
      throw new Error("User already exists");
    }

    this.usersRepository.create({ name, cpf });
  }
}