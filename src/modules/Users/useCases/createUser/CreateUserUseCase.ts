import { IUsersRepository } from '../../repositories/IUsersRepository';

interface ICreateUserRequest {
  id?: string;
  name: string;
  email: string;
  cpf: string;
}

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, cpf }: ICreateUserRequest): Promise<void> {
    const foundUserByCPF = await this.usersRepository.findByCPF(cpf);
    const foundUserByEmail = await this.usersRepository.findByEmail(email);

    if (foundUserByCPF) {
      throw new Error('CPF already exists');
    }
    if (foundUserByEmail) {
      throw new Error('Email already exists');
    }

    this.usersRepository.create({ name, email, cpf });
  }
}
