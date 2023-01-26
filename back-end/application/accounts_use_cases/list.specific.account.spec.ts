import { expect, it, test } from "vitest";
import { Account } from "../../domain/entities/Account";
import { InMemoryAccountsRepository } from "../../infra/db/inMemory/in.memory.accounts.repository";
import { CreateAccountUseCase } from "./create.account.use.case";
import { ListSpecificAccountUseCase } from "./list.specific.account";

test("Should be albe list a specific client by id.", async () => {
  const inMemoryRepositiry = new InMemoryAccountsRepository();
  const createAccountUseCase = new CreateAccountUseCase(inMemoryRepositiry);
  const listSpecificAccountUseCase = new ListSpecificAccountUseCase(
    inMemoryRepositiry
  );
  const account1 = await createAccountUseCase.execute({
    ownerName: "Matheus",
    balance: 1000,
  });
  const account2 = await createAccountUseCase.execute({
    ownerName: "Jhonatas",
    balance: 500,
  });
  const account3 = await createAccountUseCase.execute({
    ownerName: "Moisés",
    balance: 1500,
  });
  const reponse = await listSpecificAccountUseCase.execute(account2.id);
  expect(reponse?.ownerName).toBe("Jhonatas");
});
