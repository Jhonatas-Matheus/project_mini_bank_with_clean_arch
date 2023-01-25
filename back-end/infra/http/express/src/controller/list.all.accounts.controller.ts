import { Request, Response } from "express";
import { ListAllAccountsUseCase } from "../../../../../application/accounts_use_cases/list.all.accounts.use.case";
import { inMemoryAccountRepository, postgresAccountRepository } from "../app";

export class ListAllAccountsController {
  static async handle(req: Request, res: Response) {
    const listAllAccounts = new ListAllAccountsUseCase(
      postgresAccountRepository
    );
    const data = await listAllAccounts.execute();
    return res.status(200).json(data);
  }
}
