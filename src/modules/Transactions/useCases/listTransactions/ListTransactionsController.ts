import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListTransactionsUseCase } from './ListTransactionsUseCase';

export class ListTransactionsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listTransactionsUseCase = container.resolve(ListTransactionsUseCase);

    return res.json(await listTransactionsUseCase.execute());
  }
}
