import { Request, Response } from 'express';
import { container } from 'tsyringe';

/**
 * This use case has been created as injectable, so I can use it on
 * container.resolve()
 */
import { CreateTransactionUseCase } from './CreateTransactionUseCase';

export class CreateTransactionController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { amount, description } = req.body;

    const createTransactionUseCase = container.resolve(
      CreateTransactionUseCase,
    );

    await createTransactionUseCase.execute({ amount, description });

    return res.status(201).send();
  }
}
