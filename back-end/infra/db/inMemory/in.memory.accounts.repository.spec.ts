import { describe, expect, it } from "vitest";
import { Account } from "../../../domain/entities/Account";
import { InMemoryAccountsRepository } from "./in.memory.accounts.repository";

describe("InMemoryAccountsRepositoryTest", () => {
  it("Should be able create account and persist in database", () => {
    const inMemoryRepository = new InMemoryAccountsRepository();
    const account1 = new Account({ ownerName: "Jhonatas", balance: 500 });
    const account2 = new Account({ ownerName: "Matheus", balance: 1000 });
    const account3 = new Account({ ownerName: "Moisés", balance: 1500 });
    inMemoryRepository.create(account1);
    inMemoryRepository.create(account2);
    inMemoryRepository.create(account3);
    expect(inMemoryRepository.accounts).toHaveLength(3);
  });
  it("Should be able find account by id.", async () => {
    const inMemoryRepository = new InMemoryAccountsRepository();
    const account1 = new Account({ ownerName: "Jhonatas", balance: 500 });
    const account2 = new Account({ ownerName: "Matheus", balance: 1000 });
    const account3 = new Account({ ownerName: "Moisés", balance: 1500 });
    inMemoryRepository.create(account1);
    inMemoryRepository.create(account2);
    inMemoryRepository.create(account3);
    const specificAccount = await inMemoryRepository.findAccountById(
      account2.id
    );
    expect(inMemoryRepository.accounts).toHaveLength(3);
    expect(specificAccount).toStrictEqual(account2);
  });
});
