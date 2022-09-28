import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
  constructor(private listUserUseCase: ListUsersUseCase) {}

  handle(req: Request, res: Response): Response {
    return res.json(this.listUserUseCase.execute());
  }
}
