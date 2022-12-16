import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTransactionUseCase } from './CreateTransactionUseCase';

export class CreateTransactionController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { amount, description, user } = req.body;
    console.log(98210, req.body.user);

    const createTransactionUseCase = container.resolve(
      CreateTransactionUseCase,
    );

    await createTransactionUseCase.execute({ amount, description, user });

    return res.status(201).send();
  }
}
