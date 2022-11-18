import { Request, Response } from 'express';

import { ListUsersUseCase } from './ListUsersUseCase';

export class ListUsersController {
  constructor(private listUserUseCase: ListUsersUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    return res.json(await this.listUserUseCase.execute());
  }
}
