import { IUsersRepository } from "../../repositories/IUsersRepository";

interface ICreateUserRequest {
  id?: string;
  name: string;
  email: string;
  cpf: string;
}

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email, cpf }: ICreateUserRequest): void {
    const foundUserByCPF = this.usersRepository.findByCPF(cpf);

    if (foundUserByCPF) {
      throw new Error("CPF already exists");
    }

    this.usersRepository.create({ name, email, cpf });
  }
}
