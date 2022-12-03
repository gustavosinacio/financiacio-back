import { Request, Response } from 'express';
import { ListTransactionsUseCase } from './ListTransactionsUseCase';

export class ListTransactionsController {
  constructor(private listTransactionsUseCase: ListTransactionsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    return res.json(await this.listTransactionsUseCase.execute());
  }
}
