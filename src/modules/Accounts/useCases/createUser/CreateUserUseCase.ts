import { AppError } from '@errors/AppError';
import { IUsersRepository } from '@modules/Accounts/repositories/IUsersRepository';

interface ICreateUserRequest {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    name,
    email,
    cpf,
    password,
  }: ICreateUserRequest): Promise<void> {
    const foundUserByCPF = await this.usersRepository.findByCPF(cpf);
    const foundUserByEmail = await this.usersRepository.findByEmail(email);

    if (foundUserByCPF) {
      throw new AppError('CPF already exists');
    }
    if (foundUserByEmail) {
      throw new AppError('Email already exists');
    }

    await this.usersRepository.create({ name, email, cpf, password });
  }
}
