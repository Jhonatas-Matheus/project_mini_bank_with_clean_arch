import { describe, test } from "vitest";
import { Account } from "../../domain/entities/Account";
import { Transfer } from "../../domain/entities/Transfer";
import { InMemoryTransferRepository } from "../../infra/db/inMemory/in.memmory.transfers.repository";
import { InMemoryAccountsRepository } from "../../infra/db/inMemory/in.memory.accounts.repository";
import { TransfersRepository } from "../../domain/repositories/transfers.repository";
import { ListAllTransfersOfSpecificUserUseCase } from "./list.all.transfers.of.specific.user.use.case";

test("Shoud be able to list all transfers of specific account.", async () => {
  const inMemoryRepositoryAccount = new InMemoryAccountsRepository();
  const inMemoryRepositoryTransfer = new InMemoryTransferRepository();
  const listAllTransfersOfSpecificAccountUseCase =
    new ListAllTransfersOfSpecificUserUseCase(inMemoryRepositoryTransfer);
  const account1 = new Account({ ownerName: "Jhonatas", balance: 500 });
  const account2 = new Account({ ownerName: "Matheus", balance: 1000 });
  const account3 = new Account({ ownerName: "Moisés", balance: 2000 });
  await inMemoryRepositoryAccount.create(account1);
  await inMemoryRepositoryAccount.create(account2);
  await inMemoryRepositoryAccount.create(account3);
  const tranfer1 = new Transfer({
    accountFrom: account1,
    accountTo: account2,
    value: 300,
  });
  tranfer1.makeTransfer();
  const tranfer2 = new Transfer({
    accountFrom: account1,
    accountTo: account3,
    value: 150,
  });
  tranfer2.makeTransfer();

  const tranfer3 = new Transfer({
    accountFrom: account2,
    accountTo: account3,
    value: 50,
  });
  tranfer3.makeTransfer();

  const tranfer4 = new Transfer({
    accountFrom: account1,
    accountTo: account3,
    value: 150,
  });
  tranfer4.makeTransfer();
  await inMemoryRepositoryTransfer.create(tranfer1);
  await inMemoryRepositoryTransfer.create(tranfer2);
  await inMemoryRepositoryTransfer.create(tranfer3);
  await inMemoryRepositoryTransfer.create(tranfer4);

  const response = await listAllTransfersOfSpecificAccountUseCase.execute();
});
