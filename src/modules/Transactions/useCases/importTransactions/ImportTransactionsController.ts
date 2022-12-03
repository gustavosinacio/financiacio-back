import { Request, Response } from 'express';
import { ImportTransactionsUseCase } from './ImportTransactionsUseCase';

export class ImportTransactionsController {
  constructor(private importTransactionsUseCase: ImportTransactionsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    await this.importTransactionsUseCase.execute(file);

    return res.send();
  }
}
