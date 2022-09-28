import { Request, Response } from "express";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

export class CreateTransactionController {
  constructor(private createTransactionUseCase: CreateTransactionUseCase) {}

  handle(req: Request, res: Response) {
    const { amount, description } = req.body;

    this.createTransactionUseCase.execute({
      amount,
      description,
    });

    return res.status(201).send();
  }
}
