import dotenv from 'dotenv';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@errors/AppError';
import { User } from '@modules/Accounts/entities/User';
import { IUsersRepository } from '@modules/Accounts/repositories/IUsersRepository';

dotenv.config();

interface IAuthenticateRequest {
  email: string;
  password: string;
}

interface IAuthenticateResponse {
  user: Pick<User, 'email' | 'name'>;
  token: string;
}

@injectable()
export class AuthenticateUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    email,
    password,
  }: IAuthenticateRequest): Promise<IAuthenticateResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user || !(user.password === password)) {
      throw new AppError('Email or password are incorrect');
    }
    const { name } = user;

    const token = sign({}, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user: { email, name },
      token,
    };
  }
}
