import { describe, expect, it } from "vitest";
import { Account } from "../../domain/entities/Account";
import { InMemoryTransferRepository } from "../../infra/db/inMemory/in.memmory.transfers.repository";
import { InMemoryAccountsRepository } from "../../infra/db/inMemory/in.memory.accounts.repository";
import { CreateTransferUseCase } from "./create.transfer.use.case";

describe("Tranfers tests.", () => {
  it("Should be albe make a transfer with two accounts.", async () => {
    const transfersRepo = new InMemoryTransferRepository();
    const accountRepo = new InMemoryAccountsRepository();
    const createTransferUseCase = new CreateTransferUseCase(
      transfersRepo,
      accountRepo
    );
    const account1 = new Account({ ownerName: "Jhonatas", balance: 500 });
    const account2 = new Account({ ownerName: "Matheus", balance: 1000 });
    await accountRepo.create(account1);
    await accountRepo.create(account2);

    await createTransferUseCase.execute({
      accountFromId: account1.id,
      accountToId: account2.id,
      value: 200,
    });
    const allTransfers = await transfersRepo.listAllTransfer();
    const findAccount = await accountRepo.findAccountById(account1.id);
    // console.log(findAccount);
    expect(allTransfers).toHaveLength(1);
    expect(account1.balance).toStrictEqual(300);
    expect(account2.balance).toStrictEqual(1200);
    expect(findAccount?.balance).toStrictEqual(300);
  });
});
