import { Request, Response } from "express";
import { ListSpecificAccountUseCase } from "../../../../../application/accounts_use_cases/list.specific.account";
import { postgresAccountRepository } from "../app";

export class GetSpecificAccountController {
  static async handle(req: Request, res: Response) {
    const listSpecificAccountUseCase = new ListSpecificAccountUseCase(
      postgresAccountRepository
    );
    const data = await listSpecificAccountUseCase.execute(req.params.id);
    return res.status(200).json(data);
  }
}
