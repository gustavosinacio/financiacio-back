import { Request, Response } from 'express';

import { GetUserUseCase } from './GetUserUseCase';

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    return res.json(await this.getUserUseCase.execute(id));
  }
}
