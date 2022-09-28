import { Request, Response } from "express";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

export class CreateTransactionController {
  constructor(private createTransactionUseCase: CreateTransactionUseCase) {}

  handle(req: Request, res: Response) {
    const { userId, amount, description } = req.body;

    this.createTransactionUseCase.execute({
      userId,
      amount,
      description,
    });

    return res.status(201).send();
  }
}
