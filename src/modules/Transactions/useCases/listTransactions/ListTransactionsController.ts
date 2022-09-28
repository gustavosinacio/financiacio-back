import { Request, Response } from "express";
import { ListTransactionsUseCase } from "./ListTransactionsUseCase";

export class ListTransactionsController {
  constructor(private listTransactionsUseCase: ListTransactionsUseCase) {}

  handle(req: Request, res: Response) {
    return res.json(this.listTransactionsUseCase.execute());
  }
}
