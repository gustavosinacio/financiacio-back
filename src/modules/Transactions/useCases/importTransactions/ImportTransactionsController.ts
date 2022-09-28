import { Request, Response } from "express";
import { ImportTransactionsUseCase } from "./ImportTransactionsUseCase";

export class ImportTransactionsController {
  constructor(private importTransactionsUseCase: ImportTransactionsUseCase) {}

  handle(req: Request, res: Response): Response {
    const { file } = req;

    this.importTransactionsUseCase.execute(file);

    return res.send();
  }
}
