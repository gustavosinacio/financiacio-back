import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTransactionUseCase } from './CreateTransactionUseCase';

export class CreateTransactionController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { amount, description, recurrent, user } = req.body;

    const createTransactionUseCase = container.resolve(
      CreateTransactionUseCase,
    );

    await createTransactionUseCase.execute({
      amount,
      description,
      recurrent: recurrent || false,
      user,
    });

    return res.status(201).send();
  }
}
