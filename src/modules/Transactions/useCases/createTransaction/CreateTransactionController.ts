import { Request, Response } from 'express';
import { CreateTransactionUseCase } from './CreateTransactionUseCase';

export class CreateTransactionController {
  constructor(private createTransactionUseCase: CreateTransactionUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { amount, description } = req.body;

    await this.createTransactionUseCase.execute({
      amount,
      description,
    });

    return res.status(201).send();
  }
}
