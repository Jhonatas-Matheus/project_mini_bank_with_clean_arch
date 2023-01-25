import { Request, Response } from "express";
import { ListAllAccountsUseCase } from "../../../../../application/accounts_use_cases/list.all.accounts.use.case";
import { ListAllTransfersOfSpecificUserUseCase } from "../../../../../application/tranfers_use_cases/list.all.transfers.of.specific.user.use.case";
import {
  inMemoryAccountRepository,
  postgresAccountRepository,
  postgresTransferRepository,
} from "../app";

export class ListAllTransfersOfSpecificAccountController {
  static async handle(req: Request, res: Response) {
    const listAllTransfersOfSpecificUserUseCase =
      new ListAllTransfersOfSpecificUserUseCase(postgresTransferRepository);
    const data = await listAllTransfersOfSpecificUserUseCase.execute(
      req.params.id
    );
    return res.status(200).json(data);
  }
}
