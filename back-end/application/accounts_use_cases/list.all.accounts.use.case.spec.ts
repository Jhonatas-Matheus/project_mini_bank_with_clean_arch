import { describe, it } from "vitest";
import { Account } from "../../domain/entities/Account";
import { InMemoryAccountsRepository } from "../../infra/db/inMemory/in.memory.accounts.repository";
import { CreateAccountUseCase } from "./create.account.use.case";
import { ListAllAccountsUseCase } from "./list.all.accounts.use.case";
import { expect } from "vitest";
describe("ListAllAccounts test.", () => {
  it("Should be able to list all accounts registred.", async () => {
    const inMemoryRepository = new InMemoryAccountsRepository();
    const createAccountUseCase = new CreateAccountUseCase(inMemoryRepository);
    const listAllAccounts = new ListAllAccountsUseCase(inMemoryRepository);
    const account1 = new Account({ ownerName: "Jhonatas", balance: 500 });
    const account2 = new Account({ ownerName: "Matheus", balance: 1000 });
    const account3 = new Account({ ownerName: "Moisés", balance: 1500 });
    await createAccountUseCase.execute(account1);
    await createAccountUseCase.execute(account2);
    await createAccountUseCase.execute(account3);
    const response = await listAllAccounts.execute();
    expect(response).toHaveLength(3);
  });
});
