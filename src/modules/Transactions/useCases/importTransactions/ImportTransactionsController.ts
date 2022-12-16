import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportTransactionsUseCase } from './ImportTransactionsUseCase';

export class ImportTransactionsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    const importTransactionsUseCase = container.resolve(
      ImportTransactionsUseCase,
    );
    await importTransactionsUseCase.execute(file);

    return res.send();
  }
}
