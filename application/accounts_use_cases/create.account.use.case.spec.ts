import { describe, expect, it } from "vitest";
import { InMemoryAccountsRepository } from "../../infra/db/inMemory/in.memory.accounts.repository";
import { CreateAccountUseCase } from "./create.account.use.case";

describe("CreateAccountUseCase tests.", () => {
  it("should be able create a new account.", async () => {
    const accountRepository = new InMemoryAccountsRepository();
    const accountUseCase = new CreateAccountUseCase(accountRepository);

    const response = await accountUseCase.execute({
      ownerName: "Jhonatas",
      balance: 123,
    });
    expect(accountRepository.accounts).toHaveLength(1);
  });
});
