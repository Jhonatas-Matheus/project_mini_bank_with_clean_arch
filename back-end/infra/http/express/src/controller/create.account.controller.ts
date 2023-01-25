import { Request, Response } from "express";
import { CreateAccountUseCase } from "../../../../../application/accounts_use_cases/create.account.use.case";
import { inMemoryAccountRepository, postgresAccountRepository } from "../app";

export class CreateAccountController {
  static async handle(req: Request, res: Response) {
    const createAccountUseCase = new CreateAccountUseCase(
      postgresAccountRepository
    );
    const data = await createAccountUseCase.execute(req.body);
    return res.status(200).json(data);
  }
}
