import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ImportTransactionsUseCase } from './ImportTransactionsUseCase';

export class ImportTransactionsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file, user } = req;

    if (!file) {
      throw new AppError('File not received', 400);
    }

    const importTransactionsUseCase = container.resolve(
      ImportTransactionsUseCase,
    );
    await importTransactionsUseCase.execute({ file, user });

    return res.send();
  }
}
