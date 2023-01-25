import { Request, Response } from "express";

import { CreateTransferUseCase } from "../../../../../application/tranfers_use_cases/create.transfer.use.case";
import { AccountsRepository } from "../../../../../domain/repositories/accounts.repository";
import { postgresAccountRepository, postgresTransferRepository } from "../app";

export class CreateTransferController {
  // constructor(private createTransferUseCase: CreateTransferUseCase) {}
  static async handle(req: Request, res: Response) {
    const createTransferUserCase = new CreateTransferUseCase(
      postgresTransferRepository,
      postgresAccountRepository
    );
    const data = createTransferUserCase.execute(req.body);
    return res.status(201).json(data);
  }
}
