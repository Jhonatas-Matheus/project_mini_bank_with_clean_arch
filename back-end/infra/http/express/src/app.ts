import express, { Express } from "express";
import { InMemoryAccountsRepository } from "../../../db/inMemory/in.memory.accounts.repository";
import { PostgresAccountRepository } from "../../../db/postgres/account.repository";
import { AppDataSource } from "../../../db/postgres/data.source";
import { AccountTypeORM } from "../../../db/postgres/entities/Account";
import { TransferTypeORM } from "../../../db/postgres/entities/Transfer";
import { PostgresTransfersRepository } from "../../../db/postgres/transfers.repository";
import { accountRouter } from "./routes/account.routes";
import { tranferRouter } from "./routes/transfer.routes";

export const app: Express = express();
app.use(express.json());
export const inMemoryAccountRepository = new InMemoryAccountsRepository();
export const postgresAccountRepository = new PostgresAccountRepository(
  AppDataSource.getRepository(AccountTypeORM)
);
export const postgresTransferRepository = new PostgresTransfersRepository(
  AppDataSource.getRepository(TransferTypeORM)
);
app.use("/account", accountRouter);
app.use("/transfer", tranferRouter);
