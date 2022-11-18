import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, cpf } = req.body;

    await this.createUserUseCase.execute({ name, email, cpf });

    return res.status(201).send();
  }
}
