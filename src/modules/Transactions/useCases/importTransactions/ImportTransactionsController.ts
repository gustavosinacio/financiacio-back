import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportTransactionsUseCase } from './ImportTransactionsUseCase';

export class ImportTransactionsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file, user } = req;

    console.log(98210, user);

    const importTransactionsUseCase = container.resolve(
      ImportTransactionsUseCase,
    );
    await importTransactionsUseCase.execute({ file, user });

    return res.send();
  }
}
